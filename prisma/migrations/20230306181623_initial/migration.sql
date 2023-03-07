-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,
    "openDate" TEXT NOT NULL,
    "propertyCategoryId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Property_id_key" ON "Property"("id");
