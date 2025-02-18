const request = require("supertest");

const chatRouter = require("../routes/chatRouter");

const prisma = require("../db/client");

const app = require("../app");

app.use("/", chatRouter);

describe("testing chats controllers and routes", (done) => {
  let userOne;

  let userTwo;

  let getToken;

  beforeAll(async () => {
    await prisma.$connect();

    userOne = await request(app).post("/users/signup").send({
      first_name: "newuser",
      last_name: "newuser",
      username: "newuser",
      password: "12345678Bg@",
      confirm_password: "12345678Bg@",
      bio: "",
      profile_picture: "",
      background_picture: "",
    });

    userTwo = await request(app).post("/users/signup").send({
      first_name: "newuser1",
      last_name: "newuser1",
      username: "newuser1",
      password: "12345678Bg@",
      confirm_password: "12345678Bg@",
      bio: "",
      profile_picture: "",
      background_picture: "",
    });

    const logInGetToken = await request(app).post("/users/login").send({
      username: "newuser",
      password: "12345678Bg@",
    });

    getToken = logInGetToken.body.token;
  });

  afterAll(async () => {
    await prisma.$disconnect();

    await prisma.chat.deleteMany();

    await prisma.message.deleteMany();

    await prisma.user.deleteMany();

    done;
  });

  describe("[POST] /chats", () => {
    it("should respond with 200 if chat is started between 2 users", async () => {
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      const { body, status } = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(body.createChat.id).toBe(body.createChat.id);

      expect(body.createChat.groupId).toBe(null);
    });

    it("should respond with 200 when user sends a message", async () => {
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      const { body } = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      response = await request(app)
        .post(`/chats/${body.createChat.id}/message`)
        .send({
          message_text: "hello",
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          userId: userOneId,
          chatId: `${body.createChat.id}`,
        })
        .set("Authorization", `Bearer ${token}`);

      expect(response.body.sendMessageInChat.message_text).toBe("hello");

      expect(response.body.sendMessageInChat.message_imageName).toBe("");

      expect(response.body.sendMessageInChat.message_imageURL).toBe("");

      expect(response.body.sendMessageInChat.message_imageType).toBe("");

      expect(response.body.sendMessageInChat.message_imageSize).toBe(0);

      expect(response.body.sendMessageInChat.createdAt).toBe(
        response.body.sendMessageInChat.createdAt
      );
      expect(response.body.sendMessageInChat.userId).toBe(
        response.body.sendMessageInChat.userId
      );

      expect(response.body.sendMessageInChat.chatId).toBe(
        response.body.sendMessageInChat.chatId
      );
    });

    it("should response with 200 when user sends a image in chat", async () => {
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      app.use("/chats", chatRouter);

      response = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      const { body, status } = await request(app)
        .post(`/chats/${response.body.createChat.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .attach("file", "public/Screenshot_2025-01-09_12-31-20.png");

      expect(status).toBe(200);

      expect(body.sendImageInChat.message_text).toBe("");

      expect(body.sendImageInChat.message_imageName).toBe(
        "Screenshot_2025-01-09_12-31-20.png"
      );

      expect(body.sendImageInChat.message_imageURL).toEqual(
        "https://res.cloudinary.com/dsofl9wku/image/upload/v1736579322/wemessage_images/Screenshot_2025-01-09_12-31-20.png.png"
      );

      expect(body.sendImageInChat.message_imageSize).toBe(116383);

      expect(body.sendImageInChat.createdAt).toBe(
        body.sendImageInChat.createdAt
      );

      expect(body.sendImageInChat.updateAt).toBe(body.sendImageInChat.updateAt);

      expect(body.sendImageInChat.userId).toBe(body.sendImageInChat.userId);

      expect(body.sendImageInChat.chatId).toBe(body.sendImageInChat.chatId);

      expect(body.sendImageInChat.groupId).toBe(null);
    });

    it("should respond with 400 if the image is too big", async () => {
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      response = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      const { body, status } = await request(app)
        .post(`/chats/${response.body.createChat.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .attach("file", "public/Teruel.jpg");

      expect(body[0].msg).toBe("Image size exceed 5 MB");

      expect(status).toBe(400);
    }, 10000);

    it("should respond with message if you dont upload an image", async () => {
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      response = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      const { body } = await request(app)
        .post(`/chats/${response.body.createChat.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .attach("file", "public/Plain Text.txt");

      expect(body).toEqual("An unknown file format not allowed");
    });

    describe("[GET] /chats", () => {
      it("should respond with 200 and chat information", async () => {
        const userOneId = userOne.body.signUpAndCreateUser.id;

        const userTwoId = userTwo.body.signUpAndCreateUser.id;

        const token = getToken;

        app.use("/chats", chatRouter);

        response = await request(app)
          .post("/chats")
          .send({ id: userOneId, id: userTwoId })
          .set("Authorization", `Bearer ${token}`);

        const { body, status } = await request(app)
          .get(`/chats/${response.body.createChat.id}`)
          .set("Authorization", `Bearer ${token}`);

        expect(status).toBe(200);

        expect(body.findChatById.users[0].first_name).toEqual("newuser1");

        expect(body.findChatById.users[0].last_name).toEqual("newuser1");

        expect(body.findChatById.users[0].username).toEqual("newuser1");

        expect(body.findChatById.users[0].password).toEqual(
          body.findChatById.users[0].password
        );

        expect(body.findChatById.users[0].confirm_password).toEqual(
          body.findChatById.users[0].confirm_password
        );

        expect(body.findChatById.users[0].bio).toBe("");

        expect(body.findChatById.users[0].profile_picture).toBe("");

        expect(body.findChatById.users[0].online_presence).toBe("OFFLINE");

        expect(body.findChatById.users[0].role).toBe("USER");

        expect(body.findChatById.users[0].groupId).toBe(null);

        expect(body.findChatById.users[1].first_name).toEqual("newuser");

        expect(body.findChatById.users[1].last_name).toEqual("newuser");

        expect(body.findChatById.users[1].username).toEqual("newuser");

        expect(body.findChatById.users[1].password).toEqual(
          body.findChatById.users[1].password
        );

        expect(body.findChatById.users[1].confirm_password).toEqual(
          body.findChatById.users[1].confirm_password
        );

        expect(body.findChatById.users[1].bio).toBe("");

        expect(body.findChatById.users[1].profile_picture).toBe("");

        expect(body.findChatById.users[1].online_presence).toBe("ONLINE");

        expect(body.findChatById.users[1].role).toBe("USER");

        expect(body.findChatById.users[1].groupId).toBe(null);

        expect(body.findChatById.messages).toEqual([]);
      });

      it("should respond with 200 when getting all chats information", async () => {
        const userOneId = userOne.body.signUpAndCreateUser.id;

        const userTwoId = userTwo.body.signUpAndCreateUser.id;

        const token = getToken;

        app.use("/chats", chatRouter);

        response = await request(app)
          .post("/chats")
          .send({ id: userOneId, id: userTwoId })
          .set("Authorization", `Bearer ${token}`);

        const { body, status } = await request(app)
          .get(`/chats/`)
          .set("Authorization", `Bearer ${token}`);

        body.getChats.map((chats) => {
          expect(chats.id).toEqual(chats.id);

          expect(chats.groupId).toEqual(null);

          expect(chats.users[0].first_name).toEqual(chats.users[0].first_name);

          expect(chats.users[0].last_name).toEqual(chats.users[0].last_name);

          expect(chats.users[0].username).toEqual(chats.users[0].username);

          expect(chats.users[0].password).toEqual(chats.users[0].password);

          expect(chats.users[0].confirm_password).toEqual(
            chats.users[0].confirm_password
          );

          expect(chats.users[0].bio).toEqual(chats.users[0].bio);

          expect(chats.users[0].profile_picture).toEqual(
            chats.users[0].profile_picture
          );

          expect(chats.users[0].background_picture).toEqual(
            chats.users[0].background_picture
          );

          expect(chats.users[0].online_presence).toEqual(
            chats.users[0].online_presence
          );

          expect(chats.users[0].role).toEqual(chats.users[0].role);

          expect(chats.users[0].groupId).toEqual(chats.users[0].groupId);
        });
      });
    });
    describe("[PUT] /chats", () => {
      it("should respond with 200 when the image is being edited", async () => {
        const userOneId = userOne.body.signUpAndCreateUser.id;

        const userTwoId = userTwo.body.signUpAndCreateUser.id;

        const token = getToken;
        app.use("/chats", chatRouter);

        let startConversation = await request(app)
          .post("/chats")
          .send({ id: userOneId, id: userTwoId })
          .set("Authorization", `Bearer ${token}`);

        response = await request(app)
          .post(`/chats/${startConversation.body.createChat.id}/message`)
          .send({
            message_text: "hello, people",
            message_imageName: "",
            message_imageURL: "",
            message_imageType: "",
            message_imageSize: 0,
            createdAt: new Date(),
            userId: userOneId,
            chatId: `${startConversation.body.createChat.id}`,
          })
          .set("Authorization", `Bearer ${token}`);

        const conversationId = startConversation.body.createChat.id;

        const messageId = response.body.sendMessageInChat.id;

        const { body, status } = await request(app)
          .put(`/chats/${conversationId}/message/${messageId}`)
          .send({
            message_text: "bye, people",
            updateAt: new Date(),
          })
          .set("Authorization", `Bearer ${token}`);

        expect(status).toBe(200);

        expect(body.editMessageInChat.message_text).toEqual("bye, people");

        expect(body.editMessageInChat.message_imageName).toEqual("");

        expect(body.editMessageInChat.message_imageURL).toEqual("");

        expect(body.editMessageInChat.message_imageType).toEqual("");

        expect(body.editMessageInChat.message_imageSize).toBe(0);

        expect(body.editMessageInChat.createdAt).toEqual(
          body.editMessageInChat.createdAt
        );

        expect(body.editMessageInChat.updatedAt).toEqual(
          body.editMessageInChat.updatedAt
        );

        expect(body.editMessageInChat.userId).toEqual(
          body.editMessageInChat.userId
        );

        expect(body.editMessageInChat.chatId).toEqual(
          body.editMessageInChat.chatId
        );

        expect(body.editMessageInChat.groupId).toBe(null);
      });
    });
    describe("[DELETE] /chats", () => {
      it("should respond with message if message is being deleted", async () => {
        const userOneId = userOne.body.signUpAndCreateUser.id;

        const userTwoId = userTwo.body.signUpAndCreateUser.id;

        const token = getToken;

        app.use("/chats", chatRouter);

        const startConversation = await request(app)
          .post("/chats")
          .send({ id: userOneId, id: userTwoId })
          .set("Authorization", `Bearer ${token}`);

        const sendMessage = await request(app)
          .post(`/chats/${startConversation.body.createChat.id}/message`)
          .send({
            message_text: "helloooo",
            message_imageName: "",
            message_imageURL: "",
            message_imageType: "",
            message_imageSize: 0,
            createdAt: new Date(),
            userId: userOneId,
            chatId: `${startConversation.body.createChat.id}`,
          })
          .set("Authorization", `Bearer ${token}`);

        const conversationId = startConversation.body.createChat.id;

        const messageId = sendMessage.body.sendMessageInChat.id;

        const { body, status } = await request(app)
          .delete(`/chats/${conversationId}/message/${messageId}`)
          .set("Authorization", `Bearer ${token}`);

        expect(body.message).toEqual("Message has been deleted.");

        expect(status).toBe(200);
      });
    });
  });
});
