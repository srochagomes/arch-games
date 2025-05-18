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

-- CreateIndex
CREATE UNIQUE INDEX "participant_email_key" ON "arch_games"."participant"("email");

-- CreateIndex
CREATE INDEX "participant_team_id_idx" ON "arch_games"."participant"("team_id");

-- AddForeignKey
ALTER TABLE "arch_games"."participant" ADD CONSTRAINT "participant_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "arch_games"."team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
