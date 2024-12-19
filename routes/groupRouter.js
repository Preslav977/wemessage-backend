const { Router } = require("express");

const groupRouter = Router();

const groupController = require("../controllers/groupController");

groupRouter.post("/", groupController.group_create);

groupRouter.post(
  "/:id/message/:conversationId",
  groupController.group_send_message
);

module.exports = groupRouter;
