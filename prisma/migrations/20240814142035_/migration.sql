-- CreateTable
CREATE TABLE "Rolls" (
    "id" SERIAL NOT NULL,
    "result" INTEGER NOT NULL,
    "diceTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rolls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiceType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sides" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiceType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiceType_name_key" ON "DiceType"("name");

-- AddForeignKey
ALTER TABLE "Rolls" ADD CONSTRAINT "Rolls_diceTypeId_fkey" FOREIGN KEY ("diceTypeId") REFERENCES "DiceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
