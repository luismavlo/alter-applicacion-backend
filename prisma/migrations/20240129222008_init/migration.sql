-- CreateEnum
CREATE TYPE "StudyLevel" AS ENUM ('PREPARATORIA_VACHILLERATO', 'LICENCIATURA_EN_CURSO', 'LICENCIATURA_TERMINADA', 'MAESTRIA_EN_CURSO', 'MAESTRIA_TERMIANDA', 'DOCTORADO_EN_CURSO', 'DOCTORADO_TERMINADO');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'RESOLVE', 'DELETED');

-- CreateEnum
CREATE TYPE "Social" AS ENUM ('YouTube', 'Instagram', 'Facebook', 'Friend');

-- CreateEnum
CREATE TYPE "Country" AS ENUM ('ARGENTINA', 'BOLIVIA', 'BRASIL', 'CANADA', 'CHILE', 'COLOMBIA', 'COSTA_RICA', 'CUBA', 'DOMINICA', 'ECUADOR', 'EL_SALVADOR', 'GRANADA', 'GUATEMALA', 'GUYANA', 'HONDURAS', 'JAMAICA', 'MEXICO', 'NICARAGUA', 'PANAMA', 'PARAGUAY', 'PERU', 'REPUBLICA_DOMINICANA', 'URUGUAY', 'VENEZUELA');

-- CreateTable
CREATE TABLE "application" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "surname" VARCHAR NOT NULL,
    "country" "Country" NOT NULL,
    "address" VARCHAR NOT NULL,
    "numeration" VARCHAR NOT NULL,
    "postalCode" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,
    "province" VARCHAR NOT NULL,
    "studyLevel" "StudyLevel" NOT NULL,
    "motivation" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "findOutAcademlo" "Social" NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);
