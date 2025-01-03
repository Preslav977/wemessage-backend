require("dotenv").config();

const request = require("supertest");

const express = require("express");

const LocalStrategy = require("passport-local").Strategy;

const passport = require("passport");

const session = require("express-session");

const bcrypt = require("bcryptjs");

const userRouter = require("../routes/userRouter");

const { PrismaClient } = require("@prisma/client");

const { PrismaSessionStore } = require("@quixo3/prisma-session-store");

const verifyToken = require("../middleware/verifyToken");

const asyncHandler = require("express-async-handler");

const app = express();

app.use(
  session({
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(new PrismaClient(), {
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

      // console.log(user);

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
  "/users/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

app.get(
  "/users/logout",
  verifyToken,
  asyncHandler(async (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/user/login");
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

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`Express app - listening on port ${PORT}!`));

app.use("/users", userRouter);

const databaseUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
});

describe("testing user controllers and routes", () => {
  beforeAll(() => {});

  afterAll(async () => {
    await prisma.user.deleteMany();
  });

  describe("[POST] /users/signup", () => {
    it("should response with a 200 status code an user details", async () => {
      const { status, header, body } = await request(app)
        .post("/users/signup")
        .send({
          first_name: "preslaw",
          last_name: "cvetanow",
          username: "preslaw",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const findRegisteredUser = await prisma.user.findFirst();

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(findRegisteredUser).not.toBeNull();

      expect(body.signUpAndCreateUser.first_name).toEqual("preslaw");

      expect(body.signUpAndCreateUser.last_name).toEqual("cvetanow");

      expect(body.signUpAndCreateUser.username).toEqual("preslaw");

      expect(body.signUpAndCreateUser.password).toEqual(
        body.signUpAndCreateUser.password
      );

      expect(body.signUpAndCreateUser.confirm_password).toEqual(
        body.signUpAndCreateUser.confirm_password
      );

      expect(body.signUpAndCreateUser.bio).toEqual("");

      expect(body.signUpAndCreateUser.profile_picture).toEqual("");

      expect(body.signUpAndCreateUser.background_picture).toEqual("");

      expect(body.signUpAndCreateUser.online_presence).toEqual("OFFLINE");

      expect(body.signUpAndCreateUser.role).toEqual("USER");

      expect(body.signUpAndCreateUser.groupId).toEqual(null);
    });

    it("should response with 200 and role by ADMIN", async () => {
      const { status, header, body } = await request(app)
        .post("/users/signup")
        .send({
          first_name: "preslaw1",
          last_name: "cvetanow1",
          username: "preslaw1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      await prisma.user.update({
        where: {
          first_name: "preslaw1",
        },
        data: {
          role: "ADMIN",
        },
      });

      const findRegisteredUser = await prisma.user.findFirst({
        where: {
          first_name: "preslaw1",
        },
      });

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(findRegisteredUser).not.toBeNull();

      expect(body.signUpAndCreateUser.first_name).toEqual("preslaw1");

      expect(body.signUpAndCreateUser.last_name).toEqual("cvetanow1");

      expect(body.signUpAndCreateUser.username).toEqual("preslaw1");

      expect(body.signUpAndCreateUser.password).toEqual(
        body.signUpAndCreateUser.password
      );

      expect(body.signUpAndCreateUser.confirm_password).toEqual(
        body.signUpAndCreateUser.confirm_password
      );

      expect(body.signUpAndCreateUser.bio).toEqual("");

      expect(body.signUpAndCreateUser.profile_picture).toEqual("");

      expect(body.signUpAndCreateUser.background_picture).toEqual("");

      expect(body.signUpAndCreateUser.online_presence).toEqual("OFFLINE");

      expect(findRegisteredUser.role).toEqual("ADMIN");

      expect(body.signUpAndCreateUser.groupId).toEqual(null);
    });
  });
});
