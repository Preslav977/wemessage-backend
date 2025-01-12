const { validationResult } = require("express-validator");

const verifyToken = require("../middleware/verifyToken");

const asyncHandler = require("express-async-handler");

const validateMessage = require("../validateMiddlewares/validateMessage");

const prisma = require("../db/client");

const cloudinary = require("cloudinary").v2;

const upload = require("../middleware/multer");

const handleFileUpload = require("../middleware/handleFileUpload");

const runMiddleware = require("../middleware/runMiddleware");

const multerFileUploadMiddleware = upload.single("file");

const formatImageSize = require("../middleware/formatImageSize");

const validateImage = require("../validateMiddlewares/validateImage");

exports.chat_create = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.body;

    const createChat = await prisma.chat.create({
      data: {
        users: {
          connect: [{ id: req.authData.id }, { id: Number(id) }],
        },
      },
    });

    res.json({ createChat });
  }),
];

exports.chat_send_message = [
  verifyToken,
  validateMessage,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { message_text } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const sendMessageInChat = await prisma.message.create({
        data: {
          message_text: message_text,
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          userId: req.authData.id,
          chatId: id,
        },
      });

      console.log(sendMessageInChat);

      res.json({ sendMessageInChat });
    }
  }),
];

let cloudinaryResponse;

exports.chat_send_image = [
  verifyToken,

  asyncHandler(async (req, res, next) => {
    // console.log(req.file.buffer);
    try {
      await runMiddleware(req, res, multerFileUploadMiddleware);

      const b64 = Buffer.from(req.file.buffer).toString("base64");

      const dataURI = "data:" + req.file.mimetype + ";base64," + b64;

      cloudinaryResponse = await handleFileUpload(
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
      const sendImageInChat = await prisma.message.create({
        data: {
          message_text: "",
          message_imageName: req.file.originalname,
          message_imageURL: cloudinaryResponse.secure_url,
          message_imageType: req.file.mimetype,
          message_imageSize: req.file.size,
          createdAt: new Date(),
          userId: req.authData.id,
          chatId: id,
        },
      });
      console.log(sendImageInChat);

      res.send({ sendImageInChat });
    }
  },
];

exports.chat_details = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const findChatById = await prisma.chat.findFirst({
      where: {
        id: id,
      },
      include: {
        users: true,
        messages: true,
      },
    });

    res.json({ findChatById });
  }),
];

exports.chats_get = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const getChats = await prisma.chat.findMany({
      include: {
        users: true,
      },
    });

    res.json({ getChats });
  }),
];

exports.chat_edit_message = [
  verifyToken,
  validateMessage,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id, messageId } = req.params;

    // console.log(id, messageId);

    const { message_text } = req.body;

    // console.log(message_text);

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const editMessageInChat = await prisma.message.update({
        where: {
          id: Number(messageId),
          chatId: id,
        },
        data: {
          message_text: message_text,
          updatedAt: new Date(),
        },
      });

      res.json({ editMessageInChat });
    }
  }),
];

exports.chat_delete_message = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, messageId } = req.params;

    const deleteMessageInChat = await prisma.message.delete({
      where: {
        id: Number(messageId),
        chatId: id,
        userId: req.authData.id,
      },
    });

    if (deleteMessageInChat.message_imageURL !== "") {
      const deleteImageFromCloudinary = await cloudinary.uploader.destroy(
        `wemessage_images/${deleteMessageInChat.message_imageName}`
      );

      console.log(deleteImageFromCloudinary);
    }

    res.json({ message: "Message has been deleted." });
  }),
];
