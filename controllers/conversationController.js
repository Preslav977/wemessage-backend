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
