const { Router } = require("express");

const usersRouter = Router();

const usersController = require("../controllers/usersController");

usersRouter.get("/", usersController.users_get_detail);

usersRouter.post("/login", usersController.users_log_in);

usersRouter.post("/login_admin", usersController.users_log_in_admin);

usersRouter.post("/login_guest", usersController.users_log_in_guest);

usersRouter.post("/signup", usersController.users_sign_up);

// usersRouter.put("/:id", usersController.users_update_profile);

// usersRouter.put(
//   "/:id/passwords",
//   usersController.users_update_profile_passwords
// );

module.exports = usersRouter;
