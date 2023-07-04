/*
  Warnings:

  - Added the required column `Adm` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Adm" BOOLEAN NOT NULL;
