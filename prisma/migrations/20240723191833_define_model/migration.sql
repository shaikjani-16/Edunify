-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "email_id" TEXT NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);
