const { validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

const verifyToken = require("../middleware/verifyToken");

const validateGroup = require("../validateMiddlewares/validateGroup");

const validateMessage = require("../validateMiddlewares/validateMessage");

const prisma = require("../db/client");

const upload = require("../middleware/multer");

const cloudinary = require("cloudinary").v2;

const handleFileUpload = require("../middleware/handleFileUpload");

const runMiddleware = require("../middleware/runMiddleware");

const multerFileUploadMiddleware = upload.single("file");

const formatImageSize = require("../middleware/formatImageSize");

const validateImage = require("../validateMiddlewares/validateImage");

exports.group_create = [
  verifyToken,
  validateGroup,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { group_name, id } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const createGroupChat = await prisma.chat.create({
        data: {
          users: {
            connect: [{ id: req.authData.id }, { id: Number(id) }],
          },
        },
      });

      // console.log(createGroupChat);

      const createGroup = await prisma.group.create({
        data: {
          group_name: group_name,
          users: {
            connect: [{ id: req.authData.id }, { id: Number(id) }],
          },
          chats: {
            connect: [{ id: createGroupChat.id }],
          },
        },
      });

      // console.log(createGroup);

      res.json({ createGroupChat, createGroup });
    }
  }),
];

exports.group_send_message = [
  verifyToken,
  validateMessage,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id, chatId } = req.params;

    const { message_text } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const findRelatedChatToGroup = await prisma.chat.findFirst({
        where: {
          id: chatId,
        },
      });

      // console.log(findRelatedChatToGroup);

      const sendMessageInGroup = await prisma.message.create({
        data: {
          message_text: message_text,
          message_imageName: "",
          message_imageURL: "",
          message_imageType: "",
          message_imageSize: 0,
          createdAt: new Date(),
          userId: req.authData.id,
          chatId: findRelatedChatToGroup.id,
          groupId: id,
        },
      });

      res.json({ sendMessageInGroup });
    }
  }),
];

let cloudinaryResponse;

exports.group_send_image = [
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

    const { id, chatId } = req.params;

    const findRelatedChatToGroup = await prisma.chat.findFirst({
      where: {
        id: chatId,
      },
    });

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const sendImageInGroup = await prisma.message.create({
        data: {
          message_text: "",
          message_imageName: req.file.originalname,
          message_imageURL: cloudinaryResponse.secure_url,
          message_imageType: req.file.mimetype,
          message_imageSize: req.file.size,
          createdAt: new Date(),
          userId: req.authData.id,
          chatId: findRelatedChatToGroup.id,
          groupId: id,
        },
      });

      res.json({ sendImageInGroup });
    }
  },
];

exports.group_details = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const findByGroupId = await prisma.group.findFirst({
      where: {
        id: id,
      },
      include: {
        chats: true,
        users: true,
      },
    });

    res.json({ findByGroupId });
  }),
];

exports.groups_get = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const findAllGroups = await prisma.group.findMany({});

    res.json({ findAllGroups });
  }),
];

exports.group_update = [
  verifyToken,
  validateGroup,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { group_name } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const editGroupName = await prisma.group.update({
        where: {
          id: id,
        },
        data: {
          group_name: group_name,
        },
      });

      res.json({ editGroupName });
    }
  }),
];

exports.group_edit_message = [
  verifyToken,
  validateMessage,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id, messageId } = req.params;

    const { message_text } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const findByGroupId = await prisma.group.findFirst({
        where: {
          id: id,
        },
        include: {
          chats: true,
        },
      });

      // console.log(req.authData.id, findByGroupId.chats[0].id, id);

      const editMessageInGroup = await prisma.message.update({
        where: {
          id: Number(messageId),
          userId: req.authData.id,
          chatId: findByGroupId.chats[0].id,
          groupId: id,
        },
        data: {
          message_text: message_text,
          updatedAt: new Date(),
        },
      });

      res.json({ editMessageInGroup });
    }
  }),
];

exports.group_delete_message = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, messageId } = req.params;

    const findByGroupId = await prisma.group.findFirst({
      where: {
        id: id,
      },
      include: {
        chats: true,
      },
    });

    const deleteMessageInGroup = await prisma.message.delete({
      where: {
        id: Number(messageId),
        userId: req.authData.id,
        chatId: findByGroupId.chat[0].id,
        groupId: id,
      },
    });

    if (deleteMessageInGroup.message_imageURL !== "") {
      const deleteImageFromCloudinary = await cloudinary.uploader.destroy(
        `wemessage_images/${deleteMessageInGroup.message_imageName}`
      );

      console.log(deleteImageFromCloudinary);
    }

    res.json({ message: "Message has been deleted." });
  }),
];

exports.group_delete = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const checkIfGroupExists = await prisma.group.findFirst({
      where: {
        id: id,
      },
      include: {
        messages: true,
      },
    });

    const [groupImagesArray] = [checkIfGroupExists.messages];

    async function loopArray(groupImagesArray) {
      groupImagesArray.forEach(async (img) => {
        await cloudinary.uploader.destroy(
          `wemessage_images/${img.message_imageName}`
        );
      });
    }

    console.log(loopArray(groupImagesArray));

    await prisma.group.delete({
      where: {
        id: checkIfGroupExists.id,
      },
    });

    res.json({ message: "Group has been deleted." });
  }),
];
