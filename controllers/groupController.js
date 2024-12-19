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
