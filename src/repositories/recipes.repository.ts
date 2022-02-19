import { EntityRepository, Repository } from "typeorm";
import { Recipes } from "../entities";

@EntityRepository(Recipes)
export class RecipesRepository extends Repository<Recipes>{}