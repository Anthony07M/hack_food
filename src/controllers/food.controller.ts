import { Request, Response } from "express";
import { FoodService } from "../services";

export class FoodController {
    static async create(req: Request, res: Response){
        const foodService = new FoodService()
        const food = await foodService.create(req.body)
        return res.json(food)
    }
    
    static async list(req: Request, res: Response){
        const foodService = new FoodService()
        const foods = await foodService.list()
        return res.json(foods)
    }
}