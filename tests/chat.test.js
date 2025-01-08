require("dotenv").config();

const request = require("supertest");

const express = require("express");

const chatRouter = require("../routes/chatRouter");

const userRouter = require("../routes/userRouter");

const prisma = require("../db/client");

const LocalStrategy = require("passport-local").Strategy;

const { PrismaSessionStore } = require("@quixo3/prisma-session-store");

const passport = require("passport");

const session = require("express-session");

const verifyToken = require("../middleware/verifyToken");

const asyncHandler = require("express-async-handler");

const bcrypt = require("bcryptjs");

const app = express();

app.use(
  session({
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(passport.session());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await prisma.user.findFirst({
        where: {
          username: username,
        },
      });

      console.log(user);

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const match = await bcrypt.compare(password, user.password);
      // console.log(match, password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    // console.log(user);

    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.post(
  "users/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

app.get(
  "users/logout",
  verifyToken,
  asyncHandler(async (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("user/login");
    });

    await prisma.user.update({
      where: {
        id: req.authData.id,
      },
      data: {
        online_presence: "OFFLINE",
      },
    });
  })
);

app.use("/chats", chatRouter);

describe("testing chats controllers and routers", (done) => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();

    // await prisma.user.deleteMany();

    done;
  });

  describe("[POST] /chats", () => {
    it("should respond with 200 if chat is started between 2 users", async () => {
      app.use("/users", userRouter);

      const { body } = await request(app).post("/users/login").send({
        username: "preslaw123",
        password: "12345678Bg@",
      });

      // console.log(body);

      const getToken = body.token;

      let response = await request(app)
        .get("/users")
        .set("Authorization", `Bearer ${getToken}`);

      // console.log(response.body);

      app.use("/chats", chatRouter);

      response = await request(app)
        .post("/chats")
        .send({ id: 863, id: 864 })
        .set("Authorization", `Bearer ${getToken}`);

      // console.log(response.body);

      expect(response.status).toBe(200);

      expect(response.body.createChat.id).toBe(response.body.createChat.id);

      expect(response.body.createChat.groupId).toBe(null);
    });
  });
});
