import { recipeRoute } from "./recipes.routes"
import { Express } from "express"


export const initializerRouters = (app: Express) => {

    app.use('',recipeRoute())

}