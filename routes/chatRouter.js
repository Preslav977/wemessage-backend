const { Router } = require("express");

const chatRouter = Router();

const chatController = require("../controllers/chatController");

chatRouter.post("/:id/message", chatController.chat_send_message);

chatRouter.post("/:id/image", chatController.chat_send_image);

chatRouter.put("/:id/message/:messageId", chatController.chat_edit_message);

chatRouter.delete(
  "/:id/message/:messageId",
  chatController.chat_delete_message
);

chatRouter.get("/:id", chatController.chat_details);

chatRouter.get("/", chatController.chats_get);

chatRouter.post("/", chatController.chat_create);

module.exports = chatRouter;
