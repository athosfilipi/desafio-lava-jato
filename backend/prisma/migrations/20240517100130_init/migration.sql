/*
  Warnings:

  - Added the required column `endAt` to the `appointments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointments` ADD COLUMN `endAt` DATETIME(3) NOT NULL;
