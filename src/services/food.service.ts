import { getCustomRepository } from "typeorm";
import { FoodRepository } from "../repositories";


export class FoodService {
    foodRepository: FoodRepository

    constructor(){
        this.foodRepository = getCustomRepository(FoodRepository)
    }

    async create(data: any) { // arrumar o tipo
        const food = this.foodRepository.create(data)
        await this.foodRepository.save(food)
        return food
    }

    async list(){
        const foods = await this.foodRepository.find()
        return foods
    }
}