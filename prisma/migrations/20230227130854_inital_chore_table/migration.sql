-- CreateTable
CREATE TABLE "chore" (
    "id" TEXT NOT NULL,
    "chore_title" VARCHAR(50) NOT NULL,
    "chore_description" VARCHAR(300) NOT NULL,
    "due_date" DATE NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "chore_created_by_idx" ON "chore"("created_by");

-- AddForeignKey
ALTER TABLE "chore" ADD CONSTRAINT "chore_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
