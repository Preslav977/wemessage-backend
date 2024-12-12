const { Router } = require("express");

const usersRouter = Router();

const usersController = require("../controllers/usersController");

usersRouter.get("/", usersController.users_get);

usersRouter.post("/login", usersController.users_log_in);

usersRouter.post("/login_admin", usersController.users_log_in_admin);

module.exports = usersRouter;
