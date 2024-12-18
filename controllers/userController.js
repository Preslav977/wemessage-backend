const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const asyncHandler = require("express-async-handler");

const validateUserRegistration = require("../validateMiddlewares/validateUserRegistration");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const passport = require("passport");

const jwt = require("jsonwebtoken");

const verifyToken = require("../middleware/verifyToken");

const validateUserProfile = require("../validateMiddlewares/validateUserProfile");

const validateUserProfilePasswords = require("../validateMiddlewares/validateUserProfilePasswords");

exports.user_sign_up = [
  validateUserRegistration,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { first_name, last_name, username, password, confirm_password } =
      req.body;

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      if (err) {
        console.error("Failed to hash the passwords", err);
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

        res.json({ signUpAndCreateUser });
      }
    });
  }),
];

exports.user_log_in = [
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const { id } = req.user;

    jwt.sign({ id }, process.env.SECRET, { expiresIn: "25m" }, (err, token) => {
      res.json({ token });
    });
  },
];

exports.user_log_in_admin = [
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

exports.user_log_in_guest = [
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const { id, user_role } = req.user;

    jwt.sign(
      { id, user_role },
      process.env.SECRET,
      { expiresIn: "25m" },
      (err, token) => {
        res.json({ token });
      }
    );
  },
];

exports.user_get_detail = [
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

exports.user_update_background_image = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { background_picture } = req.body;

    const updateUserBackgroundPicture = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        background_picture: background_picture,
      },
    });

    res.json({ updateUserBackgroundPicture });
  }),
];

exports.user_update_profile = [
  verifyToken,
  validateUserProfile,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { first_name, last_name, username, bio, profile_picture } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const updateUserProfile = await prisma.user.update({
        where: {
          id: Number(id),
        },
        data: {
          first_name: first_name,
          last_name: last_name,
          username: username,
          bio,
          profile_picture: profile_picture,
        },
      });

      res.json({ updateUserProfile });
    }
  }),
];

exports.user_update_passwords = [
  verifyToken,
  validateUserProfilePasswords,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { old_password, password, confirm_password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    const checkIfOldPasswordMatches = await bcrypt.compare(
      old_password,
      user.password
    );

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      if (err) {
        console.error("Failed to hash the passwords", err);
        throw err;
      }

      if (checkIfOldPasswordMatches) {
        if (!errors.isEmpty()) {
          res.status(400).send(errors.array());
        } else {
          const updateUserPasswords = await prisma.user.update({
            where: {
              id: Number(id),
            },
            data: {
              password: hashedPassword,
              confirm_password: hashedPassword,
            },
          });

          res.json({ updateUserPasswords });
        }
      } else {
        res.json({ message: "Old password doesn't match." });
      }
    });
  }),
];
