import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1645330320380 implements MigrationInterface {
    name = 'initial1645330320380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "food" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nutritionalInfo" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_26d12de4b6576ff08d30c281837" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "author" character varying NOT NULL, "description" character varying NOT NULL, "amountPeople" integer NOT NULL, "time" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipes_foods_food" ("recipesId" uuid NOT NULL, "foodId" uuid NOT NULL, CONSTRAINT "PK_3e5ecbc0bcc435ee057d0141e1d" PRIMARY KEY ("recipesId", "foodId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0b750b13e3a4b11ed6e8c06d22" ON "recipes_foods_food" ("recipesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f4810a291126712784ea59503e" ON "recipes_foods_food" ("foodId") `);
        await queryRunner.query(`ALTER TABLE "recipes_foods_food" ADD CONSTRAINT "FK_0b750b13e3a4b11ed6e8c06d222" FOREIGN KEY ("recipesId") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "recipes_foods_food" ADD CONSTRAINT "FK_f4810a291126712784ea59503e8" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes_foods_food" DROP CONSTRAINT "FK_f4810a291126712784ea59503e8"`);
        await queryRunner.query(`ALTER TABLE "recipes_foods_food" DROP CONSTRAINT "FK_0b750b13e3a4b11ed6e8c06d222"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f4810a291126712784ea59503e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0b750b13e3a4b11ed6e8c06d22"`);
        await queryRunner.query(`DROP TABLE "recipes_foods_food"`);
        await queryRunner.query(`DROP TABLE "recipes"`);
        await queryRunner.query(`DROP TABLE "food"`);
    }

}
