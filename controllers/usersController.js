const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const asyncHandler = require("express-async-handler");

const validateUsers = require("../validateMiddlewares/validateUsers");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const passport = require("passport");

const jwt = require("jsonwebtoken");

const verifyToken = require("../middleware/verifyToken");

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
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const { id } = req.user;

    jwt.sign({ id }, process.env.SECRET, { expiresIn: "25m" }, (err, token) => {
      res.json({ token });
    });
  },
];

exports.users_log_in_admin = [
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const { id, user_role } = req.user;

    jwt.sign(
      {
        id,
        user_role,
      },
      process.env.SECRET,
      { expiresIn: "25m" },
      (err, token) => {
        if (user_role !== "ADMIN") {
          res.json({ message: "Unauthorized" });
        }
        res.json({ token });
      }
    );
  },
];

exports.users_get_detail = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const getUserById = await prisma.user.findFirst({
      where: {
        id: req.authData.id,
      },
    });
    res.json(getUserById);
  }),
];
