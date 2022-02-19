import "reflect-metadata"
import dotenv from 'dotenv'
import { app } from './app'
dotenv.config()

const PORT = process.env.PORT || 3000
console.log('==> ', PORT)
app.listen(PORT, () => {
    console.log(`running server http://localhost:${PORT}`)
})
