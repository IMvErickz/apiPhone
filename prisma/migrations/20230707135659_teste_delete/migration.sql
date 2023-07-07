-- DropForeignKey
ALTER TABLE "Config" DROP CONSTRAINT "Config_userId_fkey";

-- AddForeignKey
ALTER TABLE "Config" ADD CONSTRAINT "Config_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
