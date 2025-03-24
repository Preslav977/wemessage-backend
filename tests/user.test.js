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
    it("should respond with 200 status when user sign up", async () => {
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

      expect(body.first_name).toEqual("preslaw");

      expect(body.last_name).toEqual("cvetanow");

      expect(body.username).toEqual("preslaw");

      expect(body.password).toEqual(body.password);

      expect(body.confirm_password).toEqual(body.confirm_password);

      expect(body.bio).toEqual("");

      expect(body.profile_picture).toEqual("");

      expect(body.background_picture).toEqual("");

      expect(body.online_presence).toEqual("OFFLINE");

      expect(body.role).toEqual("USER");

      expect(body.groupId).toEqual(null);

      expect(body.globalChatId).toEqual(null);
    });

    it("should respond with 400 if first, last and username are used already", async () => {
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

        expect(findRegisteredUser.first_name).toEqual("preslaw1");

        expect(findRegisteredUser.last_name).toEqual("cvetanow1");

        expect(findRegisteredUser.username).toEqual("preslaw1");

        expect(findRegisteredUser.password).toEqual(
          findRegisteredUser.password
        );

        expect(findRegisteredUser.confirm_password).toEqual(
          findRegisteredUser.confirm_password
        );

        expect(findRegisteredUser.bio).toEqual("");

        expect(findRegisteredUser.profile_picture).toEqual("");

        expect(findRegisteredUser.background_picture).toEqual("");

        expect(findRegisteredUser.online_presence).toEqual("OFFLINE");

        expect(findRegisteredUser.role).toEqual("ADMIN");

        expect(findRegisteredUser.groupId).toEqual(null);

        expect(findRegisteredUser.globalChatId).toEqual(null);
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

        expect(findRegisteredUser.first_name).toEqual("preslaw2");

        expect(findRegisteredUser.last_name).toEqual("cvetanow2");

        expect(findRegisteredUser.username).toEqual("preslaw2");

        expect(findRegisteredUser.password).toEqual(
          findRegisteredUser.password
        );

        expect(findRegisteredUser.confirm_password).toEqual(
          findRegisteredUser.confirm_password
        );

        expect(findRegisteredUser.bio).toEqual("");

        expect(findRegisteredUser.profile_picture).toEqual("");

        expect(findRegisteredUser.background_picture).toEqual("");

        expect(findRegisteredUser.online_presence).toEqual("OFFLINE");

        expect(findRegisteredUser.role).toEqual("GUEST");

        expect(findRegisteredUser.groupId).toEqual(null);

        expect(findRegisteredUser.globalChatId).toEqual(null);
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

      it("should respond with with 200 when logged in as guest", async () => {
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

        expect(response.body.globalChatId).toBe(null);
      });
    });

    describe("[GET] /users/id", () => {
      it("should get user details by ID", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        const findLoggedInUser = await prisma.user.findFirst({
          where: {
            username: "preslaw",
          },
        });

        const response = await request(app)
          .get(`/users/${findLoggedInUser.id}`)
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

        expect(response.body.globalChatId).toBe(null);
      });
    });

    describe("[GET] /users/all", () => {
      it("should return all users", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        const response = await request(app)
          .get("/users/all")
          .set("Authorization", `Bearer ${getToken}`);

        response._body.map((user) => {
          expect(user.id).toBe(user.id),
            expect(user.first_name).toBe(user.first_name),
            expect(user.last_name).toBe(user.last_name),
            expect(user.username).toBe(user.username),
            expect(user.password).toBe(user.password),
            expect(user.confirm_password).toBe(user.confirm_password),
            expect(user.bio).toBe(user.bio),
            expect(user.profile_picture).toBe(user.profile_picture),
            expect(user.background_picture).toBe(user.background_picture),
            expect(user.online_presence).toBe(user.online_presence),
            expect(user.groupId).toBe(user.groupId),
            expect(user.globalChatId).toBe(user.globalChatId);
        });
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

        expect(response.body.first_name).toEqual("preslaw-edit");

        expect(response.body.last_name).toEqual("preslaw-edit");

        expect(response.body.username).toEqual("preslaw-edit");

        expect(response.body.password).toEqual(response.body.password);

        expect(response.body.confirm_password).toEqual(
          response.body.confirm_password
        );

        expect(response.body.bio).toBe("1");

        expect(response.body.profile_picture).toBe("");

        expect(response.body.background_picture).toBe("");

        expect(response.body.online_presence).toBe("ONLINE");

        expect(response.body.role).toBe("USER");

        expect(response.body.groupId).toBe(null);

        expect(response.body.globalChatId).toBe(null);
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
          .attach("file", "public/image.png");

        expect(response.status).toBe(200);
        expect(response.body.background_picture).toBe(
          response.body.background_picture
        );
      });

      it("should respond with message when the user doesn't upload a image", async () => {
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
          .attach("file", "public/document.txt");

        expect(response.status).toBe(200);

        expect(response._body).toBe("An unknown file format not allowed");
      });

      it("should respond with message when the user uploads image bigger than 5MB", async () => {
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
          .attach("file", "public/Teruel.jpg");

        expect(response.status).toBe(400);

        expect(response._body[0].msg).toBe("Image size exceed 5 MB");
      }, 10000);

      it("should respond with 200 when updating the user profile picture", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        response = await request(app)
          .put(`/users/profile_image/${response.body.id}`)
          .set("Authorization", `Bearer ${getToken}`)
          .attach("file", "public/image.png");

        expect(response.status).toBe(200);
        expect(response.body.background_picture).toBe(
          response.body.background_picture
        );
      });

      it("should respond with message when the user doesn't upload a image", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        response = await request(app)
          .put(`/users/profile_image/${response.body.id}`)
          .set("Authorization", `Bearer ${getToken}`)
          .attach("file", "public/document.txt");

        expect(response.status).toBe(200);

        expect(response._body).toBe("An unknown file format not allowed");
      });

      it("should respond with message when the user uploads image bigger than 5MB", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users")
          .set("Authorization", `Bearer ${getToken}`);

        response = await request(app)
          .put(`/users/profile_image/${response.body.id}`)
          .set("Authorization", `Bearer ${getToken}`)
          .attach("file", "public/Teruel.jpg");

        expect(response.status).toBe(400);

        expect(response._body[0].msg).toBe("Image size exceed 5 MB");
      }, 10000);

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

        expect(response.body.password).toEqual(response.body.password);

        expect(response.body.confirm_password).toEqual(
          response.body.confirm_password
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

        expect(response._body[0].msg).toBe("Old password doesn't match.");
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
    });

    describe("[GET] /users/search", () => {
      it("should return user when searching", async () => {
        const { body } = await request(app).post("/users/login").send({
          username: "preslaw-edit",
          password: "12345678Bg@123",
        });

        const getToken = body.token;

        let response = await request(app)
          .get("/users/search?query=preslaw1")
          .set("Authorization", `Bearer ${getToken}`);

        expect(response.body[0].first_name).toBe("preslaw1");

        expect(response.body[0].last_name).toBe("cvetanow1");

        expect(response.body[0].username).toBe("preslaw1");

        expect(response.body[0].password).toBe(response.body[0].password);

        expect(response.body[0].confirm_password).toBe(
          response.body[0].confirm_password
        );

        expect(response.body[0].bio).toBe("");

        expect(response.body[0].profile_picture).toBe("");

        expect(response.body[0].background_picture).toBe("");

        expect(response.body[0].role).toBe("ADMIN");

        expect(response.body[0].groupId).toBe(null);

        expect(response.body[0].globalChatId).toBe(null);

        expect(response.body[0].online_presence).toBe("OFFLINE");
      });
    });
  });
});
