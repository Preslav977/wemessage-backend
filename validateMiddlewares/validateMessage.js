const { body } = require("express-validator");

const messageLengthErr = "must be no more than 300 characters.";

const validateMessage = [
  body("message_text")
    .trim()
    .isLength({ max: 300 })
    .escape()
    .withMessage(`Message text ${messageLengthErr}`),
];

module.exports = validateMessage;
