/*
  Warnings:

  - You are about to drop the `Grade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Init` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Year` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Grade";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Init";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Year";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Low" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Stander" (
    "code" TEXT NOT NULL,
    "chinese" INTEGER NOT NULL,
    "english" INTEGER NOT NULL,
    "mathA" INTEGER NOT NULL,
    "mathB" INTEGER NOT NULL,
    "math" INTEGER NOT NULL,
    "social" INTEGER NOT NULL,
    "nature" INTEGER NOT NULL,
    "listen" INTEGER NOT NULL,
    "old" BOOLEAN NOT NULL,
    CONSTRAINT "Stander_code_fkey" FOREIGN KEY ("code") REFERENCES "Low" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pass1" (
    "code" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    CONSTRAINT "Pass1_code_fkey" FOREIGN KEY ("code") REFERENCES "Low" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pass2" (
    "code" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    CONSTRAINT "Pass2_code_fkey" FOREIGN KEY ("code") REFERENCES "Low" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pass3" (
    "code" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    CONSTRAINT "Pass3_code_fkey" FOREIGN KEY ("code") REFERENCES "Low" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pass4" (
    "code" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    CONSTRAINT "Pass4_code_fkey" FOREIGN KEY ("code") REFERENCES "Low" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pass5" (
    "code" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    CONSTRAINT "Pass5_code_fkey" FOREIGN KEY ("code") REFERENCES "Low" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pass6" (
    "code" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    CONSTRAINT "Pass6_code_fkey" FOREIGN KEY ("code") REFERENCES "Low" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Stat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "sum" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Search" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "people" INTEGER NOT NULL,
    "percent" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "subject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "school" TEXT NOT NULL,
    "major" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "list" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    CONSTRAINT "list_id_fkey" FOREIGN KEY ("id") REFERENCES "subject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Low_code_key" ON "Low"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Stander_code_key" ON "Stander"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Pass1_code_key" ON "Pass1"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Pass2_code_key" ON "Pass2"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Pass3_code_key" ON "Pass3"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Pass4_code_key" ON "Pass4"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Pass5_code_key" ON "Pass5"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Pass6_code_key" ON "Pass6"("code");
