-- CreateTable
CREATE TABLE "Init" (
    "serial" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "school" TEXT NOT NULL,
    "subject" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Year" (
    "from" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    CONSTRAINT "Year_from_fkey" FOREIGN KEY ("from") REFERENCES "Init" ("serial") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Grade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "code" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Year_from_key" ON "Year"("from");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_id_key" ON "Grade"("id");
