import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyName1645331382088 implements MigrationInterface {
    name = 'modifyName1645331382088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes" RENAME COLUMN "name" TO "recipeName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes" RENAME COLUMN "recipeName" TO "name"`);
    }

}
