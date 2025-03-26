const request = require("supertest");

const groupRouter = require("../routes/groupRouter");

const prisma = require("../db/client");

const app = require("../app");

app.use("/", groupRouter);

describe("testing groups controllers and routes", (done) => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();

    await prisma.user.deleteMany();

    await prisma.chat.deleteMany();

    await prisma.group.deleteMany();

    done;
  });

  describe("[POST] /groups", () => {
    it("should respond with 200 when creating new group", async () => {
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

      const { token } = logInRegisteredUser._body;

      const { body, status, header } = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(body.id).toEqual(body.id);

      expect(body.group_name).toEqual("group");

      expect(body.group_image).toEqual(body.group_image);

      expect(body.group_creatorId).toEqual(body.group_creatorId);

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

        expect(user.groupId).toBe(user.groupId);

        expect(user.globalChatId).toBe(null);
      });

      expect(body.messagesGGChat).toEqual([]);
    });

    it("should respond with 400 when group already exists", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "newuser2",
          last_name: "newuser2",
          username: "newuser2",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "newuser3",
          last_name: "newuser3",
          username: "newuser3",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "newuser2",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const { body, status, header } = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      expect(status).toBe(400);

      expect(header["content-type"]).toMatch(/json/);

      expect(body[0].msg).toEqual("Group name is already taken");
    });

    it("should respond with 400 when group name condition is not met", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "test",
          last_name: "test",
          username: "test",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "test1",
          last_name: "test1",
          username: "test1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "test",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const { body, status, header } = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "gr")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      expect(status).toBe(400);

      expect(header["content-type"]).toMatch(/json/);

      expect(body[0].msg).toBe(
        "Group name must be between 3 and 30 characters"
      );
    });

    it("should respond with 200 when sending a message in group", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "testing",
          last_name: "testing",
          username: "testing",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "testing1",
          last_name: "testing1",
          username: "testing1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "newuser2",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const { body, status, header } = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "new group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      // console.log(body);

      const response = await request(app)
        .post(`/groups/${body.id}/message/`)
        .send({
          message_text: "hello",
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          // userId: userOneId,
          groupId: body.id,
        })
        .set("Authorization", `Bearer ${token}`);

      // console.log(response);

      const message = response.body.messagesGGChat[0];

      expect(response.status).toBe(200);

      expect(response.header["content-type"]).toMatch(/json/);

      expect(message.id).toBe(message.id);

      expect(message.message_text).toEqual("hello");

      expect(message.message_imageName).toBe("");

      expect(message.message_imageURL).toBe("");

      expect(message.message_imageType).toBe("");

      expect(message.message_imageSize).toBe(0);

      expect(message.createdAt).toBe(message.createdAt);

      expect(message.updatedAt).toBe(message.updatedAt);

      expect(message.userId).toBe(message.userId);

      expect(message.groupId).toBe(message.groupId);
    });

    it("should respond with 200 when sending an image in group", async () => {
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
        username: "random",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const { body } = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "random")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      const groupId = body.id;

      const response = await request(app)
        .post(`/groups/${groupId}/image`)

        .field("groupId", body.id)

        .attach("file", "public/image.png")

        .set("Authorization", `Bearer ${token}`);

      const message = response.body.messagesGGChat[0];

      expect(response.status).toBe(200);

      expect(response.header["content-type"]).toMatch(/json/);

      expect(message.id).toBe(message.id);

      expect(message.message_text).toEqual("");

      expect(message.message_imageName).toBe(message.message_imageName);

      expect(message.message_imageURL).toBe(message.message_imageURL);

      expect(message.message_imageType).toBe(message.message_imageType);

      expect(message.message_imageSize).toBe(message.message_imageSize);

      expect(message.createdAt).toBe(message.createdAt);

      expect(message.updatedAt).toBe(message.updatedAt);

      expect(message.userId).toBe(message.userId);

      expect(message.groupId).toBe(message.groupId);
    });

    it("should respond with message if you don't upload an image", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "useR",
          last_name: "useR",
          username: "useR",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "useR1",
          last_name: "useR1",
          username: "useR1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "useR",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const { body } = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "a group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      const groupId = body.id;

      const response = await request(app)
        .post(`/groups/${groupId}/image`)

        .field("groupId", body.id)

        .attach("file", "public/document.txt")

        .set("Authorization", `Bearer ${token}`);

      expect(response.body).toEqual("An unknown file format not allowed");
    });

    it("should respond with 400 if image is too big", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "useRr",
          last_name: "useRr",
          username: "useRr",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "useRr1",
          last_name: "useRr1",
          username: "useRr1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "useRr",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const { body } = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "le group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      const groupId = body.id;

      const response = await request(app)
        .post(`/groups/${groupId}/image`)

        .field("groupId", body.id)

        .attach("file", "public/Teruel.jpg")

        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(400);

      expect(response.body[0].msg).toBe("Image size exceed 5 MB");
    }, 10000);
  });

  describe("[GET] /groups", () => {
    it("should respond with 200 and group information", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "truck",
          last_name: "truck",
          username: "truck",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "truck1",
          last_name: "truck1",
          username: "truck1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "truck",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const response = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "le truck")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      const { body, status, headers } = await request(app)
        .get(`/groups/${response.body.id}`)

        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      expect(body.id).toEqual(body.id);

      expect(body.group_name).toEqual(body.group_name);

      expect(body.group_image).toEqual(body.group_image);

      expect(body.group_creatorId).toEqual(body.group_creatorId);

      expect(body.messagesGGChat).toEqual([]);

      body.users.map((user) => {
        expect(user.id).toBe(user.id);

        expect(user.first_name).toBe(user.first_name);

        expect(user.last_name).toBe(user.last_name);

        expect(user.username).toBe(user.username);

        expect(user.password).toBe(user.password);

        expect(user.confirm_password).toBe(user.confirm_password);

        expect(user.bio).toBe(user.bio);

        expect(user.profile_picture).toBe(user.profile_picture);

        expect(user.background_picture).toBe(user.background_picture);

        expect(user.online_presence).toBe(user.online_presence);

        expect(user.role).toBe(user.role);

        expect(user.groupId).toBe(user.groupId);

        expect(user.globalChatId).toBe(user.globalChatId);
      });
    });

    it("should respond with 200 and get all groups information", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "bike",
          last_name: "bike",
          username: "bike",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "bike1",
          last_name: "bike1",
          username: "bike1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "bike",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "le bike")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      const { body, status, headers } = await request(app)
        .get("/groups")

        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      body.map((groups) => {
        expect(groups.id).toEqual(groups.id);

        expect(groups.group_name).toEqual(groups.group_name);

        expect(groups.group_image).toEqual(groups.group_image);

        expect(groups.group_creatorId).toEqual(groups.group_creatorId);
      });
    });
  });

  describe("[PUT] /groups", () => {
    it("should respond with 200 if the message is updated", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "someone",
          last_name: "someone",
          username: "someone",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "else",
          last_name: "else",
          username: "else",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "someone",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const { body, status, header } = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "someone group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      // console.log(body);

      const sendMessage = await request(app)
        .post(`/groups/${body.id}/message/`)
        .send({
          message_text: "hello",
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          // userId: userOneId,
          groupId: body.id,
        })
        .set("Authorization", `Bearer ${token}`);

      const messageId = sendMessage.body.messagesGGChat[0].id;

      // console.log(messageId);

      const editMessage = await request(app)
        .put(`/groups/${body.id}/message/${messageId}`)
        .send({
          message_text: "updated message",
          updatedAt: new Date(),
          // userId: userOneId,
          groupId: body.id,
        })
        .set("Authorization", `Bearer ${token}`);

      const message = editMessage._body.messagesGGChat[0];

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(editMessage.status).toBe(200);

      expect(editMessage.header["content-type"]).toMatch(/json/);

      expect(message.id).toBe(message.id);

      expect(message.message_text).toEqual("updated message");

      expect(message.message_imageName).toBe("");

      expect(message.message_imageURL).toBe("");

      expect(message.message_imageType).toBe("");

      expect(message.message_imageSize).toBe(0);

      expect(message.createdAt).toBe(message.createdAt);

      expect(message.updatedAt).toBe(message.updatedAt);

      expect(message.userId).toBe(message.userId);

      expect(message.groupId).toBe(message.groupId);
    });

    it("should respond with 200 when updating group name", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "auser",
          last_name: "auser",
          username: "auser",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "auser1",
          last_name: "auser1",
          username: "auser1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "auser",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const response = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "a someone group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      const groupId = response.body.id;

      const group_creatorId = response.body.group_creatorId;

      const { body, headers, status } = await request(app)
        .put(`/groups/${groupId}`)
        .send({
          group_name: "updated group",
          group_creatorId: group_creatorId,
        })
        .set("Authorization", `Bearer ${token}`);

      // console.log(body);

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      expect(body.id).toEqual(body.id);

      expect(body.group_name).toEqual("updated group");

      expect(body.group_image).toEqual(body.group_image);

      expect(body.group_creatorId).toEqual(body.group_creatorId);
    });

    it("should respond with 400 when failing to meet group name condition", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "bleh",
          last_name: "bleh",
          username: "bleh",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "bleh1",
          last_name: "bleh1",
          username: "bleh1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "auser",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const response = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "bleh group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      const groupId = response.body.id;

      const group_creatorId = response.body.group_creatorId;

      const { body, headers, status } = await request(app)
        .put(`/groups/${groupId}`)
        .send({
          group_name: "bl",
          group_creatorId: group_creatorId,
        })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(400);

      expect(headers["content-type"]).toMatch(/json/);

      expect(body[0].msg).toEqual(
        "Group name must be between 3 and 30 characters"
      );
    });

    it("should respond with 400 if group name already exists", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "what",
          last_name: "what",
          username: "what",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "what1",
          last_name: "what1",
          username: "what1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "auser",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const response = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "idunno")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      const groupId = response.body.id;

      const group_creatorId = response.body.group_creatorId;

      const { body, headers, status } = await request(app)
        .put(`/groups/${groupId}`)
        .send({
          group_name: "idunno",
          group_creatorId: group_creatorId,
        })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(400);

      expect(headers["content-type"]).toMatch(/json/);

      expect(body[0].msg).toEqual("Group name is already taken");
    });

    it("should create a group and someone should able to join", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "gibberish",
          last_name: "gibberish",
          username: "gibberish",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "gibberish1",
          last_name: "gibberish1",
          username: "gibberish1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredNewUser = await request(app).post("/users/signup").send({
        first_name: "gibberish2",
        last_name: "gibberish2",
        username: "gibberish2",
        password: "12345678Bg@",
        confirm_password: "12345678Bg@",
        bio: "",
        profile_picture: "",
        background_picture: "",
      });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "gibberish",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const response = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "idunno group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      // console.log(response);

      const groupId = response.body.id;

      const logInNewUser = await request(app).post("/users/login").send({
        username: "gibberish2",
        password: "12345678Bg@",
      });

      // console.log(logInNewUser);

      const loggedInUserToken = logInNewUser.body.token;

      const { body, headers, status } = await request(app)
        .put(`/groups/${groupId}/join`)
        .send({})
        .set("Authorization", `Bearer ${loggedInUserToken}`);

      // console.log(body);

      expect(status).toBe(200);

      expect(headers["content-type"]).toMatch(/json/);

      expect(body.users.length).toBe(3);

      expect(body.users.length).not.toBe(2);
    });
  });

  describe("[DELETE] /groups", () => {
    it("should respond with 200 when deleting a message", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "juko",
          last_name: "juko",
          username: "juko",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "juko1",
          last_name: "juko1",
          username: "juko1",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "juko",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const response = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "juko group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      // console.log(response);

      const groupId = response.body.id;

      const sendingMessage = await request(app)
        .post(`/groups/${groupId}/message/`)
        .send({
          message_text: "hello",
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          // userId: userOneId,
          groupId: groupId,
        })
        .set("Authorization", `Bearer ${token}`);

      // console.log(sendingMessage);

      const messageId = sendingMessage.body.messagesGGChat[0].id;

      // console.log(messageId);

      const { body, status, header } = await request(app)
        .delete(`/groups/${groupId}/message/${messageId}`)

        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(body.id).toEqual(body.id);

      expect(body.group_name).toEqual(body.group_name);

      expect(body.group_image).toEqual(body.group_image);

      expect(body.group_creatorId).toEqual(body.group_creatorId);

      expect(body.messagesGGChat).toEqual([]);
    });

    it("should respond with 200 when group is been deleted", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "pepe",
          last_name: "pepe",
          username: "pepe",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "pepega",
          last_name: "pepega",
          username: "pepega",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "pepe",
        password: "12345678Bg@",
      });

      const { token } = logInRegisteredUser._body;

      const response = await request(app)
        .post("/groups")

        .set("Authorization", `Bearer ${token}`)

        .field("group_name", "deleted group")

        .field("group_creatorId", registeredSenderUser._body.id)

        .field("userId", registeredReceiverUser._body.id)

        .attach("file", "public/image.png");

      const groupId = response.body.id;

      const { body, status, header } = await request(app)
        .delete(`/groups/${groupId}`)

        .send({ group_creatorId: response.body.group_creatorId })

        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(body).toEqual(null);
    });
  });
});
