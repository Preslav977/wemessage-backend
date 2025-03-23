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
        users: true,
        messagesGGChat: true,
      },
    });

    res.json(findGlobalChatById);
  }),
];
