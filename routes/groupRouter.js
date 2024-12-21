const { Router } = require("express");

const groupRouter = Router();

const groupController = require("../controllers/groupController");

groupRouter.post("/", groupController.group_create);

groupRouter.post("/:id/message/:chatId", groupController.group_send_message);

groupRouter.post("/:id/image/:chatId", groupController.group_send_image);

groupRouter.get("/:id", groupController.group_details);

groupRouter.get("/", groupController.groups_get);

groupRouter.put("/:id", groupController.group_update);

groupRouter.put("/:id/message/:messageId", groupController.group_edit_message);

groupRouter.delete(
  "/:id/message/:messageId",
  groupController.group_delete_message
);

groupRouter.delete("/:id", groupController.group_delete);

module.exports = groupRouter;
