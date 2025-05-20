-- CreateTable
CREATE TABLE "arch_games"."RankingTeam" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL,
    "scoreTotal" DOUBLE PRECISION NOT NULL,
    "rankingPosition" INTEGER NOT NULL,
    "rankingVariation" INTEGER,
    "scoreDiff" DOUBLE PRECISION,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RankingTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arch_games"."RankingParticipant" (
    "id" SERIAL NOT NULL,
    "participantId" TEXT NOT NULL,
    "participantName" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,
    "scoreTotal" DOUBLE PRECISION NOT NULL,
    "rankingPosition" INTEGER NOT NULL,
    "rankingVariation" INTEGER,
    "scoreDiff" DOUBLE PRECISION,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RankingParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arch_games"."TeamScoreHistory" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeamScoreHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arch_games"."ParticipantScoreHistory" (
    "id" SERIAL NOT NULL,
    "participantId" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ParticipantScoreHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arch_games"."TeamScoreDistribution" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "scoreTotal" DOUBLE PRECISION NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TeamScoreDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arch_games"."CategoryDistribution" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "totalScore" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CategoryDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RankingTeam_teamId_idx" ON "arch_games"."RankingTeam"("teamId");

-- CreateIndex
CREATE INDEX "RankingTeam_generatedAt_idx" ON "arch_games"."RankingTeam"("generatedAt");

-- CreateIndex
CREATE INDEX "RankingParticipant_participantId_idx" ON "arch_games"."RankingParticipant"("participantId");

-- CreateIndex
CREATE INDEX "RankingParticipant_teamId_idx" ON "arch_games"."RankingParticipant"("teamId");

-- CreateIndex
CREATE INDEX "RankingParticipant_generatedAt_idx" ON "arch_games"."RankingParticipant"("generatedAt");

-- CreateIndex
CREATE INDEX "TeamScoreHistory_teamId_idx" ON "arch_games"."TeamScoreHistory"("teamId");

-- CreateIndex
CREATE INDEX "TeamScoreHistory_date_idx" ON "arch_games"."TeamScoreHistory"("date");

-- CreateIndex
CREATE INDEX "ParticipantScoreHistory_participantId_idx" ON "arch_games"."ParticipantScoreHistory"("participantId");

-- CreateIndex
CREATE INDEX "ParticipantScoreHistory_date_idx" ON "arch_games"."ParticipantScoreHistory"("date");

-- CreateIndex
CREATE INDEX "TeamScoreDistribution_teamId_idx" ON "arch_games"."TeamScoreDistribution"("teamId");

-- CreateIndex
CREATE INDEX "CategoryDistribution_teamId_idx" ON "arch_games"."CategoryDistribution"("teamId");

-- CreateIndex
CREATE INDEX "CategoryDistribution_category_idx" ON "arch_games"."CategoryDistribution"("category");

-- AddForeignKey
ALTER TABLE "arch_games"."RankingTeam" ADD CONSTRAINT "RankingTeam_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "arch_games"."team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arch_games"."RankingParticipant" ADD CONSTRAINT "RankingParticipant_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "arch_games"."team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arch_games"."TeamScoreHistory" ADD CONSTRAINT "TeamScoreHistory_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "arch_games"."team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arch_games"."TeamScoreDistribution" ADD CONSTRAINT "TeamScoreDistribution_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "arch_games"."team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arch_games"."CategoryDistribution" ADD CONSTRAINT "CategoryDistribution_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "arch_games"."team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
