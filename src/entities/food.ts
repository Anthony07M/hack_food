import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('food')
export class Food{

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    nutritionalInfo!:string;

    @Column()
    type!:string

}