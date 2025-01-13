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

    await prisma.group.deleteMany();

    await prisma.user.deleteMany();

    await prisma.chat.deleteMany();

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
  });
});
