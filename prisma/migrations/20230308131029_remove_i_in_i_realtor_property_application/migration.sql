/*
  Warnings:

  - You are about to drop the `IRealtorPropertyApplication` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "IRealtorPropertyApplication";

-- CreateTable
CREATE TABLE "RealtorPropertyApplication" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "realtorId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "RealtorPropertyApplication_id_key" ON "RealtorPropertyApplication"("id");
