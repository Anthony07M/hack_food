import { Router } from "express"
import { FoodController, RecipeController } from '../controllers'
//import { validation } from "../middlewares"
//import { recipeModel } from "../models"

const router = Router()

export const recipeRoute  = () => {
    router.post("/recipes", RecipeController.create)
    router.get("/recipes", RecipeController.list)
    router.get("/recipes/type/:type", RecipeController.listByTypes)
    router.get("/recipes/author/:author", RecipeController.listByAuthor)
    //router.post("/foods", FoodController.create)
    //router.get("/foods",FoodController.list )
    return router
}