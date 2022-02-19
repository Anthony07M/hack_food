import { EntityRepository, Repository } from "typeorm";
import { Food } from "../entities";

@EntityRepository(Food)
export class FoodRepository extends Repository<Food>{}