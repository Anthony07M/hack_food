import { conectionDB } from "./database";
import express from 'express'
import { initializerRouters } from "./routes";


conectionDB()

const app = express()
app.use(express.json())
initializerRouters(app)

export { app }