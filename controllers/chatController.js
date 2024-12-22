const { validationResult } = require("express-validator");

const verifyToken = require("../middleware/verifyToken");

const asyncHandler = require("express-async-handler");

const validateMessage = require("../validateMiddlewares/validateMessage");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const cloudinary = require("cloudinary").v2;

const upload = require("../middleware/multer");

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
          message_imageURL: "",
          createdAt: new Date(),
          userId: req.authData.id,
          chatId: id,
        },
      });

      res.json({ sendMessageInChat });
    }
  }),
];

exports.chat_send_image = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { message_image } = req.body;

    const sendImageInChat = await prisma.message.create({
      data: {
        message_text: "",
        message_imageURL: message_image,
        createdAt: new Date(),
        userId: req.authData.id,
        chatId: id,
      },
    });

    res.send({ sendImageInChat });
  }),
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

    const { message_text } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const editMessageInChat = await prisma.message.update({
        where: {
          id: Number(messageId),
          chat: id,
        },
        data: {
          message_text: message_text,
          message_imageURL: message_image,
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

    res.json({ message: "Message has been deleted." });
  }),
];
