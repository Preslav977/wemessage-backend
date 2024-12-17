const { validationResult } = require("express-validator");

const verifyToken = require("../middleware/verifyToken");

const asyncHandler = require("express-async-handler");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.conversation_create = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.body;

    const createConversation = await prisma.conversation.create({
      data: {
        users: {
          connect: [{ id: req.authData.id }, { id: Number(id) }],
        },
      },
    });

    res.json({ createConversation });
  }),
];

exports.conversation_send_message = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { message_text, message_image } = req.body;

    const sendMessageInConversation = await prisma.message.create({
      data: {
        message_text: message_text,
        createdAt: new Date(),
        userId: req.authData.id,
        conversationId: id,
      },
    });

    res.json({ sendMessageInConversation });
  }),
];

exports.conversation_details = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const findConversationById = await prisma.conversation.findFirst({
      where: {
        id: id,
      },
      include: {
        users: true,
        messages: true,
      },
    });

    res.json({ findConversationById });
  }),
];

exports.conversation_edit_message = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, messageId } = req.params;

    const { message_text, message_image } = req.body;

    const editMessageInConversation = await prisma.message.update({
      where: {
        id: Number(messageId),
        conversationId: id,
      },
      data: {
        message_text: message_text,
        message_image: message_image,
      },
    });

    res.json({ editMessageInConversation });
  }),
];

exports.conversation_delete_message = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const { id, messageId } = req.params;

    const deleteMessageInConversation = await prisma.message.delete({
      where: {
        id: Number(messageId),
        conversationId: id,
        userId: req.authData.id,
      },
    });

    res.json({ message: "Message has been deleted." });
  }),
];

exports.conversations_get = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const getConversations = await prisma.conversation.findMany({
      include: {
        users: true,
      },
    });

    res.json({ getConversations });
  }),
];
