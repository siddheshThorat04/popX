import express   from  "express"
import  cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import connectDb from "./db/connectDb.js"
import  authRoutes from "./routes/authRoutes.js"
const app = express()

const frontend_url = process.env.MODE === "DEVELOPMENT" ? "http://localhost:5173" : process.env.FRONTEND_URL

app.use(express.json())
app.use(cors({
    origin:  [frontend_url],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true
}))



app.use("/api/auth",authRoutes)

const port = process.env.PORT 

app.listen(port, () => {
    connectDb()
    console.log(`Server run on port http://localhost:${port}`)
    console.log(frontend_url)
})
