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
