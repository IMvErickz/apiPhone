-- CreateTable
CREATE TABLE "Contacts" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Number" INTEGER NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calls" (
    "id" TEXT NOT NULL,
    "Number" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Calls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContactsToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ContactsToUser_AB_unique" ON "_ContactsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ContactsToUser_B_index" ON "_ContactsToUser"("B");

-- AddForeignKey
ALTER TABLE "Calls" ADD CONSTRAINT "Calls_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactsToUser" ADD CONSTRAINT "_ContactsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactsToUser" ADD CONSTRAINT "_ContactsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
