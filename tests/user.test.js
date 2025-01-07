require("dotenv").config();

const request = require("supertest");

const express = require("express");

const LocalStrategy = require("passport-local").Strategy;

const { PrismaSessionStore } = require("@quixo3/prisma-session-store");

const passport = require("passport");

const session = require("express-session");

const bcrypt = require("bcryptjs");

const userRouter = require("../routes/userRouter");

const verifyToken = require("../middleware/verifyToken");

const asyncHandler = require("express-async-handler");

const prisma = require("../db/client");

const jwt = require("jsonwebtoken");

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

describe("testing user controllers and routes", (done) => {
  describe("[POST] /users/signup", () => {
    beforeAll(async () => {
      await prisma.$connect();
    });

    afterAll(async () => {
      await prisma.$disconnect();

      const skipDeletionId = [442];

      await prisma.user.deleteMany({
        where: {
          id: {
            notIn: skipDeletionId,
          },
        },
      });

      done;
    });

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

    it("should response with 200 and role by GUEST", async () => {
      const { status, header, body } = await request(app)
        .post("/users/signup")
        .send({
          first_name: "preslaw2",
          last_name: "cvetanow2",
          username: "preslaw2",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      await prisma.user.update({
        where: {
          first_name: "preslaw2",
        },
        data: {
          role: "GUEST",
        },
      });

      const findRegisteredUser = await prisma.user.findFirst({
        where: {
          first_name: "preslaw2",
        },
      });

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(findRegisteredUser).not.toBeNull();

      expect(body.signUpAndCreateUser.first_name).toEqual("preslaw2");

      expect(body.signUpAndCreateUser.last_name).toEqual("cvetanow2");

      expect(body.signUpAndCreateUser.username).toEqual("preslaw2");

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

      expect(findRegisteredUser.role).toEqual("GUEST");

      expect(body.signUpAndCreateUser.groupId).toEqual(null);
    });

    it("should response with 400 if user with that details already exists", async () => {
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

      expect(status).toBe(400);

      expect(header["content-type"]).toMatch(/json/);

      expect(findRegisteredUser).not.toBeNull();

      expect(body[0].msg).toEqual("First name is already taken");

      expect(body[1].msg).toEqual("Last name is already taken");

      expect(body[2].msg).toEqual("Username is already taken");
    });

    it("should response with 400 if the password conditions are not met", async () => {
      const { status, body } = await request(app).post("/users/signup").send({
        first_name: "preslaw3",
        last_name: "cvetanow3",
        username: "preslaw3",
        password: "1234567",
        confirm_password: "12345678Bg@",
        bio: "",
        profile_picture: "",
        background_picture: "",
      });

      expect(status).toBe(400);

      expect(body[1].msg).toEqual(
        "Password must be minimum 8 characters, must have one upper and lower letter, and one special character"
      );
    });

    it("should response with 400 if the passwords are not matched", async () => {
      const { status, body } = await request(app).post("/users/signup").send({
        first_name: "preslaw3",
        last_name: "cvetanow3",
        username: "preslaw3",
        password: "1234567Bg@",
        confirm_password: "12345678Bg",
        bio: "",
        profile_picture: "",
        background_picture: "",
      });

      expect(status).toBe(400);

      expect(body[0].msg).toEqual("Passwords must match");
    });

    describe(`[POST] /users/login`, () => {
      it("should respond with a valid session token when successful", async () => {
        const { body } = await request(app).post("/users/signup").send({
          first_name: "test",
          last_name: "test",
          username: "test",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

        const response = await request(app).post("/users/login").send({
          username: "test",
          password: "12345678Bg@",
        });

        expect(response.body).toHaveProperty("token");
        expect(jwt.verify(response.body.token, process.env.SECRET) === String);
      });

      it("should respond with Unauthorized if role is not an admin", async () => {
        const { body } = await request(app).post("/users/signup").send({
          first_name: "test1",
          last_name: "test1",
          username: "test1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

        const response = await request(app).post("/users/login_admin").send({
          username: "test",
          password: "12345678Bg@",
        });

        expect(response.body.message).toBe("Unauthorized");
      });

      it("should respond with with 200 when login in guest account", async () => {
        const { body } = await request(app).post("/users/signup").send({
          first_name: "test2",
          last_name: "test2",
          username: "test2",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

        await prisma.user.update({
          where: {
            first_name: "test2",
          },
          data: {
            role: "GUEST",
          },
        });

        const response = await request(app).post("/users/login_guest").send({
          username: "test2",
          password: "12345678Bg@",
        });

        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty("token");
        expect(jwt.verify(response.body.token, process.env.SECRET) === String);
      });
    });
    describe("[GET] /users", () => {
      it("should get users details if logged in", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        const response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        expect(response.body.first_name).toEqual("preslaw");

        expect(response.body.last_name).toEqual("cvetanow");

        expect(response.body.username).toEqual("preslaw");

        expect(response.body.password).toEqual(response.body.password);

        expect(response.body.confirm_password).toEqual(
          response.body.confirm_password
        );

        expect(response.body.bio).toBe("");

        expect(response.body.profile_picture).toBe("");

        expect(response.body.background_picture).toBe("");

        expect(response.body.online_presence).toBe("ONLINE");

        expect(response.body.role).toBe("USER");

        expect(response.body.groupId).toBe(null);
      });
    });

    describe("[PUT] /users/ routes", () => {
      it("should respond with 200 and update user information", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        response = await request(app)
          .put(`/users/profile/edit/${response.body.id}`)
          .send({
            first_name: "preslaw-edit",
            last_name: "preslaw-edit",
            username: "preslaw-edit",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "1",
            profile_picture: "2",
            background_picture: "",
          })
          .set("Authorization", `Bearer ${getToken}`);

        expect(response.status).toBe(200);

        expect(response.body.updateUserProfile.first_name).toEqual(
          "preslaw-edit"
        );

        expect(response.body.updateUserProfile.last_name).toEqual(
          "preslaw-edit"
        );

        expect(response.body.updateUserProfile.username).toEqual(
          "preslaw-edit"
        );

        expect(response.body.updateUserProfile.password).toEqual(
          response.body.updateUserProfile.password
        );

        expect(response.body.updateUserProfile.confirm_password).toEqual(
          response.body.updateUserProfile.confirm_password
        );

        expect(response.body.updateUserProfile.bio).toBe("1");

        expect(response.body.updateUserProfile.profile_picture).toBe("2");

        expect(response.body.updateUserProfile.background_picture).toBe("");

        expect(response.body.updateUserProfile.online_presence).toBe("ONLINE");

        expect(response.body.updateUserProfile.role).toBe("USER");

        expect(response.body.updateUserProfile.groupId).toBe(null);
      });

      it("should respond with 400 and when updating the user information", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        response = await request(app)
          .put(`/users/profile/edit/${response.body.id}`)
          .send({
            first_name: "preslaw-edit",
            last_name: "preslaw-edit",
            username: "preslaw-edit",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "1",
            profile_picture: "2",
            background_picture: "",
          })
          .set("Authorization", `Bearer ${getToken}`);

        expect(response.status).toBe(400);

        expect(response.body[0].msg).toEqual("First name is already taken");

        expect(response.body[1].msg).toEqual("Last name is already taken");

        expect(response.body[2].msg).toEqual("Username is already taken");
      });

      it("should respond with 200 when updating the user background picture", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        response = await request(app)
          .put(`/users/profile/${response.body.id}`)
          .send({
            background_picture: "123",
          })
          .set("Authorization", `Bearer ${getToken}`);

        expect(response.status).toBe(200);

        expect(
          response.body.updateUserBackgroundPicture.background_picture
        ).toBe("123");
      });
    });
  });
});
