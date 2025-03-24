const { Router } = require("express");

const userRouter = Router();

const userController = require("../controllers/userController");

userRouter.post("/signup", userController.user_sign_up);

userRouter.post("/login", userController.user_log_in);

userRouter.post("/login_admin", userController.user_log_in_admin);

userRouter.post("/login_guest", userController.user_log_in_guest);

userRouter.get("/search", userController.user_search);

userRouter.get("/all", userController.user_get_all);

userRouter.get("/:id", userController.user_get_by_id);

userRouter.put(
  "/profile/background_image/:id",
  userController.user_update_background_image
);

userRouter.put("/profile_image/:id", userController.user_update_profile_image);

userRouter.put("/profile/edit/:id", userController.user_update_profile);

userRouter.put(
  "/profile/change_passwords/:id",
  userController.user_update_passwords
);

userRouter.get("/", userController.user_get_details);

module.exports = userRouter;
