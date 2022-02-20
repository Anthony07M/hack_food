import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm'
import { Food } from './food'

@Entity('recipes')
export class Recipes{

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    author!: string
    
    @Column()
    recipeName!:string

    @Column()
    description!: string

    @Column('integer')
    amountPeople!: number

    @Column()
    time!: string

    @Column()
    type!: string

    @ManyToMany(() => Food, { eager: true })
    @JoinTable()
    foods!: Food[]


}