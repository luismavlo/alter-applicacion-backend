/*
  Warnings:

  - You are about to drop the column `address` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `findOutAcademlo` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `numeration` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `studyLevel` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `application` table. All the data in the column will be lost.
  - Added the required column `channel` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country_id` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postal_code` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programming_experience` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street_number` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studies_applicant` to the `application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "application" DROP COLUMN "address",
DROP COLUMN "country",
DROP COLUMN "experience",
DROP COLUMN "findOutAcademlo",
DROP COLUMN "name",
DROP COLUMN "numeration",
DROP COLUMN "postalCode",
DROP COLUMN "province",
DROP COLUMN "studyLevel",
DROP COLUMN "surname",
ADD COLUMN     "channel" VARCHAR NOT NULL,
ADD COLUMN     "country_id" VARCHAR NOT NULL,
ADD COLUMN     "course_requirements" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "first_name" VARCHAR NOT NULL,
ADD COLUMN     "last_name" VARCHAR NOT NULL,
ADD COLUMN     "postal_code" VARCHAR NOT NULL,
ADD COLUMN     "programming_experience" TEXT NOT NULL,
ADD COLUMN     "state" VARCHAR NOT NULL,
ADD COLUMN     "street" VARCHAR NOT NULL,
ADD COLUMN     "street_number" VARCHAR NOT NULL,
ADD COLUMN     "studies_applicant" VARCHAR NOT NULL;

-- DropEnum
DROP TYPE "Country";

-- DropEnum
DROP TYPE "Social";

-- DropEnum
DROP TYPE "StudyLevel";
