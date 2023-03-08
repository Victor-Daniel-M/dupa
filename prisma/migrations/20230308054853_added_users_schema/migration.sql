-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('TENANT', 'PROPERTY_ADMIN', 'REALTOR', 'SYSTEM_ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "phoneNumber" TEXT,
    "createdAt" TEXT,
    "updatedAt" TEXT,
    "userType" "UserType"
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
