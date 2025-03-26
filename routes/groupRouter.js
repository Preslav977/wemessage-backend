const { Router } = require("express");

const groupRouter = Router();

const groupController = require("../controllers/groupController");

groupRouter.get("/search", groupController.groups_friends_get);

groupRouter.post("/:id/message", groupController.group_send_message);

groupRouter.post("/:id/image", groupController.group_send_image);

groupRouter.put("/:id/message/:messageId", groupController.group_edit_message);

groupRouter.delete(
  "/:id/message/:messageId",
  groupController.group_delete_message
);

groupRouter.put("/:id/join", groupController.group_join_users);

groupRouter.get("/:id", groupController.group_details);

groupRouter.put("/:id", groupController.group_update);

groupRouter.delete("/:id", groupController.group_delete);

groupRouter.post("/", groupController.group_create);

groupRouter.get("/", groupController.groups_get);

module.exports = groupRouter;
