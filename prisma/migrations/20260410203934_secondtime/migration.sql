-- CreateEnum
CREATE TYPE "BidRequestStatus" AS ENUM ('PENDING', 'SUBMITTED');

-- CreateTable
CREATE TABLE "BidRequest" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "contractorEmail" TEXT NOT NULL,
    "rawText" TEXT,
    "mediaUrls" TEXT[],
    "status" "BidRequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BidRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BidRequest" ADD CONSTRAINT "BidRequest_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
