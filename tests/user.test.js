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

// app.use(
//   session({
//     cookie: {
//       maxAge: 24 * 60 * 60 * 1000,
//     },
//     secret: process.env.sessionSecret,
//     resave: false,
//     saveUninitialized: false,
//     store: new PrismaSessionStore(new PrismaClient(), {
//       checkPeriod: 2 * 60 * 1000,
//       dbRecordIdIsSessionId: true,
//       dbRecordIdFunction: undefined,
//     }),
//   })
// );

// app.use(passport.session());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// passport.use(
//   new LocalStrategy(async (username, password, done) => {
//     try {
//       const user = await prisma.user.findFirst({
//         where: {
//           username: username,
//         },
//       });

//       // console.log(user);

//       if (!user) {
//         return done(null, false, { message: "Incorrect username" });
//       }
//       const match = await bcrypt.compare(password, user.password);
//       // console.log(match, password, user.password);
//       if (!match) {
//         return done(null, false, { message: "Incorrect password" });
//       }
//       return done(null, user);
//     } catch (err) {
//       return done(err);
//     }
//   })
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await prisma.user.findFirst({
//       where: {
//         id: Number(id),
//       },
//     });

//     // console.log(user);

//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// });

// app.post(
//   "/users/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/",
//   })
// );

// app.get(
//   "/users/logout",
//   verifyToken,
//   asyncHandler(async (req, res, next) => {
//     req.logout((err) => {
//       if (err) {
//         return next(err);
//       }
//       res.redirect("/user/login");
//     });

//     await prisma.user.update({
//       where: {
//         id: req.authData.id,
//       },
//       data: {
//         online_presence: "OFFLINE",
//       },
//     });
//   })
// );

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

describe("/auth", () => {
  describe("[POST] /auth/signup", () => {
    it("users should able to sign up", async () => {
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

      console.log(findRegisteredUser.first_name);
    });
  });
});
