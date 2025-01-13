const request = require("supertest");

const groupRouter = require("../routes/groupRouter");

const chatRouter = require("../routes/chatRouter");

const prisma = require("../db/client");

const app = require("../app");

app.use("/", groupRouter);

describe("testing groups controllers and routes", (done) => {
  let userOne;

  let userTwo;

  let getToken;

  beforeAll(async () => {
    await prisma.$connect();

    userOne = await request(app).post("/users/signup").send({
      first_name: "user",
      last_name: "user",
      username: "user",
      password: "12345678Bg@",
      confirm_password: "12345678Bg@",
      bio: "",
      profile_picture: "",
      background_picture: "",
    });

    userTwo = await request(app).post("/users/signup").send({
      first_name: "user1",
      last_name: "user1",
      username: "user1",
      password: "12345678Bg@",
      confirm_password: "12345678Bg@",
      bio: "",
      profile_picture: "",
      background_picture: "",
    });

    const logInGetToken = await request(app).post("/users/login").send({
      username: "user",
      password: "12345678Bg@",
    });

    getToken = logInGetToken.body.token;
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
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      const response = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      const chatId = response.body.createChat.id;

      const { body, status } = await request(app)
        .post("/groups")
        .send({
          group_name: "group",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(body.createGroup.id).toEqual(body.createGroup.id);

      expect(body.createGroup.group_name).toEqual("group");

      expect(body.createGroupChat.id).toEqual(body.createGroupChat.id);

      expect(body.createGroupChat.groupId).toBe(null);
    });

    it("should respond with 400 when group already exists", async () => {
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      const response = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      const chatId = response.body.createChat.id;

      const { body, header, status } = await request(app)
        .post("/groups")
        .send({
          group_name: "group",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      const findGroup = await prisma.group.findUnique({
        where: {
          group_name: "group",
        },
      });

      expect(status).toBe(400);

      expect(header["content-type"]).toMatch(/json/);

      expect(findGroup).not.toBeNull();

      expect(body[0].msg).toEqual("Group name is already taken");
    });

    it("should respond with 400 when group name condition is not met", async () => {
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      const response = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      const chatId = response.body.createChat.id;

      const { body, header, status } = await request(app)
        .post("/groups")
        .send({
          group_name: "gr",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(400);

      expect(body[0].msg).toBe(
        "Group name must be between 3 and 30 characters"
      );
    });

    it("should respond with 200 when sending a message in group", async () => {
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      const response = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      const chatId = response.body.createChat.id;

      const createNewGroup = await request(app)
        .post("/groups")
        .send({
          group_name: "group123",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      const groupId = createNewGroup.body.createGroup.id;

      const { body, header, status } = await request(app)
        .post(`/groups/${groupId}/message/${chatId}`)
        .send({
          message_text: "hello",
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          userId: userOneId,
          chatId: chatId,
          groupId: groupId,
        })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(body.sendMessageInGroup.id).toBe(body.sendMessageInGroup.id);

      expect(body.sendMessageInGroup.message_text).toEqual("hello");

      expect(body.sendMessageInGroup.message_imageName).toBe("");

      expect(body.sendMessageInGroup.message_imageURL).toBe("");

      expect(body.sendMessageInGroup.message_imageType).toBe("");

      expect(body.sendMessageInGroup.message_imageSize).toBe(0);

      expect(body.sendMessageInGroup.createdAt).toBe(
        body.sendMessageInGroup.createdAt
      );

      expect(body.sendMessageInGroup.updatedAt).toBe(
        body.sendMessageInGroup.updatedAt
      );

      expect(body.sendMessageInGroup.userId).toBe(
        body.sendMessageInGroup.userId
      );

      expect(body.sendMessageInGroup.chatId).toBe(
        body.sendMessageInGroup.chatId
      );

      expect(body.sendMessageInGroup.groupId).toBe(
        body.sendMessageInGroup.groupId
      );
    });

    it("should respond with 200 when sending an image in group", async () => {
      const userOneId = userOne.body.signUpAndCreateUser.id;

      const userTwoId = userTwo.body.signUpAndCreateUser.id;

      const token = getToken;

      const response = await request(app)
        .post("/chats")
        .send({ id: userOneId, id: userTwoId })
        .set("Authorization", `Bearer ${token}`);

      const chatId = response.body.createChat.id;

      const createNewGroup = await request(app)
        .post("/groups")
        .send({
          group_name: "group1234",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      const groupId = createNewGroup.body.createGroup.id;

      const { body, header, status } = await request(app)
        .post(`/groups/${groupId}/image/${chatId}`)

        .attach("file", "public/Screenshot_2025-01-09_12-31-20.png")

        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(body.sendImageInGroup.id).toEqual(body.sendImageInGroup.id);

      expect(body.sendImageInGroup.message_text).toBe("");

      expect(body.sendImageInGroup.message_imageName).toEqual(
        "Screenshot_2025-01-09_12-31-20.png"
      );

      expect(body.sendImageInGroup.message_imageURL).toBe(
        "https://res.cloudinary.com/dsofl9wku/image/upload/v1736579322/wemessage_images/Screenshot_2025-01-09_12-31-20.png.png"
      );

      expect(body.sendImageInGroup.message_imageType).toEqual("image/png");

      expect(body.sendImageInGroup.message_imageSize).toBe(116383);

      expect(body.sendImageInGroup.createdAt).toBe(
        body.sendImageInGroup.createdAt
      );

      expect(body.sendImageInGroup.updatedAt).toBe(
        body.sendImageInGroup.updatedAt
      );

      expect(body.sendImageInGroup.chatId).toBe(body.sendImageInGroup.chatId);

      expect(body.sendImageInGroup.groupId).toBe(body.sendImageInGroup.groupId);
    });
  });
});
