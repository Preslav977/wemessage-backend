const request = require("supertest");

const chatRouter = require("../routes/chatRouter");

const prisma = require("../db/client");

const app = require("../app");

app.use("/", chatRouter);

describe("testing chats controllers and routes", (done) => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();

    await prisma.user.deleteMany();

    await prisma.chat.deleteMany();

    await prisma.message.deleteMany();

    done;
  });

  describe("[POST] /chats", () => {
    it("should respond with 200 if chat is started between 2 users", async () => {
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

      const senderId = registeredSenderUser._body.id;

      const receiverId = registeredReceiverUser._body.id;

      const { token } = logInRegisteredUser._body;

      const { body, status } = await request(app)
        .post("/chats")
        .send({ senderId, receiverId })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(body.id).toBe(body.id);

      expect(body.senderChat).not.toBe(null);

      expect(body.receiverChat).not.toBe(null);
    });

    it("should respond with 200 when user sends a message", async () => {
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

      const senderId = registeredSenderUser._body.id;

      const receiverId = registeredReceiverUser._body.id;

      const { token } = logInRegisteredUser._body;

      const { body, status } = await request(app)
        .post("/chats")
        .send({ senderId, receiverId })
        .set("Authorization", `Bearer ${token}`);

      const response = await request(app)
        .post(`/chats/${body.id}/message`)
        .send({
          message_text: "hello",
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          receiverId: receiverId,
          chatId: `${body.id}`,
        })

        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(response.body.messages[0].message_text).toBe("hello");

      expect(response.body.messages[0].message_imageName).toBe("");

      expect(response.body.messages[0].message_imageURL).toBe("");

      expect(response.body.messages[0].message_imageType).toBe("");

      expect(response.body.messages[0].message_imageSize).toBe(0);

      expect(response.body.messages[0].createdAt).toBe(
        response.body.messages[0].createdAt
      );

      expect(response.body.receiverMessageId).toBe(
        response.body.receiverMessageId
      );

      expect(response.body.senderMessageId).toBe(response.body.senderMessageId);

      expect(response.body.chatId).toBe(response.body.chatId);
    });

    it("should response with 200 when user sends a image in chat", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "user12",
          last_name: "user12",
          username: "user12",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "user23",
          last_name: "user23",
          username: "user23",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "user12",
        password: "12345678Bg@",
      });

      const senderId = registeredSenderUser._body.id;

      const receiverId = registeredReceiverUser._body.id;

      const { token } = logInRegisteredUser._body;

      const { body } = await request(app)
        .post("/chats")
        .send({ senderId, receiverId })
        .set("Authorization", `Bearer ${token}`);

      const response = await request(app)
        .post(`/chats/${body.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .field("receiverId", receiverId)

        .attach("file", "public/image.png");

      const message = response.body.messages[0];

      expect(response.status).toBe(200);

      expect(message.message_text).toBe("");

      expect(message.message_imageName).toBe(message.message_imageName);

      expect(message.message_imageURL).toEqual(message.message_imageURL);

      expect(message.message_imageSize).toBe(message.message_imageSize);

      expect(message.createdAt).toBe(message.createdAt);

      expect(message.updateAt).toBe(message.updateAt);

      expect(message.senderMessageId).toBe(message.senderMessageId);

      expect(message.receiverMessageId).toBe(message.receiverMessageId);

      expect(message.groupId).toBe(message.groupId);
    });

    it("should respond with message if you don't upload an image", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "user123",
          last_name: "user123",
          username: "user123",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "user234",
          last_name: "user234",
          username: "user234",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "user123",
        password: "12345678Bg@",
      });

      const senderId = registeredSenderUser._body.id;

      const receiverId = registeredReceiverUser._body.id;

      const { token } = logInRegisteredUser._body;

      const { body } = await request(app)
        .post("/chats")
        .send({ senderId, receiverId })
        .set("Authorization", `Bearer ${token}`);

      const response = await request(app)
        .post(`/chats/${body.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .field("receiverId", receiverId)

        .attach("file", "public/document.txt");

      expect(response._body).toEqual("An unknown file format not allowed");
    });

    it("should respond with 400 if the image is too big", async () => {
      const registeredSenderUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "user1234",
          last_name: "user1234",
          username: "user1234",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const registeredReceiverUser = await request(app)
        .post("/users/signup")
        .send({
          first_name: "user2345",
          last_name: "user2345",
          username: "user2345",
          password: "12345678Bg@",
          confirm_password: "12345678Bg@",
          bio: "",
          profile_picture: "",
          background_picture: "",
        });

      const logInRegisteredUser = await request(app).post("/users/login").send({
        username: "user1234",
        password: "12345678Bg@",
      });

      const senderId = registeredSenderUser._body.id;

      const receiverId = registeredReceiverUser._body.id;

      const { token } = logInRegisteredUser._body;

      const { body } = await request(app)
        .post("/chats")
        .send({ senderId, receiverId })
        .set("Authorization", `Bearer ${token}`);

      const response = await request(app)
        .post(`/chats/${body.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .field("receiverId", receiverId)

        .attach("file", "public/Teruel.jpg");

      expect(response.status).toBe(400);

      expect(response._body[0].msg).toBe("Image size exceed 5 MB");
    }, 10000);

    describe("[GET] /chats", () => {
      it("should respond with 200 and chat information", async () => {
        const registeredSenderUser = await request(app)
          .post("/users/signup")
          .send({
            first_name: "testuser",
            last_name: "testuser",
            username: "testuser",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "",
            profile_picture: "",
            background_picture: "",
          });

        const registeredReceiverUser = await request(app)
          .post("/users/signup")
          .send({
            first_name: "testuser1",
            last_name: "testuser1",
            username: "testuser1",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "",
            profile_picture: "",
            background_picture: "",
          });

        const logInRegisteredUser = await request(app)
          .post("/users/login")
          .send({
            username: "testuser",
            password: "12345678Bg@",
          });

        const senderId = registeredSenderUser._body.id;

        const receiverId = registeredReceiverUser._body.id;

        const { token } = logInRegisteredUser._body;

        const { body } = await request(app)
          .post("/chats")
          .send({ senderId, receiverId })
          .set("Authorization", `Bearer ${token}`);

        const response = await request(app)
          .get(`/chats/${body.id}`)
          .set("Authorization", `Bearer ${token}`);

        // console.log(response);

        const { senderChat } = response._body;

        const { receiverChat } = response._body;

        // console.log(senderChat, receiverChat);

        expect(response.status).toBe(200);

        expect(senderChat.id).toBe(senderChat.id);

        expect(senderChat.first_name).toBe("testuser");

        expect(senderChat.last_name).toBe("testuser");

        expect(senderChat.username).toBe("testuser");

        expect(senderChat.password).toBe(senderChat.password);

        expect(senderChat.confirm_password).toBe(senderChat.confirm_password);

        expect(senderChat.bio).toBe("");

        expect(senderChat.profile_picture).toBe("");

        expect(senderChat.background_picture).toBe("");

        expect(senderChat.online_presence).toBe("ONLINE");

        expect(senderChat.role).toBe("USER");

        expect(senderChat.groupId).toBe(null);

        expect(senderChat.globalChatId).toBe(null);

        expect(receiverChat.id).toBe(receiverChat.id);

        expect(receiverChat.first_name).toBe("testuser1");

        expect(receiverChat.last_name).toBe("testuser1");

        expect(receiverChat.username).toBe("testuser1");

        expect(receiverChat.password).toBe(receiverChat.password);

        expect(receiverChat.confirm_password).toBe(
          receiverChat.confirm_password
        );

        expect(receiverChat.bio).toBe("");

        expect(receiverChat.profile_picture).toBe("");

        expect(receiverChat.background_picture).toBe("");

        expect(receiverChat.online_presence).toBe("OFFLINE");

        expect(receiverChat.role).toBe("USER");

        expect(receiverChat.groupId).toBe(null);

        expect(receiverChat.globalChatId).toBe(null);
      });

      it("should respond with 200 when getting all chats information", async () => {
        const registeredSenderUser = await request(app)
          .post("/users/signup")
          .send({
            first_name: "testuser2",
            last_name: "testuser2",
            username: "testuser2",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "",
            profile_picture: "",
            background_picture: "",
          });

        const registeredReceiverUser = await request(app)
          .post("/users/signup")
          .send({
            first_name: "testuser3",
            last_name: "testuser3",
            username: "testuser3",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "",
            profile_picture: "",
            background_picture: "",
          });

        const logInRegisteredUser = await request(app)
          .post("/users/login")
          .send({
            username: "testuser3",
            password: "12345678Bg@",
          });

        const senderId = registeredSenderUser._body.id;

        const receiverId = registeredReceiverUser._body.id;

        const { token } = logInRegisteredUser._body;

        await request(app)
          .post("/chats")
          .send({ senderId, receiverId })
          .set("Authorization", `Bearer ${token}`);

        const response = await request(app)
          .get("/chats")
          .set("Authorization", `Bearer ${token}`);

        // console.log(response);

        response.body.map((chats) => {
          expect(chats.id).toEqual(chats.id);

          expect(chats.senderChat.id).toBe(chats.senderChat.id);

          expect(chats.senderChat.first_name).toBe(chats.senderChat.first_name);

          expect(chats.senderChat.last_name).toBe(chats.senderChat.last_name);

          expect(chats.senderChat.username).toBe(chats.senderChat.username);

          expect(chats.senderChat.password).toBe(chats.senderChat.password);

          expect(chats.senderChat.confirm_password).toBe(
            chats.senderChat.confirm_password
          );

          expect(chats.senderChat.bio).toBe(chats.senderChat.bio);

          expect(chats.senderChat.profile_picture).toBe(
            chats.senderChat.profile_picture
          );

          expect(chats.senderChat.background_picture).toBe(
            chats.senderChat.background_picture
          );

          expect(chats.senderChat.online_presence).toBe(
            chats.senderChat.online_presence
          );

          expect(chats.senderChat.role).toBe(chats.senderChat.role);

          expect(chats.senderChat.groupId).toBe(chats.senderChat.groupId);

          expect(chats.senderChat.globalChatId).toBe(
            chats.senderChat.globalChatId
          );

          expect(chats.receiverChat.id).toBe(chats.receiverChat.id);

          expect(chats.receiverChat.first_name).toBe(
            chats.receiverChat.first_name
          );

          expect(chats.receiverChat.last_name).toBe(
            chats.receiverChat.last_name
          );

          expect(chats.receiverChat.username).toBe(chats.receiverChat.username);

          expect(chats.receiverChat.password).toBe(chats.receiverChat.password);

          expect(chats.receiverChat.confirm_password).toBe(
            chats.receiverChat.confirm_password
          );

          expect(chats.receiverChat.bio).toBe(chats.receiverChat.bio);

          expect(chats.receiverChat.profile_picture).toBe(
            chats.receiverChat.profile_picture
          );

          expect(chats.receiverChat.background_picture).toBe(
            chats.receiverChat.background_picture
          );

          expect(chats.receiverChat.online_presence).toBe(
            chats.receiverChat.online_presence
          );

          expect(chats.receiverChat.role).toBe(chats.receiverChat.role);

          expect(chats.receiverChat.groupId).toBe(chats.receiverChat.groupId);

          expect(chats.receiverChat.globalChatId).toBe(
            chats.receiverChat.globalChatId
          );
        });
      });
    });

    describe("[PUT] /chats", () => {
      it("should respond with 200 when the image is being edited", async () => {
        const registeredSenderUser = await request(app)
          .post("/users/signup")
          .send({
            first_name: "randomuser",
            last_name: "urandomuserser",
            username: "randomuser",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "",
            profile_picture: "",
            background_picture: "",
          });

        const registeredReceiverUser = await request(app)
          .post("/users/signup")
          .send({
            first_name: "randomuser1",
            last_name: "randomuser1",
            username: "randomuser1",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "",
            profile_picture: "",
            background_picture: "",
          });

        const logInRegisteredUser = await request(app)
          .post("/users/login")
          .send({
            username: "randomuser",
            password: "12345678Bg@",
          });

        const senderId = registeredSenderUser._body.id;

        const receiverId = registeredReceiverUser._body.id;

        const { token } = logInRegisteredUser._body;

        const { body } = await request(app)
          .post("/chats")
          .send({ senderId, receiverId })
          .set("Authorization", `Bearer ${token}`);

        const response = await request(app)
          .post(`/chats/${body.id}/message`)
          .send({
            message_text: "hello",
            message_imageName: "",
            message_imageURL: "",
            message_imageType: "",
            message_imageSize: 0,
            createdAt: new Date(),
            receiverId: receiverId,
            chatId: `${body.id}`,
          })

          .set("Authorization", `Bearer ${token}`);

        const conversationId = body.id;

        // console.log(response);

        const messageId = response.body.messages[0].id;

        // console.log(conversationId, messageId);

        const editedMessageResponse = await request(app)
          .put(`/chats/${conversationId}/message/${messageId}`)
          .send({
            message_text: "bye, people",
            updateAt: new Date(),
          })
          .set("Authorization", `Bearer ${token}`);

        const message = editedMessageResponse.body.messages[0];

        expect(editedMessageResponse.status).toBe(200);

        expect(message.message_text).toEqual("bye, people");

        expect(message.message_imageName).toEqual("");

        expect(message.message_imageURL).toEqual("");

        expect(message.message_imageType).toEqual("");

        expect(message.message_imageSize).toBe(0);

        expect(message.createdAt).toEqual(message.createdAt);

        expect(message.updatedAt).toEqual(message.updatedAt);

        expect(message.userId).toEqual(message.userId);

        expect(message.receiverId).toEqual(message.receiverId);

        expect(message.senderId).toEqual(message.senderId);

        expect(message.chatId).toEqual(message.chatId);
      });
    });

    describe("[DELETE] /chats", () => {
      it("should respond with message if message is being deleted", async () => {
        const registeredSenderUser = await request(app)
          .post("/users/signup")
          .send({
            first_name: "randomuser123",
            last_name: "urandomuserser123",
            username: "randomuser123",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "",
            profile_picture: "",
            background_picture: "",
          });

        const registeredReceiverUser = await request(app)
          .post("/users/signup")
          .send({
            first_name: "randomuser456",
            last_name: "randomuser456",
            username: "randomuser456",
            password: "12345678Bg@",
            confirm_password: "12345678Bg@",
            bio: "",
            profile_picture: "",
            background_picture: "",
          });

        const logInRegisteredUser = await request(app)
          .post("/users/login")
          .send({
            username: "randomuser123",
            password: "12345678Bg@",
          });

        const senderId = registeredSenderUser._body.id;

        const receiverId = registeredReceiverUser._body.id;

        const { token } = logInRegisteredUser._body;

        const { body } = await request(app)
          .post("/chats")
          .send({ senderId, receiverId })
          .set("Authorization", `Bearer ${token}`);

        const response = await request(app)
          .post(`/chats/${body.id}/message`)
          .send({
            message_text: "hello",
            message_imageName: "",
            message_imageURL: "",
            message_imageType: "",
            message_imageSize: 0,
            createdAt: new Date(),
            receiverId: receiverId,
            chatId: `${body.id}`,
          })

          .set("Authorization", `Bearer ${token}`);

        const conversationId = body.id;

        // console.log(response);

        const messageId = response.body.messages[0].id;

        // console.log(conversationId, messageId);

        const deletedMessageResponse = await request(app)
          .delete(`/chats/${conversationId}/message/${messageId}`)

          .set("Authorization", `Bearer ${token}`);

        expect(deletedMessageResponse.status).toBe(200);

        expect(deletedMessageResponse.body.messages).toEqual([]);
      });
    });
  });
});
