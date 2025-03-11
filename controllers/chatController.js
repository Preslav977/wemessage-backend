const { validationResult } = require("express-validator");

const verifyToken = require("../middleware/verifyToken");

const asyncHandler = require("express-async-handler");

const validateMessage = require("../validateMiddlewares/validateMessage");

const prisma = require("../db/client");

const upload = require("../middleware/multer");

const handleFileUpload = require("../middleware/handleFileUpload");

const runMiddleware = require("../middleware/runMiddleware");

const multerFileUploadMiddleware = upload.single("file");

const validateImage = require("../validateMiddlewares/validateImage");

exports.chat_create = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { senderId, receiverId } = req.body;

    const searchIfChatWithSameUserExists = await prisma.chat.findFirst({
      select: {
        senderChat: {
          include: true,
        },
        receiverChat: {
          include: true,
        },
      },
      where: {
        OR: [
          {
            senderChatId: Number(senderId),
            receiverChatId: Number(receiverId),
          },
          {
            senderChatId: Number(senderId),
            receiverChatId: Number(receiverId),
          },
        ],
      },
    });

    if (searchIfChatWithSameUserExists !== null) {
      return;
    } else {
      const createChat = await prisma.chat.create({
        data: {
          senderChatId: Number(senderId),
          receiverChatId: Number(receiverId),
        },
      });

      const getCreatedChat = await prisma.chat.findFirst({
        where: {
          id: createChat.id,
        },
        include: {
          senderChat: true,
          receiverChat: true,
          messages: true,
        },
      });

      res.json(getCreatedChat);
    }
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
        senderChat: true,
        receiverChat: true,
        messages: true,
      },
    });

    res.json(findChatById);
  }),
];

exports.chats_get = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const getChats = await prisma.chat.findMany({
      include: {
        senderChat: true,
        receiverChat: true,
        messages: true,
      },
    });

    res.json(getChats);
  }),
];

exports.chat_send_message = [
  verifyToken,
  validateMessage,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { message_text, receiverId } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      await prisma.message.create({
        data: {
          message_text: message_text,
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          senderMessageId: req.authData.id,
          receiverMessageId: Number(receiverId),
          chatId: id,
        },
      });

      const getChatWithSendMessages = await prisma.chat.findFirst({
        where: {
          id: id,
        },
        include: {
          senderChat: true,
          receiverChat: true,
          messages: true,
        },
      });

      res.json(getChatWithSendMessages);
    }
  }),
];

let cloudinaryResponse;

exports.chat_send_image = [
  verifyToken,

  asyncHandler(async (req, res, next) => {
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

    const { id, receiverMessageId } = req.params;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      await prisma.message.create({
        data: {
          message_text: "",
          message_imageName: req.file.originalname,
          message_imageURL: cloudinaryResponse.secure_url,
          message_imageType: req.file.mimetype,
          message_imageSize: req.file.size,
          createdAt: new Date(),
          senderMessageId: req.authData.id,
          receiverChatId: Number(receiverMessageId),
          chatId: id,
        },
      });

      const getChatWithSendMessagesImages = await prisma.chat.findFirst({
        where: {
          id: id,
        },
        include: {
          senderChat: true,
          receiverChat: true,
          messages: true,
        },
      });

      res.send(getChatWithSendMessagesImages);
    }
  },
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
      await prisma.message.update({
        where: {
          id: Number(messageId),
          chatId: id,
        },
        data: {
          message_text: message_text,
          updatedAt: new Date(),
        },
      });

      const getChatWithUpdatedMessages = await prisma.chat.findFirst({
        where: {
          id: id,
        },
        include: {
          senderChat: true,
          receiverChat: true,
          messages: true,
        },
      });

      res.json(getChatWithUpdatedMessages);
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
        senderMessageId: req.authData.id,
      },
    });

    if (deleteMessageInChat.message_imageURL !== "") {
      const deleteImageFromCloudinary = await cloudinary.uploader.destroy(
        `wemessage_images/${deleteMessageInChat.message_imageName}`
      );

      // console.log(deleteImageFromCloudinary);
    }

    const getChatWithDeletedMessages = await prisma.chat.findFirst({
      where: {
        id: id,
      },
      include: {
        senderChat: true,
        receiverChat: true,
        messages: true,
      },
    });

    res.json(getChatWithDeletedMessages);
  }),
];
