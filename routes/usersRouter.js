const { Router } = require("express");

const usersRouter = Router();

const usersController = require("../controllers/usersController");

usersRouter.get("/", usersController.users_get);

usersRouter.post("/login", usersController.users_log_in);

module.exports = usersRouter;
