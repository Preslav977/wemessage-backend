const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const passport = require("passport");

const jwt = require("jsonwebtoken");

const verifyToken = require("../middleware/verifyToken");

const asyncHandler = require("express-async-handler");

const validateUserRegistration = require("../validateMiddlewares/validateUserRegistration");

const validateUserProfile = require("../validateMiddlewares/validateUserProfile");

const validateUserProfilePasswords = require("../validateMiddlewares/validateUserProfilePasswords");

const prisma = require("../db/client");

const upload = require("../middleware/multer");

const handleFileUpload = require("../middleware/handleFileUpload");

const runMiddleware = require("../middleware/runMiddleware");

const multerFileUploadMiddleware = upload.single("file");

const validateImage = require("../validateMiddlewares/validateImage");

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
  asyncHandler(async (req, res, next) => {
    const { id } = req.user;

    // console.log(id);

    jwt.sign({ id }, process.env.SECRET, { expiresIn: "25m" }, (err, token) => {
      res.json({ token });
    });

    await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        online_presence: "ONLINE",
      },
    });
  }),
];

exports.user_log_in_admin = [
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const { id, role } = req.user;

    jwt.sign(
      { id, role },
      process.env.SECRET,
      { expiresIn: "25m" },
      (err, token) => {
        if (role !== "ADMIN") {
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
    const { id } = req.user;

    // console.log(id);

    jwt.sign({ id }, process.env.SECRET, { expiresIn: "25m" }, (err, token) => {
      res.json({ token });
    });
  },
];

exports.user_get_details = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const getUserById = await prisma.user.findFirst({
      where: {
        id: req.authData.id,
      },
      orderBy: {
        id: "asc",
      },
    });
    res.json(getUserById);
  }),
];

exports.user_get_by_id = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const getUserById = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    res.json(getUserById);
  }),
];

exports.user_get_all = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const getAllUsers = await prisma.user.findMany({
      orderBy: {
        id: "asc",
      },
    });

    res.json(getAllUsers);
  }),
];

let cloudinaryUserBackgroundImageResponse;

exports.user_update_background_image = [
  verifyToken,

  asyncHandler(async (req, res, next) => {
    try {
      await runMiddleware(req, res, multerFileUploadMiddleware);

      // console.log(req.file, req.body);

      const b64 = Buffer.from(req.file.buffer).toString("base64");

      // console.log(b64);

      const dataURI = "data:" + req.file.mimetype + ";base64," + b64;

      // console.log(req.file, req.body);

      // console.log(dataURI);

      cloudinaryUserBackgroundImageResponse = await handleFileUpload(
        dataURI,
        req.file.originalname
      );

      // console.log(cloudinaryUserBackgroundImageResponse);

      next();
    } catch (error) {
      res.json(error.message);
    }
  }),

  validateImage,
  async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const updateUserBackgroundPicture = await prisma.user.update({
        where: {
          id: Number(id),
        },
        data: {
          background_picture: cloudinaryUserBackgroundImageResponse.secure_url,
        },
      });

      res.json({ updateUserBackgroundPicture });
    }
  },
];

let cloudinaryUserProfileImageResponse;

exports.user_update_profile_image = [
  verifyToken,

  asyncHandler(async (req, res, next) => {
    try {
      await runMiddleware(req, res, multerFileUploadMiddleware);

      const b64 = Buffer.from(req.file.buffer).toString("base64");

      const dataURI = "data:" + req.file.mimetype + ";base64," + b64;

      cloudinaryUserProfileImageResponse = await handleFileUpload(
        dataURI,
        req.file.originalname
      );

      next();
    } catch (error) {
      res.json(error.message);
    }
  }),

  validateImage,
  async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const updateUserProfilePicture = await prisma.user.update({
        where: {
          id: Number(id),
        },
        data: {
          profile_picture: cloudinaryUserProfileImageResponse.secure_url,
        },
      });

      res.json({ updateUserProfilePicture });
    }
  },
];

exports.user_update_profile = [
  verifyToken,
  validateUserProfile,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { first_name, last_name, username, bio } = req.body;

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
          bio: bio,
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

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      if (err) {
        console.error("Failed to hash the passwords", err);
        throw err;
      }

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
    });
  }),
];

exports.user_search = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { query } = req.query;

    const searchForUser =
      await prisma.$queryRaw`SELECT * FROM "user" WHERE first_name ILIKE CONCAT('%', ${query}, '%') OR last_name ILIKE CONCAT('%', ${query}, '%') OR username ILIKE CONCAT('%', ${query}, '%')`;

    res.json(searchForUser);
  }),
];
