const { Router } = require("express");

const groupRouter = Router();

const groupController = require("../controllers/groupController");

groupRouter.post("/", groupController.group_create);

groupRouter.post(
  "/:id/message/:conversationId",
  groupController.group_send_message
);

groupRouter.post(
  "/:id/messageImage/:conversationId",
  groupController.group_send_message_image
);

groupRouter.put("/:id", groupController.group_name_update);

module.exports = groupRouter;
