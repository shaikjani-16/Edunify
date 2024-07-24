/*
  Warnings:

  - You are about to drop the column `email_id` on the `School` table. All the data in the column will be lost.
  - Added the required column `email` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "School" DROP COLUMN "email_id",
ADD COLUMN     "email" TEXT NOT NULL;
