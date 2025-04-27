/*
  Warnings:

  - You are about to drop the column `groupId` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `message` table. All the data in the column will be lost.
  - You are about to drop the `_ChatToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `receiverChatId` to the `chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderChatId` to the `chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_creatorId` to the `group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_image` to the `group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverMessageId` to the `message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderMessageId` to the `message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ChatToUser" DROP CONSTRAINT "_ChatToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChatToUser" DROP CONSTRAINT "_ChatToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "chat" DROP CONSTRAINT "chat_groupId_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_groupId_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_userId_fkey";

-- AlterTable
ALTER TABLE "chat" DROP COLUMN "groupId",
ADD COLUMN     "receiverChatId" INTEGER NOT NULL,
ADD COLUMN     "senderChatId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "group" ADD COLUMN     "group_creatorId" INTEGER NOT NULL,
ADD COLUMN     "group_image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "message" DROP COLUMN "groupId",
DROP COLUMN "userId",
ADD COLUMN     "receiverMessageId" INTEGER NOT NULL,
ADD COLUMN     "senderMessageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "globalChatId" TEXT;

-- DropTable
DROP TABLE "_ChatToUser";

-- CreateTable
CREATE TABLE "messageGGChat" (
    "id" SERIAL NOT NULL,
    "message_text" TEXT NOT NULL,
    "message_imageName" TEXT NOT NULL,
    "message_imageURL" TEXT NOT NULL,
    "message_imageType" TEXT NOT NULL,
    "message_imageSize" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupId" TEXT,
    "globalChatId" TEXT,

    CONSTRAINT "messageGGChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "globalChat" (
    "id" TEXT NOT NULL,

    CONSTRAINT "globalChat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_globalChatId_fkey" FOREIGN KEY ("globalChatId") REFERENCES "globalChat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_senderChatId_fkey" FOREIGN KEY ("senderChatId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_receiverChatId_fkey" FOREIGN KEY ("receiverChatId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_senderMessageId_fkey" FOREIGN KEY ("senderMessageId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_receiverMessageId_fkey" FOREIGN KEY ("receiverMessageId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messageGGChat" ADD CONSTRAINT "messageGGChat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messageGGChat" ADD CONSTRAINT "messageGGChat_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messageGGChat" ADD CONSTRAINT "messageGGChat_globalChatId_fkey" FOREIGN KEY ("globalChatId") REFERENCES "globalChat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
