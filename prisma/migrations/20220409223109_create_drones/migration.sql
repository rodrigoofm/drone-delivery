-- CreateTable
CREATE TABLE "drones" (
    "id" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_image" TEXT NOT NULL,
    "customer_address" TEXT NOT NULL,
    "battery" INTEGER NOT NULL,
    "max_speed" DOUBLE PRECISION NOT NULL,
    "average_speed" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "current_fly" INTEGER NOT NULL,

    CONSTRAINT "drones_pkey" PRIMARY KEY ("id")
);
