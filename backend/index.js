import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import songRoutes from "./routes/song.route.js"
import adminRoutes from "./routes/admin.route.js"
import statsRoutes from "./routes/stat.route.js"
import authRoutes from "./routes/auth.route.js"
import albumsRoutes from "./routes/ablum.route.js"
import { connectDB } from "./lib/connectDB.js"

dotenv.config()

const PORT = 5000 || process.env.PORT

const app = express()


app.all("/",(req,res) => {
    res.send("Backend is Running")
})


app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/songs",songRoutes)
app.use("/api/albums",albumsRoutes)
app.use("/api/stats",statsRoutes)


app.listen(PORT,() => {
    connectDB()
    console.log(`BACKEND STARTED PORT NO ${PORT}`)
})