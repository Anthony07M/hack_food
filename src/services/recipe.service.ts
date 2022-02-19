import { getCustomRepository } from "typeorm";
import { RecipesRepository } from "../repositories";

export class RecipeService {
    recipeRepository: RecipesRepository

    constructor(){
        this.recipeRepository = getCustomRepository(RecipesRepository)
    }

    async create(data: any){
        const recipe = this.recipeRepository.create(data)
        await this.recipeRepository.save(recipe)
        return recipe
    }

    async list(){
        const recipes = await this.recipeRepository.find()
        return recipes
    }

    async listByType(type: string){
        const recipe = await this.recipeRepository.createQueryBuilder('recipes')
        .leftJoinAndSelect('recipes.foods', 'food')
        .where("recipes.type = :type", {type: type}).getMany()
        
        return recipe
    }

    async listByAuthor(author: string){

        const recipe = await this.recipeRepository.createQueryBuilder('recipes')
        .leftJoinAndSelect('recipes.foods', 'food')
        .where("recipes.author = :author", {author: author}).getMany()
        
        return recipe
    }

}