const { Router } = require("express");

const usersRouter = Router();

const usersController = require("../controllers/usersController");

usersRouter.get("/", usersController.user_get_detail);

usersRouter.post("/login", usersController.user_log_in);

usersRouter.post("/login_admin", usersController.user_log_in_admin);

usersRouter.post("/login_guest", usersController.user_log_in_guest);

usersRouter.post("/signup", usersController.user_sign_up);

usersRouter.put("/profile/:id", usersController.user_update_background_image);

usersRouter.put("/profile/edit/:id", usersController.user_update_profile);

usersRouter.put(
  "/profile/change-passwords/:id",
  usersController.user_update_passwords
);

module.exports = usersRouter;
