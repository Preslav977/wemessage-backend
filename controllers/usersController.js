const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const asyncHandler = require("express-async-handler");

const validateUsers = require("../validateMiddlewares/validateUsers");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const jwt = require("jsonwebtoken");

exports.users_sign_up = [
  validateUsers,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { first_name, last_name, username, password, confirm_password } =
      req.body;

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      if (err) {
        console.error("Failed to ash the passwords", err);
        throw err;
      }

      if (!errors.isEmpty()) {
        res.status(400).send(errors.array());
      } else {
        const signUpAndCreateUser = await prisma.user.create({
          data: {
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: hashedPassword,
            confirm_password: hashedPassword,
            bio: "",
            profile_picture: "",
            background_picture: "",
          },
        });

        res.json(signUpAndCreateUser);
      }
    });
  }),
];

exports.users_log_in = [
  (req, res) => {
    const { id } = req.user;

    console.log(id);

    console.log(req.user);

    jwt.sign({ id }, process.env.SECRET, { expiresIn: "30s" }, (err, token) => {
      res.json({ token });
    });
  },
];
