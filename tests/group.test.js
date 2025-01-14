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

    // it("should respond with 400 if image is too big", async () => {
    //   const userOneId = userOne.body.signUpAndCreateUser.id;

    //   const userTwoId = userTwo.body.signUpAndCreateUser.id;

    //   const token = getToken;

    //   const response = await request(app)
    //     .post("/chats")
    //     .send({ id: userOneId, id: userTwoId })
    //     .set("Authorization", `Bearer ${token}`);

    //   const chatId = response.body.createChat.id;

    //   const createNewGroup = await request(app)
    //     .post("/groups")
    //     .send({
    //       group_name: "new group",
    //       id: userOneId,
    //       id: userTwoId,
    //       chatId: chatId,
    //     })
    //     .set("Authorization", `Bearer ${token}`);

    //   const groupId = createNewGroup.body.createGroup.id;

    //   const { body, header, status } = await request(app)
    //     .post(`/groups/${groupId}/image/${chatId}`)

    //     .attach("file", "public/Teruel.jpg")

    //     .set("Authorization", `Bearer ${token}`);

    //   expect(body[0].msg).toBe("Image size exceed 5 MB");

    //   expect(header["content-type"]).toMatch(/json/);

    //   expect(status).toBe(400);
    // }, 10000);

    it("should respond with message if you dont upload an image", async () => {
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
          group_name: "new group123",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      const groupId = createNewGroup.body.createGroup.id;

      const { body } = await request(app)
        .post(`/groups/${groupId}/image/${chatId}`)

        .attach("file", "public/Plain Text.txt")

        .set("Authorization", `Bearer ${token}`);

      expect(body).toEqual("An unknown file format not allowed");
    });
  });

  describe("[GET] /groups", () => {
    it("should respond with 200 and group information", async () => {
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
          group_name: "a group",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      const groupId = createNewGroup.body.createGroup.id;

      const { body } = await request(app)
        .get(`/groups/${groupId}`)

        .set("Authorization", `Bearer ${token}`);

      expect(body.findByGroupId.id).toEqual(body.findByGroupId.id);

      expect(body.findByGroupId.group_name).toEqual("a group");

      expect(body.findByGroupId.chats[0].id).toEqual(
        body.findByGroupId.chats[0].id
      );

      expect(body.findByGroupId.chats[0].groupId).toEqual(
        body.findByGroupId.chats[0].groupId
      );

      expect(body.findByGroupId.users[0].id).toEqual(
        body.findByGroupId.users[0].id
      );

      expect(body.findByGroupId.users[0].first_name).toEqual("user1");

      expect(body.findByGroupId.users[0].last_name).toEqual("user1");

      expect(body.findByGroupId.users[0].username).toEqual("user1");

      expect(body.findByGroupId.users[0].password).toEqual(
        body.findByGroupId.users[0].password
      );

      expect(body.findByGroupId.users[0].confirm_password).toEqual(
        body.findByGroupId.users[0].confirm_password
      );

      expect(body.findByGroupId.users[0].bio).toEqual("");

      expect(body.findByGroupId.users[0].profile_picture).toEqual("");

      expect(body.findByGroupId.users[0].background_picture).toEqual("");

      expect(body.findByGroupId.users[0].online_presence).toEqual("OFFLINE");

      expect(body.findByGroupId.users[0].role).toEqual("USER");

      expect(body.findByGroupId.users[0].groupId).toEqual(
        body.findByGroupId.users[0].groupId
      );

      expect(body.findByGroupId.users[1].id).toEqual(
        body.findByGroupId.users[1].id
      );

      expect(body.findByGroupId.users[1].first_name).toEqual("user");

      expect(body.findByGroupId.users[1].last_name).toEqual("user");

      expect(body.findByGroupId.users[1].username).toEqual("user");

      expect(body.findByGroupId.users[1].password).toEqual(
        body.findByGroupId.users[1].password
      );

      expect(body.findByGroupId.users[1].confirm_password).toEqual(
        body.findByGroupId.users[1].confirm_password
      );

      expect(body.findByGroupId.users[1].bio).toEqual("");

      expect(body.findByGroupId.users[1].profile_picture).toEqual("");

      expect(body.findByGroupId.users[1].background_picture).toEqual("");

      expect(body.findByGroupId.users[1].online_presence).toEqual("ONLINE");

      expect(body.findByGroupId.users[1].role).toEqual("USER");

      expect(body.findByGroupId.users[1].groupId).toEqual(
        body.findByGroupId.users[1].groupId
      );
    });

    it("should respond with 200 and get all groups information", async () => {
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
          group_name: "another group",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      // const groupId = createNewGroup.body.createGroup.id;

      const { body, status } = await request(app)
        .get("/groups/")

        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      body.findAllGroups.map((groups) => {
        expect(groups.id).toEqual(groups.id);

        expect(groups.name).toEqual(groups.name);
      });
    });
  });

  describe("[PUT] /groups", () => {
    it("should respond with 200 when updating group name", async () => {
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
          group_name: "another group 123",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      const groupId = createNewGroup.body.createGroup.id;

      const { body, status } = await request(app)
        .put(`/groups/${groupId}`)
        .send({
          group_name: "updated group",
        })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(200);

      expect(body.editGroupName.id).toEqual(body.editGroupName.id);

      expect(body.editGroupName.group_name).toEqual("updated group");
    });

    it("should respond with 400 when failing to meet group name condition", async () => {
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
          group_name: "random group123",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      const groupId = createNewGroup.body.createGroup.id;

      const { body, status } = await request(app)
        .put(`/groups/${groupId}`)
        .send({
          group_name: "g",
        })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(400);

      expect(body[0].msg).toEqual(
        "Group name must be between 3 and 30 characters"
      );
    });

    it("should respond with 400 if group name already exists", async () => {
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
          group_name: "random group12345",
          id: userOneId,
          id: userTwoId,
          chatId: chatId,
        })
        .set("Authorization", `Bearer ${token}`);

      const groupId = createNewGroup.body.createGroup.id;

      const { body, status } = await request(app)
        .put(`/groups/${groupId}`)
        .send({
          group_name: "updated group",
        })
        .set("Authorization", `Bearer ${token}`);

      expect(status).toBe(400);

      expect(body[0].msg).toEqual("Group name is already taken");
    });
  });
});
