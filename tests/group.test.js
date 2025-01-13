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
  });
});
