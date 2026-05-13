-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "chat" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "chatOwner" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_chatOwner_fkey" FOREIGN KEY ("chatOwner") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
