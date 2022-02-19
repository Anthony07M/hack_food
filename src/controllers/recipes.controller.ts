import { Request, Response } from "express";
import { FoodService, RecipeService } from "../services";

export class RecipeController {

    static async create(req: Request, res: Response){
        const recipeService = new RecipeService()
        const foodService = new FoodService()

        const { author, type, foods } = req.body
        
        const food = await foodService.create(foods)

        const recipe = await recipeService.create({
            author,
            type,
            foods: [
                ...food
            ]
        })

        return res.status(201).json(recipe)
    }
    
    static async list(req: Request, res: Response){
        const recipeService = new RecipeService()
        const recipes = await recipeService.list()
        return res.json([])
    }
    
    static async listByTypes(req: Request, res: Response){
        const recipeService = new RecipeService()

        const { type } = req.params
        const recipes = await recipeService.listByType(type)

        return res.json(recipes)
    }

    static async listByAuthor(req: Request, res: Response){
        const recipeService = new RecipeService()

        const { author } = req.params
        const authorP = author.split('%').join(' ')
        const recipes = await recipeService.listByAuthor(authorP)


        return res.json(recipes)
    }
}