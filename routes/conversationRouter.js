const { Router } = require("express");

const conversationRouter = Router();

const conversationController = require("../controllers/conversationController");

conversationRouter.post("/", conversationController.conversation_create);

conversationRouter.post(
  "/:id/message",
  conversationController.conversation_send_message
);

conversationRouter.post(
  "/:id/messageImage",
  conversationController.conversation_send_message_image
);

conversationRouter.get("/:id", conversationController.conversation_details);

conversationRouter.put(
  "/:id/message/:messageId",
  conversationController.conversation_edit_message
);

conversationRouter.delete(
  "/:id/message/:messageId",
  conversationController.conversation_delete_message
);

conversationRouter.get("/", conversationController.conversations_get);

module.exports = conversationRouter;
