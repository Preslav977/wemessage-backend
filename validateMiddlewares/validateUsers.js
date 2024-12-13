const { body } = require("express-validator");

const lengthErr = "must be between 1 and 30 characters";

takenError = "is already taken";

const passwordContainErr =
  "must be minimum 8 characters, one upper letter, one special character";

const passwordMatchErr = "must match";

const bioLengthErr = "must not be more than 150 characters";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const validateUsers = [
  body("first_name")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`First name ${lengthErr}`),

  body("first_name").custom(async (value) => {
    const findIfFirstNameIsTaken = await prisma.user.findUnique({
      where: {
        first_name: value,
      },
    });

    if (findIfFirstNameIsTaken) {
      throw new Error(`First name ${takenError}`);
    }
  }),

  body("last_name")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Last name ${lengthErr}`),

  body("last_name").custom(async (value) => {
    const findIfLastNameIsTaken = await prisma.user.findUnique({
      where: {
        last_name: value,
      },
    });

    if (findIfLastNameIsTaken) {
      throw new Error(`Last name ${takenError}`);
    }
  }),

  body("username")
    .custom(async (value) => {
      const findIfUsernameIsTaken = await prisma.user.findUnique({
        where: {
          username: value,
        },
      });

      if (findIfUsernameIsTaken) {
        throw new Error(`Username ${takenError}`);
      }
    })
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Username ${lengthErr}`),

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

  body("bio")
    .trim()
    .isLength({ max: 150 })
    .escape()
    .withMessage(`Bio ${bioLengthErr}`),
];

module.exports = validateUsers;
