const { body } = require("express-validator");

const bcrypt = require("bcryptjs");

const prisma = require("../db/client");

const passwordContainErr =
  "must be minimum 8 characters, must have one upper and lower letter, and one special character";

const passwordMatchErr = "must match";

const validateUserProfilePasswords = [
  body("old_password").custom(async (value, { req }) => {
    const { id } = req.params;

    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    const checkIfOldPasswordMatches = await bcrypt.compare(
      value,
      user.password
    );

    if (!checkIfOldPasswordMatches) {
      throw new Error("Old password doesn't match.");
    } else {
      //
    }
  }),

  body("password")
    .trim()
    .isLength({ min: 8 })
    .escape()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .withMessage(`Password ${passwordContainErr}`),

  body("confirm_password")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage(`Passwords ${passwordMatchErr}`),
];

module.exports = validateUserProfilePasswords;
