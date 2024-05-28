-- CreateTable
CREATE TABLE "Bucket" (
    "id" SERIAL NOT NULL,
    "capacity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bucket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fruit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fruit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketFruit" (
    "id" SERIAL NOT NULL,
    "bucketId" INTEGER NOT NULL,
    "fruitId" INTEGER NOT NULL,

    CONSTRAINT "BucketFruit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BucketFruit_bucketId_fruitId_key" ON "BucketFruit"("bucketId", "fruitId");

-- AddForeignKey
ALTER TABLE "BucketFruit" ADD CONSTRAINT "BucketFruit_bucketId_fkey" FOREIGN KEY ("bucketId") REFERENCES "Bucket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketFruit" ADD CONSTRAINT "BucketFruit_fruitId_fkey" FOREIGN KEY ("fruitId") REFERENCES "Fruit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
