const { body } = require("express-validator");

const lengthErr = "must be between 1 and 30 characters";

const usernameTakenError = "is already taken";

const passwordContainErr =
  "must be minimum 8 characters, must have at least one upper letter and one special character";

const passwordMatchErr = "must match";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const validateUsers = [
  body("username")
    .custom(async (value) => {
      const findIfUsernameIsTaken = await prisma.user.findUnique({
        where: {
          username: value,
        },
      });

      if (findIfUsernameIsTaken) {
        throw new Error(`Username ${usernameTakenError} `);
      }
    })
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Username ${lengthErr}`),

  body("first_name")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`First name ${lengthErr}`),

  body("last_name")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Last name ${lengthErr}`),

  body("password")
    .trim()
    .isLength({ min: 8 })
    .escape()
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
    )
    .withMessage(`Password ${passwordContainErr}`),

  body("confirm_password")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage(`Passwords ${passwordMatchErr}`),
];

module.exports = validateUsers;
