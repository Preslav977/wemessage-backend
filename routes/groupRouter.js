const { Router } = require("express");

const groupRouter = Router();

const groupController = require("../controllers/groupController");

groupRouter.post("/", groupController.group_create);

module.exports = groupRouter;
