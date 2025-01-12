require("dotenv").config();

const request = require("supertest");

const express = require("express");

const chatRouter = require("../routes/chatRouter");

const userRouter = require("../routes/userRouter");

const prisma = require("../db/client");

const LocalStrategy = require("passport-local").Strategy;

const { PrismaSessionStore } = require("@quixo3/prisma-session-store");

const cloudinary = require("cloudinary").v2;

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

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

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

    await prisma.chat.deleteMany();

    await prisma.message.deleteMany();

    done;
  });

  describe("[POST] /chats", () => {
    it("should respond with 200 if chat is started between 2 users", async () => {
      app.use("/users", userRouter);

      const response = await request(app).post("/users/login").send({
        username: "preslaw123",
        password: "12345678Bg@",
      });

      const token = response.body.token;

      const { body, status } = await request(app)
        .post("/chats")
        .send({ id: 863, id: 864 })
        .set("Authorization", `Bearer ${token}`);
      expect(status).toBe(200);
      expect(body.createChat.id).toBe(body.createChat.id);
      expect(body.createChat.groupId).toBe(null);
    });

    it("should respond with 200 when user sends a message", async () => {
      app.use("/users", userRouter);

      let response = await request(app).post("/users/login").send({
        username: "preslaw123",
        password: "12345678Bg@",
      });

      const token = response.body.token;

      app.use("/chats", chatRouter);

      const { body } = await request(app)
        .post("/chats")
        .send({ id: 863, id: 864 })
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
          userId: 863,
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
      expect(response.body.sendMessageInChat.userId).toBe(863);

      expect(response.body.sendMessageInChat.chatId).toBe(
        response.body.sendMessageInChat.chatId
      );
    });

    it("should response with 200 when user sends a image in chat", async () => {
      app.use("/users", userRouter);

      let response = await request(app).post("/users/login").send({
        username: "preslaw123",
        password: "12345678Bg@",
      });

      const token = response.body.token;

      app.use("/chats", chatRouter);

      response = await request(app)
        .post("/chats")
        .send({ id: 863, id: 864 })
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

    // it("should respond with 400 if the image is too big", async () => {
    //   app.use("/users", userRouter);

    //   let response = await request(app).post("/users/login").send({
    //     username: "preslaw123",
    //     password: "12345678Bg@",
    //   });

    //   const token = response.body.token;

    //   app.use("/chats", chatRouter);

    //   response = await request(app)
    //     .post("/chats")
    //     .send({ id: 863, id: 864 })
    //     .set("Authorization", `Bearer ${token}`);

    //   const { body, status } = await request(app)
    //     .post(`/chats/${response.body.createChat.id}/image`)

    //     .set("Authorization", `Bearer ${token}`)

    //     .attach("file", "public/Teruel.jpg");

    //   expect(body[0].msg).toBe("Image size exceed 5 MB");

    //   expect(status).toBe(400);
    // }, 10000);

    it("should respond with message if you dont upload an image", async () => {
      app.use("/users", userRouter);

      let response = await request(app).post("/users/login").send({
        username: "preslaw123",
        password: "12345678Bg@",
      });

      const token = response.body.token;

      app.use("/chats", chatRouter);

      response = await request(app)
        .post("/chats")
        .send({ id: 863, id: 864 })
        .set("Authorization", `Bearer ${token}`);

      const { body } = await request(app)
        .post(`/chats/${response.body.createChat.id}/image`)

        .set("Authorization", `Bearer ${token}`)

        .attach("file", "public/Plain Text.txt");

      expect(body).toEqual("An unknown file format not allowed");
    });

    describe("[GET] /chats", () => {
      it("should respond with 200 and chat information", async () => {
        app.use("/users", userRouter);

        let response = await request(app).post("/users/login").send({
          username: "preslaw123",
          password: "12345678Bg@",
        });

        const token = response.body.token;

        app.use("/chats", chatRouter);

        response = await request(app)
          .post("/chats")
          .send({ id: 863, id: 864 })
          .set("Authorization", `Bearer ${token}`);

        const { body, status } = await request(app)
          .get(`/chats/${response.body.createChat.id}`)
          .set("Authorization", `Bearer ${token}`);

        expect(status).toBe(200);

        expect(body.findChatById.users[0].first_name).toEqual("preslaw123");

        expect(body.findChatById.users[0].last_name).toEqual("cvetanow123");

        expect(body.findChatById.users[0].username).toEqual("preslaw123");

        expect(body.findChatById.users[0].password).toEqual(
          body.findChatById.users[0].password
        );

        expect(body.findChatById.users[0].confirm_password).toEqual(
          body.findChatById.users[0].confirm_password
        );

        expect(body.findChatById.users[0].bio).toBe("");

        expect(body.findChatById.users[0].profile_picture).toBe("");

        expect(body.findChatById.users[0].online_presence).toBe("ONLINE");

        expect(body.findChatById.users[0].role).toBe("USER");

        expect(body.findChatById.users[0].groupId).toBe(null);

        expect(body.findChatById.users[1].first_name).toEqual("preslaw1234");

        expect(body.findChatById.users[1].last_name).toEqual("cvetanow1234");

        expect(body.findChatById.users[1].username).toEqual("preslaw1234");

        expect(body.findChatById.users[1].password).toEqual(
          body.findChatById.users[1].password
        );

        expect(body.findChatById.users[1].confirm_password).toEqual(
          body.findChatById.users[1].confirm_password
        );

        expect(body.findChatById.users[1].bio).toBe("");

        expect(body.findChatById.users[1].profile_picture).toBe("");

        expect(body.findChatById.users[1].online_presence).toBe("OFFLINE");

        expect(body.findChatById.users[1].role).toBe("USER");

        expect(body.findChatById.users[1].groupId).toBe(null);

        expect(body.findChatById.messages).toEqual([]);
      });

      it("should respond with 200 when getting all chats information", async () => {
        app.use("/users", userRouter);

        let response = await request(app).post("/users/login").send({
          username: "preslaw123",
          password: "12345678Bg@",
        });

        const token = response.body.token;

        app.use("/chats", chatRouter);

        response = await request(app)
          .post("/chats")
          .send({ id: 863, id: 864 })
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
        app.use("/users", userRouter);

        let response = await request(app).post("/users/login").send({
          username: "preslaw123",
          password: "12345678Bg@",
        });

        const token = response.body.token;

        app.use("/chats", chatRouter);

        let startConversation = await request(app)
          .post("/chats")
          .send({ id: 863, id: 864 })
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
            userId: 863,
            chatId: `${startConversation.body.createChat.id}`,
          })
          .set("Authorization", `Bearer ${token}`);

        const conversationId = startConversation.body.createChat.id;

        const messageId = response.body.sendMessageInChat.id;

        const { body } = await request(app)
          .put(`/chats/${conversationId}/message/${messageId}`)
          .send({
            message_text: "bye, people",
            updateAt: new Date(),
          })
          .set("Authorization", `Bearer ${token}`);

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
  });
});
