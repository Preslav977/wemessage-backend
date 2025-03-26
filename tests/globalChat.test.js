const request = require("supertest");

const globalChatRouter = require("../routes/globalChatRouter");

const prisma = require("../db/client");

const app = require("../app");

app.use("/", globalChatRouter);

describe("testing globalChat controllers and routers", (done) => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();

    await prisma.user.deleteMany();

    await prisma.message.deleteMany();

    done;
  });

  describe("[POST] /globalChat", () => {
    it("should create a globalChat", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "newuser",
          last_name: "newuser",
          username: "newuser",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "newuser1",
          last_name: "newuser1",
          username: "newuser1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "newuser",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser.body;

      const userId = registeredReceiverUser.body.id;

      const { body, status, header } = await request(app)
        .post("/globalChat")

        .send({ userId: userId })

        .set("Authorization", `Bearer ${token}`);

      expect(body.id).toBe(body.id);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      body.users.map((user) => {
        expect(user.id).toBe(user.id);

        expect(user.first_name).toBe(user.first_name);

        expect(user.last_name).toBe(user.last_name);

        expect(user.username).toBe(user.username);

        expect(user.password).toBe(user.password);

        expect(user.confirm_password).toBe(user.confirm_password);

        expect(user.bio).toBe("");

        expect(user.profile_picture).toBe("");

        expect(user.background_picture).toBe("");

        expect(user.online_presence).toBe(user.online_presence);

        expect(user.role).toBe("USER");

        expect(user.groupId).toBe(null);

        expect(user.globalChatId).toBe(user.globalChatId);
      });

      expect(body.messagesGGChat).toEqual([]);
    });

    it("should send a message in the globalChat", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "user",
          last_name: "user",
          username: "user",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "user1",
          last_name: "user1",
          username: "user1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "user",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser.body;

      const userId = registeredReceiverUser.body.id;

      const response = await request(app)
        .post("/globalChat")

        .send({ userId: userId })

        .set("Authorization", `Bearer ${token}`);

      const { body, headers, status } = await request(app)
        .post(`/globalChat/${response.body.id}/message`)

        .send({
          message_text: "hello",
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          globalChatId: response.body.id,
        })

        .set("Authorization", `Bearer ${token}`);

      const message = body.messagesGGChat[0];

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      expect(message.id).toBe(message.id);

      expect(message.message_text).toEqual("hello");

      expect(message.message_imageName).toBe("");

      expect(message.message_imageURL).toBe("");

      expect(message.message_imageType).toBe("");

      expect(message.message_imageSize).toBe(0);

      expect(message.createdAt).toBe(message.createdAt);

      expect(message.updatedAt).toBe(message.updatedAt);

      expect(message.userId).toBe(message.userId);

      expect(message.groupId).toBe(null);

      expect(message.globalChatId).toBe(message.globalChatId);
    });

    it("should send a image in the globalChat", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "userr",
          last_name: "userr",
          username: "userr",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "userr1",
          last_name: "userr1",
          username: "userr1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "user",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser.body;

      const userId = registeredReceiverUser.body.id;

      const response = await request(app)
        .post("/globalChat")

        .send({ userId: userId })

        .set("Authorization", `Bearer ${token}`);

      const { body, headers, status } = await request(app)
        .post(`/globalChat/${response.body.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .field("globalChatId", response.body.id)

        .attach("file", "public/image.png");

      const message = body.messagesGGChat[0];

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      expect(message.id).toBe(message.id);

      expect(message.message_text).toEqual("");

      expect(message.message_imageName).toBe(message.message_imageName);

      expect(message.message_imageURL).toBe(message.message_imageURL);

      expect(message.message_imageType).toBe(message.message_imageType);

      expect(message.message_imageSize).toBe(message.message_imageSize);

      expect(message.createdAt).toBe(message.createdAt);

      expect(message.updatedAt).toBe(message.updatedAt);

      expect(message.userId).toBe(message.userId);

      expect(message.groupId).toBe(null);

      expect(message.globalChatId).toBe(message.globalChatId);
    });

    it("should return error message if the user doesn't upload a image", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "random",
          last_name: "random",
          username: "random",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "random1",
          last_name: "random1",
          username: "random1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "user",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser.body;

      const userId = registeredReceiverUser.body.id;

      const response = await request(app)
        .post("/globalChat")

        .send({ userId: userId })

        .set("Authorization", `Bearer ${token}`);

      const { body, headers } = await request(app)
        .post(`/globalChat/${response.body.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .field("globalChatId", response.body.id)

        .attach("file", "public/document.txt");

      expect(headers["content-type"]).toMatch(/json/);

      expect(body).toEqual("An unknown file format not allowed");
    });

    it("should show error message if the image is too big", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "flex",
          last_name: "flex",
          username: "flex",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "flex1",
          last_name: "flex1",
          username: "flex1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "user",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser.body;

      const userId = registeredReceiverUser.body.id;

      const response = await request(app)
        .post("/globalChat")

        .send({ userId: userId })

        .set("Authorization", `Bearer ${token}`);

      const { body, headers, status } = await request(app)
        .post(`/globalChat/${response.body.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .field("globalChatId", response.body.id)

        .attach("file", "public/Teruel.jpg");

      expect(status).toBe(400);

      expect(headers["content-type"]).toMatch(/json/);

      expect(body[0].msg).toEqual("Image size exceed 5 MB");
    }, 10000);
  });

  describe("[GET] /globalChat", () => {
    it("should return globalChat information", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "flexing",
          last_name: "flexing",
          username: "flexing",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "flexing1",
          last_name: "flexing1",
          username: "flexing1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "user",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser.body;

      const userId = registeredReceiverUser.body.id;

      const response = await request(app)
        .post("/globalChat")

        .send({ userId: userId })

        .set("Authorization", `Bearer ${token}`);

      const { body, headers, status } = await request(app)
        .get(`/globalChat/${response.body.id}`)

        .set("Authorization", `Bearer ${token}`);

      expect(body.id).toBe(body.id);

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      body.users.map((user) => {
        expect(user.id).toBe(user.id);

        expect(user.first_name).toBe(user.first_name);

        expect(user.last_name).toBe(user.last_name);

        expect(user.username).toBe(user.username);

        expect(user.password).toBe(user.password);

        expect(user.confirm_password).toBe(user.confirm_password);

        expect(user.bio).toBe("");

        expect(user.profile_picture).toBe("");

        expect(user.background_picture).toBe("");

        expect(user.online_presence).toBe(user.online_presence);

        expect(user.role).toBe("USER");

        expect(user.groupId).toBe(null);

        expect(user.globalChatId).toBe(user.globalChatId);
      });

      expect(body.messagesGGChat).toEqual([]);
    });
  });

  describe("[PUT] /globalChat", () => {
    it("should edit a message in globalChat", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "testing123",
          last_name: "testing123",
          username: "testing123",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "testing456",
          last_name: "testing456",
          username: "testing456",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "testing123",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser.body;

      const userId = registeredReceiverUser.body.id;

      const response = await request(app)
        .post("/globalChat")

        .send({ userId: userId })

        .set("Authorization", `Bearer ${token}`);

      const sendingMessage = await request(app)
        .post(`/globalChat/${response.body.id}/message`)

        .send({
          message_text: "hello",
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          globalChatId: response.body.id,
        })

        .set("Authorization", `Bearer ${token}`);

      const { body, headers, status } = await request(app)
        .put(
          `/globalChat/${response.body.id}/message/${sendingMessage.body.messagesGGChat[0].id}`
        )

        .send({
          message_text: "bye",
          globalChatId: response.body.id,
        })

        .set("Authorization", `Bearer ${token}`);

      const message = body.messagesGGChat[0];

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      expect(message.id).toBe(message.id);

      expect(message.message_text).toEqual("bye");

      expect(message.message_imageName).toBe("");

      expect(message.message_imageURL).toBe("");

      expect(message.message_imageType).toBe("");

      expect(message.message_imageSize).toBe(0);

      expect(message.createdAt).toBe(message.createdAt);

      expect(message.updatedAt).toBe(message.updatedAt);

      expect(message.userId).toBe(message.userId);

      expect(message.groupId).toBe(null);

      expect(message.globalChatId).toBe(message.globalChatId);
    });

    it("should create globalChat and user can join afterwards", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "who",
          last_name: "who",
          username: "who",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "i",
          last_name: "i",
          username: "i",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredNewUser = await request(app).post("/users/signup").send({
        first_name: "am",
        last_name: "am",
        username: "am",
        password: "12345678Bg@",
        confirm_password: "12345678Bg@",
        bio: "",
        profile_picture: "",
        background_picture: "",
      });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "who",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser.body;

      const userId = registeredReceiverUser.body.id;

      const response = await request(app)
        .post("/globalChat")

        .send({ userId: userId })

        .set("Authorization", `Bearer ${token}`);

      const loggedInNewUser = await request(app).post("/users/login").send({
        username: "am",
        password: "12345678Bg@",
      });

      const getToken = loggedInNewUser.body.token;

      const { body, status, headers } = await request(app)
        .put(`/globalChat/${response.body.id}/join`)

        .send({ userId: userId })

        .set("Authorization", `Bearer ${getToken}`);

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      expect(body.users.length).toEqual(3);

      expect(body.users.length).not.toEqual(2);
    });
  });

  describe("[DELETE] /globalChat", () => {
    it("should delete a message in chat", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "dunno",
          last_name: "dunno",
          username: "dunno",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "whoiam",
          last_name: "whoiam",
          username: "whoiam",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "dunno",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser.body;

      const userId = registeredReceiverUser.body.id;

      const response = await request(app)
        .post("/globalChat")

        .send({ userId: userId })

        .set("Authorization", `Bearer ${token}`);

      const sendingMessage = await request(app)
        .post(`/globalChat/${response.body.id}/message`)

        .send({
          message_text: "hello",
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          globalChatId: response.body.id,
        })

        .set("Authorization", `Bearer ${token}`);

      console.log(sendingMessage.body);

      const messageId = sendingMessage.body.messagesGGChat[0].id;

      const { body, status, headers } = await request(app)
        .delete(`/globalChat/${response.body.id}/message/${messageId}`)

        .send({
          messageId: messageId,
          globalChatId: response.body.id,
        })

        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      expect(body.messagesGGChat).toEqual([]);
    });
  });
});
