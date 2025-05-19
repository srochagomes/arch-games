-- AlterTable
ALTER TABLE "arch_games"."activity" ADD COLUMN     "participant_id" TEXT,
ADD COLUMN     "team_id" INTEGER;

-- CreateIndex
CREATE INDEX "activity_team_id_idx" ON "arch_games"."activity"("team_id");

-- CreateIndex
CREATE INDEX "activity_participant_id_idx" ON "arch_games"."activity"("participant_id");

-- AddForeignKey
ALTER TABLE "arch_games"."activity" ADD CONSTRAINT "activity_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "arch_games"."team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arch_games"."activity" ADD CONSTRAINT "activity_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "arch_games"."participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
