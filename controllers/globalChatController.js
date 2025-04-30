const { validationResult } = require("express-validator");

const verifyToken = require("../middleware/verifyToken");

const asyncHandler = require("express-async-handler");

const validateMessage = require("../validateMiddlewares/validateMessage");

const prisma = require("../db/client");

const upload = require("../middleware/multer");

const cloudinary = require("cloudinary").v2;

const handleFileUpload = require("../middleware/handleFileUpload");

const runMiddleware = require("../middleware/runMiddleware");

const multerFileUploadMiddleware = upload.single("file");

const validateImage = require("../validateMiddlewares/validateImage");

exports.create_globalChat = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { userId } = req.body;

    const createGlobalChat = await prisma.globalChat.create({
      data: {
        users: {
          connect: [{ id: req.authData.id }, { id: Number(userId) }],
        },
      },
    });

    const getCreatedGlobalChat = await prisma.globalChat.findFirst({
      where: {
        id: createGlobalChat.id,
      },
      include: {
        users: true,
        messagesGGChat: true,
      },
    });

    res.json(getCreatedGlobalChat);
  }),
];

exports.get_globalChat_by_id = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const findGlobalChatById = await prisma.globalChat.findFirst({
      where: {
        id: id,
      },
      include: {
        messagesGGChat: {
          orderBy: {
            id: "asc",
          },
        },
        users: true,
      },
    });

    res.json(findGlobalChatById);
  }),
];

exports.send_message_globalChat = [
  verifyToken,
  validateMessage,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { message_text } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      await prisma.messageGroupGlobalChat.create({
        data: {
          message_text: message_text,
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          userId: req.authData.id,
          globalChatId: id,
        },
      });

      const getGlobalChatWithSendMessages = await prisma.globalChat.findFirst({
        where: {
          id: id,
        },
        include: {
          messagesGGChat: {
            orderBy: {
              id: "asc",
            },
          },
          users: true,
        },
      });

      res.json(getGlobalChatWithSendMessages);
    }
  }),
];

let cloudinaryGlobalChatResponse;

exports.send_image_globalChat = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    try {
      await runMiddleware(req, res, multerFileUploadMiddleware);

      const b64 = Buffer.from(req.file.buffer).toString("base64");

      const dataURI = "data:" + req.file.mimetype + ";base64," + b64;

      cloudinaryGlobalChatResponse = await handleFileUpload(
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
      await prisma.messageGroupGlobalChat.create({
        data: {
          message_text: "",
          message_imageName: req.file.originalname,
          message_imageURL: cloudinaryGlobalChatResponse.secure_url,
          message_imageType: req.file.mimetype,
          message_imageSize: req.file.size,
          createdAt: new Date(),
          userId: req.authData.id,
          globalChatId: id,
        },
      });

      const getGlobalChatWithSendImages = await prisma.globalChat.findFirst({
        where: {
          id: id,
        },
        include: {
          messagesGGChat: {
            orderBy: {
              id: "asc",
            },
          },
          users: true,
        },
      });

      res.json(getGlobalChatWithSendImages);
    }
  },
];

exports.edit_message_globalChat = [
  verifyToken,
  validateMessage,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id, messageId } = req.params;

    const { message_text } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      await prisma.messageGroupGlobalChat.update({
        where: {
          id: Number(messageId),
          globalChatId: id,
        },
        data: {
          message_text: message_text,
          updatedAt: new Date(),
        },
      });

      const getGlobalChatWithUpdatedMessages =
        await prisma.globalChat.findFirst({
          where: {
            id: id,
          },
          include: {
            messagesGGChat: {
              orderBy: {
                id: "asc",
              },
            },
            users: true,
          },
        });

      res.json(getGlobalChatWithUpdatedMessages);
    }
  }),
];

exports.join_globalChat = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { userId } = req.body;

    const joinGlobalChat = await prisma.globalChat.update({
      where: {
        id: id,
      },
      data: {
        users: {
          connect: [{ id: userId }],
        },
      },
    });

    const getUpdatedGlobalChatWithNewUsers = await prisma.globalChat.findFirst({
      where: {
        id: joinGlobalChat.id,
      },
      include: {
        users: {
          orderBy: {
            id: "asc",
          },
        },
        messagesGGChat: true,
      },
    });

    res.json(getUpdatedGlobalChatWithNewUsers);
  }),
];

exports.delete_message_globalChat = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, messageId } = req.params;

    const deleteMessageInGlobalChat =
      await prisma.messageGroupGlobalChat.delete({
        where: {
          id: Number(messageId),
          userId: req.authData.id,
          globalChatId: id,
        },
      });

    if (deleteMessageInGlobalChat.message_imageURL !== "") {
      const deleteImageFromCloudinary = await cloudinary.uploader.destroy(
        `wemessage_images/${deleteMessageInGlobalChat.message_imageName}`
      );

      // console.log(deleteImageFromCloudinary);
    }

    const getGlobalChatWithDeletedMessages = await prisma.globalChat.findFirst({
      where: {
        id: id,
      },
      include: {
        messagesGGChat: {
          orderBy: {
            id: "asc",
          },
        },
        users: true,
      },
    });

    res.json(getGlobalChatWithDeletedMessages);
  }),
];
