const { Router } = require("express");

const conversationRouter = Router();

const conversationController = require("../controllers/conversationController");

conversationRouter.post("/", conversationController.conversation_create);

module.exports = conversationRouter;
