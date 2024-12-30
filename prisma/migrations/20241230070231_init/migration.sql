/*
  Warnings:

  - You are about to drop the column `chat_image` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `chat_message` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[first_name]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[last_name]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Presence" AS ENUM ('ONLINE', 'OFFLINE');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'GUEST';

-- AlterTable
ALTER TABLE "_ChatToUser" ADD CONSTRAINT "_ChatToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ChatToUser_AB_unique";

-- AlterTable
ALTER TABLE "chat" DROP COLUMN "chat_image",
DROP COLUMN "chat_message",
DROP COLUMN "createdAt",
ADD COLUMN     "groupId" TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "status",
ADD COLUMN     "groupId" TEXT,
ADD COLUMN     "online_presence" "Presence" NOT NULL DEFAULT 'OFFLINE';

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "message_text" TEXT NOT NULL,
    "message_imageName" TEXT NOT NULL,
    "message_imageURL" TEXT NOT NULL,
    "message_imageType" TEXT NOT NULL,
    "message_imageSize" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "chatId" TEXT NOT NULL,
    "groupId" TEXT,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group" (
    "id" TEXT NOT NULL,
    "group_name" TEXT NOT NULL,

    CONSTRAINT "group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "group_group_name_key" ON "group"("group_name");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "user_first_name_key" ON "user"("first_name");

-- CreateIndex
CREATE UNIQUE INDEX "user_last_name_key" ON "user"("last_name");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
