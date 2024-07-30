/*
  Warnings:

  - The primary key for the `list` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `list` table. All the data in the column will be lost.
  - Added the required column `serial` to the `list` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subid` to the `list` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_list" (
    "serial" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subid" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    CONSTRAINT "list_subid_fkey" FOREIGN KEY ("subid") REFERENCES "subject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_list" ("code", "year") SELECT "code", "year" FROM "list";
DROP TABLE "list";
ALTER TABLE "new_list" RENAME TO "list";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
