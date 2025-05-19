-- CreateTable
CREATE TABLE "arch_games"."team" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arch_games"."activity" (
    "id" TEXT NOT NULL,
    "participant" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "team_id" INTEGER,
    "participant_id" TEXT,
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

-- CreateTable
CREATE TABLE "arch_games"."participant" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "team_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arch_games"."ScoreChangeHistory" (
    "id" TEXT NOT NULL,
    "activity_id" TEXT NOT NULL,
    "old_base_score" DOUBLE PRECISION NOT NULL,
    "old_multiplier" DOUBLE PRECISION NOT NULL,
    "new_base_score" DOUBLE PRECISION NOT NULL,
    "new_multiplier" DOUBLE PRECISION NOT NULL,
    "change_reason" TEXT NOT NULL,
    "changed_at" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScoreChangeHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "team_name_key" ON "arch_games"."team"("name");

-- CreateIndex
CREATE INDEX "activity_participant_idx" ON "arch_games"."activity"("participant");

-- CreateIndex
CREATE INDEX "activity_team_idx" ON "arch_games"."activity"("team");

-- CreateIndex
CREATE INDEX "activity_category_idx" ON "arch_games"."activity"("category");

-- CreateIndex
CREATE INDEX "activity_key_process_idx" ON "arch_games"."activity"("key_process");

-- CreateIndex
CREATE INDEX "activity_team_id_idx" ON "arch_games"."activity"("team_id");

-- CreateIndex
CREATE INDEX "activity_participant_id_idx" ON "arch_games"."activity"("participant_id");

-- CreateIndex
CREATE UNIQUE INDEX "image_hash_key" ON "arch_games"."image"("hash");

-- CreateIndex
CREATE INDEX "image_hash_idx" ON "arch_games"."image"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "participant_email_key" ON "arch_games"."participant"("email");

-- CreateIndex
CREATE INDEX "participant_team_id_idx" ON "arch_games"."participant"("team_id");

-- CreateIndex
CREATE INDEX "ScoreChangeHistory_activity_id_idx" ON "arch_games"."ScoreChangeHistory"("activity_id");

-- AddForeignKey
ALTER TABLE "arch_games"."activity" ADD CONSTRAINT "activity_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "arch_games"."team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arch_games"."activity" ADD CONSTRAINT "activity_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "arch_games"."participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arch_games"."participant" ADD CONSTRAINT "participant_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "arch_games"."team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arch_games"."ScoreChangeHistory" ADD CONSTRAINT "ScoreChangeHistory_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "arch_games"."activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
