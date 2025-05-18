-- CreateTable
CREATE TABLE "arch_games"."activity" (
    "id" TEXT NOT NULL,
    "participant" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "base_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "multiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "calculated_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "key_process" TEXT NOT NULL,
    "activity" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arch_games"."image" (
    "id" SERIAL NOT NULL,
    "key_process" TEXT NOT NULL,
    "hash" VARCHAR(64) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "team" VARCHAR(100) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "activity_date" TIMESTAMP(3) NOT NULL,
    "upload_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filename" TEXT NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "activity_participant_idx" ON "arch_games"."activity"("participant");

-- CreateIndex
CREATE INDEX "activity_team_idx" ON "arch_games"."activity"("team");

-- CreateIndex
CREATE INDEX "activity_category_idx" ON "arch_games"."activity"("category");

-- CreateIndex
CREATE INDEX "activity_key_process_idx" ON "arch_games"."activity"("key_process");

-- CreateIndex
CREATE UNIQUE INDEX "image_hash_key" ON "arch_games"."image"("hash");

-- CreateIndex
CREATE INDEX "image_hash_idx" ON "arch_games"."image"("hash");
