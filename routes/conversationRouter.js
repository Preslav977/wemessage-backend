const { Router } = require("express");

const conversationRouter = Router();

const conversationController = require("../controllers/conversationController");

conversationRouter.post("/", conversationController.conversation_create);

conversationRouter.post(
  "/:id/message",
  conversationController.conversation_send_message
);

conversationRouter.get("/:id", conversationController.conversation_details);

conversationRouter.put(
  "/:id/message/:messageId",
  conversationController.conversation_edit_message
);

module.exports = conversationRouter;
