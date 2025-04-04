const { Router } = require("express");

const globalChatRouter = Router();

const globalChatController = require("../controllers/globalChatController");

globalChatRouter.post(
  "/:id/message",
  globalChatController.send_message_globalChat
);

globalChatRouter.post("/:id/image", globalChatController.send_image_globalChat);

globalChatRouter.put("/:id/join", globalChatController.join_globalChat);

globalChatRouter.put(
  "/:id/message/:messageId",
  globalChatController.edit_message_globalChat
);

globalChatRouter.delete(
  "/:id/message/:messageId",
  globalChatController.delete_message_globalChat
);

globalChatRouter.get("/:id", globalChatController.get_globalChat_by_id);

globalChatRouter.post("/", globalChatController.create_globalChat);

module.exports = globalChatRouter;
