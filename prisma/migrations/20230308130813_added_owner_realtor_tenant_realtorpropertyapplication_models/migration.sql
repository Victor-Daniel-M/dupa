-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Realtor" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "realtorId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "IRealtorPropertyApplication" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "realtorId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Owner_id_key" ON "Owner"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Realtor_id_key" ON "Realtor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_id_key" ON "Tenant"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IRealtorPropertyApplication_id_key" ON "IRealtorPropertyApplication"("id");
