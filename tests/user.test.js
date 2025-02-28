require("dotenv").config();

const request = require("supertest");

const prisma = require("../db/client");

const userRouter = require("../routes/userRouter");

const jwt = require("jsonwebtoken");

const app = require("../app");

app.use("/", userRouter);

describe("testing user controllers and routes", (done) => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();

    await prisma.user.deleteMany();

    done;
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
      const { status, header, body } = await request(app)
        .post("/users/signup")
        .send({
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

      expect(header["content-type"]).toMatch(/json/);

      expect(body[1].msg).toEqual(
        "Password must be minimum 8 characters, must have one upper and lower letter, and one special character"
      );
    });

    it("should response with 400 if the passwords are not matched", async () => {
      const { status, body, header } = await request(app)
        .post("/users/signup")
        .send({
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

      expect(header["content-type"]).toMatch(/json/);

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
            profile_picture: "",
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

        expect(response.body.updateUserProfile.profile_picture).toBe("");

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
            profile_picture: "",
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
          .put(`/users/profile/background_image/${response.body.id}`)

          .set("Authorization", `Bearer ${getToken}`)

          .attach("file", "public/Screenshot_2025-01-09_12-31-20.png");

        expect(response.status).toBe(200);

        expect(
          response.body.updateUserBackgroundPicture.background_picture
        ).toBe(
          "https://res.cloudinary.com/dsofl9wku/image/upload/v1736579322/wemessage_images/Screenshot_2025-01-09_12-31-20.png.png"
        );
      });

      it("should respond with 200 when updating the user passwords", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        response = await request(app)
          .put(`/users/profile/change_passwords/${response.body.id}`)
          .send({
            old_password: "12345678Bg@",
            password: "12345678Bg@123",
            confirm_password: "12345678Bg@123",
          })
          .set("Authorization", `Bearer ${getToken}`);

        expect(response.body.updateUserPasswords.password).toEqual(
          response.body.updateUserPasswords.password
        );

        expect(response.body.updateUserPasswords.confirm_password).toEqual(
          response.body.updateUserPasswords.confirm_password
        );

        expect(response.status).toBe(200);
      });

      it("should respond with message when updating the user passwords", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@123",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        response = await request(app)
          .put(`/users/profile/change_passwords/${response.body.id}`)
          .send({
            old_password: "12345678Bg@12",
            password: "12345678Bg@123",
            confirm_password: "12345678Bg@123",
          })
          .set("Authorization", `Bearer ${getToken}`);

        expect(response.body.message).toBe("Old password doesn't match.");
      });

      it("should response with 400 when user tries to update passwords, but conditions are not met", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@123",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        response = await request(app)
          .put(`/users/profile/change_passwords/${response.body.id}`)
          .send({
            old_password: "12345678Bg@123",
            password: "12345678",
            confirm_password: "12345678Bg@123",
          })
          .set("Authorization", `Bearer ${getToken}`);

        expect(response.status).toBe(400);

        expect(response.body[0].msg).toEqual(
          "Password must be minimum 8 characters, must have one upper and lower letter, and one special character"
        );

        expect(response.body[1].msg).toEqual("Passwords must match");
      });

      it("should return user when searching", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@123",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users/search?first_name=preslaw1&last_name=c")
          .set("Authorization", `Bearer ${getToken}`);

        expect(response.body.searchForUser[0].first_name).toBe("preslaw1");

        expect(response.body.searchForUser[0].last_name).toBe("cvetanow1");

        expect(response.body.searchForUser[0].username).toBe("preslaw1");

        expect(response.body.searchForUser[0].password).toBe(
          response.body.searchForUser[0].password
        );

        expect(response.body.searchForUser[0].confirm_password).toBe(
          response.body.searchForUser[0].confirm_password
        );

        expect(response.body.searchForUser[0].bio).toBe("");

        expect(response.body.searchForUser[0].profile_picture).toBe("");

        expect(response.body.searchForUser[0].background_picture).toBe("");

        expect(response.body.searchForUser[0].role).toBe("ADMIN");

        expect(response.body.searchForUser[0].groupId).toBe(null);

        expect(response.body.searchForUser[0].online_presence).toBe("OFFLINE");
      });
    });
  });
});
