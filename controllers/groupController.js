const { validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

const verifyToken = require("../middleware/verifyToken");

const validateGroup = require("../validateMiddlewares/validateGroup");

const validateMessage = require("../validateMiddlewares/validateMessage");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.group_create = [
  verifyToken,
  validateGroup,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id, group_name } = req.body;

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

      res.json({ createGroup });
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

      const sendMessageInGroup = await prisma.message.create({
        data: {
          message_text: message_text,
          message_image: "",
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

exports.group_send_image = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, chatId } = req.params;

    const { message_image } = req.body;

    const findRelatedChatToGroup = await prisma.chat.findFirst({
      where: {
        id: chatId,
      },
    });

    const sendImageInGroup = await prisma.message.create({
      data: {
        message_text: "",
        message_image: message_image,
        createdAt: new Date(),
        userId: req.authData.id,
        chatId: findRelatedChatToGroup.id,
        groupId: id,
      },
    });

    res.json({ sendImageInGroup });
  }),
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
        chat: true,
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

      const editMessageInGroup = await prisma.message.update({
        where: {
          id: Number(messageId),
          userId: req.authData.id,
          chatId: findByGroupId.conversations[0].id,
          groupId: id,
        },
        data: {
          message_text: message_text,
          message_image: "",
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
        chat: true,
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

    res.json({ message: "Message has been deleted." });
  }),
];

exports.group_delete = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const deleteGroup = await prisma.group.delete({
      where: {
        id: id,
      },
    });

    res.json({ message: "Group has been deleted." });
  }),
];
