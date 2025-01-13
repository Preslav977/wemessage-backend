const { body } = require("express-validator");

const groupLengthErr = "must be between 3 and 30 characters";

const groupTakenError = "is already taken";

const prisma = require("../db/client");

const validateGroup = [
  body("group_name")
    .trim()
    .isLength({ min: 3, max: 30 })
    .escape()
    .withMessage(`Group name ${groupLengthErr}`),

  body("group_name").custom(async (value) => {
    const findIfGroupNameExists = await prisma.group.findUnique({
      where: {
        group_name: value,
      },
    });

    if (findIfGroupNameExists) {
      throw new Error(`Group name ${groupTakenError}`);
    } else {
      //
    }
  }),
];

module.exports = validateGroup;
