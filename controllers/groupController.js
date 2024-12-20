const { validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const verifyToken = require("../middleware/verifyToken");

exports.group_create = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, group_name } = req.body;

    const createGroupConversation = await prisma.conversation.create({
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
        conversations: {
          connect: [{ id: createGroupConversation.id }],
        },
      },
    });

    res.json({ createGroup });
  }),
];

exports.group_send_message = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, conversationId } = req.params;

    const { message_text } = req.body;

    const findRelatedConversationToGroup = await prisma.conversation.findFirst({
      where: {
        id: conversationId,
      },
    });

    // console.log(findRelatedConversationToGroup);

    const sendMessageInGroup = await prisma.message.create({
      data: {
        message_text: message_text,
        message_image: "",
        createdAt: new Date(),
        userId: req.authData.id,
        conversationId: findRelatedConversationToGroup.id,
        groupId: id,
      },
    });

    res.json({ sendMessageInGroup });
  }),
];

exports.group_send_message_image = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, conversationId } = req.params;

    const { message_image } = req.body;

    const findRelatedConversationToGroup = await prisma.conversation.findFirst({
      where: {
        id: conversationId,
      },
    });

    // console.log(findRelatedConversationToGroup);

    const sendMessageImageInGroup = await prisma.message.create({
      data: {
        message_text: "",
        message_image: message_image,
        createdAt: new Date(),
        userId: req.authData.id,
        conversationId: findRelatedConversationToGroup.id,
        groupId: id,
      },
    });

    res.json({ sendMessageImageInGroup });
  }),
];

exports.group_name_update = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { group_name } = req.body;

    const renameGroupName = await prisma.group.update({
      where: {
        id: id,
      },
      data: {
        group_name: group_name,
      },
    });

    res.json({ renameGroupName });
  }),
];

exports.group_edit_message = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, messageId } = req.params;

    const { message_text } = req.body;

    console.log(id, messageId);

    const findByGroupId = await prisma.group.findFirst({
      where: {
        id: id,
      },
      include: {
        conversations: true,
      },
    });

    const editMessageInGroup = await prisma.message.update({
      where: {
        id: Number(messageId),
        userId: req.authData.id,
        conversationId: findByGroupId.conversations[0].id,
        groupId: id,
      },
      data: {
        message_text: message_text,
        message_image: "",
        updatedAt: new Date(),
      },
    });

    res.json({ editMessageInGroup });
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
        conversations: true,
      },
    });

    const deleteMessageInGroup = await prisma.message.delete({
      where: {
        id: Number(messageId),
        userId: req.authData.id,
        conversationId: findByGroupId.conversations[0].id,
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
