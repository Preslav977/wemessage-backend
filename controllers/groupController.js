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

const validateImage = require("../validateMiddlewares/validateImage");

let cloudinaryGroupResponse;

exports.group_create = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    try {
      await runMiddleware(req, res, multerFileUploadMiddleware);

      const b64 = Buffer.from(req.file.buffer).toString("base64");

      const dataURI = "data:" + req.file.mimetype + ";base64," + b64;

      cloudinaryGroupResponse = await handleFileUpload(
        dataURI,
        req.file.originalname
      );

      next();
    } catch (error) {
      res.json(error.message);
    }
  }),
  validateGroup,
  validateImage,
  async (req, res, next) => {
    const errors = validationResult(req);

    const { group_name, userId, group_creatorId } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const createGroup = await prisma.group.create({
        data: {
          group_name: group_name,
          group_image: cloudinaryGroupResponse.secure_url,
          group_creatorId: Number(group_creatorId),
          users: {
            connect: [{ id: req.authData.id }, { id: Number(userId) }],
          },
        },
      });

      const getCreatedGroup = await prisma.group.findFirst({
        where: {
          id: createGroup.id,
        },
        include: {
          users: true,
          messagesGGChat: true,
        },
      });

      res.json(getCreatedGroup);
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
        messagesGGChat: {
          orderBy: {
            id: "asc",
          },
        },
        users: true,
      },
    });

    res.json(findByGroupId);
  }),
];

exports.groups_get = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const findAllGroups = await prisma.group.findMany({
      include: {
        users: true,
        messagesGGChat: true,
      },
    });

    res.json(findAllGroups);
  }),
];

exports.group_send_message = [
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
          groupId: id,
        },
      });

      const getGroupWithSendMessages = await prisma.group.findFirst({
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

      res.json(getGroupWithSendMessages);
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

    const { id } = req.params;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      await prisma.messageGroupGlobalChat.create({
        data: {
          message_text: "",
          message_imageName: req.file.originalname,
          message_imageURL: cloudinaryResponse.secure_url,
          message_imageType: req.file.mimetype,
          message_imageSize: req.file.size,
          createdAt: new Date(),
          userId: req.authData.id,
          groupId: id,
        },
      });

      const getGroupWithSendMessagesImages = await prisma.group.findFirst({
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

      res.json(getGroupWithSendMessagesImages);
    }
  },
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
      await prisma.messageGroupGlobalChat.update({
        where: {
          id: Number(messageId),
          groupId: id,
        },
        data: {
          message_text: message_text,
          updatedAt: new Date(),
        },
      });

      const getGroupWithUpdatedMessages = await prisma.group.findFirst({
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

      res.json(getGroupWithUpdatedMessages);
    }
  }),
];

exports.group_delete_message = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, messageId } = req.params;

    const deleteMessageInGroup = await prisma.messageGroupGlobalChat.delete({
      where: {
        id: Number(messageId),
        userId: req.authData.id,
        groupId: id,
      },
    });

    if (deleteMessageInGroup.message_imageURL !== "") {
      const deleteImageFromCloudinary = await cloudinary.uploader.destroy(
        `wemessage_images/${deleteMessageInGroup.message_imageName}`
      );

      // console.log(deleteImageFromCloudinary);
    }

    const getGroupWithDeletedMessages = await prisma.group.findFirst({
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

    res.json(getGroupWithDeletedMessages);
  }),
];

exports.group_update = [
  verifyToken,
  validateGroup,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { group_name, group_creatorId } = req.body;

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      await prisma.group.update({
        select: {
          users: {
            include: true,
          },
          messagesGGChat: {
            include: true,
          },
        },
        where: {
          id: id,
          OR: [
            { group_creatorId: Number(group_creatorId) },
            { users: { some: { role: "ADMIN" } } },
          ],
        },
        data: {
          group_name: group_name,
        },
      });

      // console.log(editGroupName);

      const getUpdatedGroup = await prisma.group.findFirst({
        where: {
          id: id,
        },
        include: {
          users: true,
          messagesGGChat: true,
        },
      });

      res.json(getUpdatedGroup);
    }
  }),
];

exports.group_join_users = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    await prisma.group.update({
      where: {
        id: id,
      },
      data: {
        users: {
          connect: [{ id: req.authData.id }],
        },
      },
    });

    // console.log(joinGroup);

    const getUpdatedGroupWithNewUsers = await prisma.group.findFirst({
      where: {
        id: id,
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

    res.json(getUpdatedGroupWithNewUsers);
  }),
];

exports.group_delete = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { group_creatorId } = req.body;

    const checkIfGroupExists = await prisma.group.findFirst({
      where: {
        id: id,
      },
      include: {
        users: true,
        messagesGGChat: true,
      },
    });

    const [groupImagesArray] = [checkIfGroupExists.messagesGGChat];

    async function loopArray(groupImagesArray) {
      groupImagesArray.forEach(async (img) => {
        await cloudinary.uploader.destroy(
          `wemessage_images/${img.message_imageName}`
        );
      });
    }

    // console.log(loopArray(groupImagesArray));

    await prisma.group.delete({
      select: {
        users: {
          include: true,
        },
      },
      where: {
        id: checkIfGroupExists.id,
        OR: [
          { group_creatorId: Number(group_creatorId) },
          { users: { some: { role: "ADMIN" } } },
        ],
      },
    });

    const getDeletedGroup = await prisma.group.findFirst({
      where: {
        id: checkIfGroupExists.id,
        group_creatorId: Number(group_creatorId),
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

    res.json(getDeletedGroup);
  }),
];
