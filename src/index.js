const express = require("express")
const authRoutes = require("./routes/authRoutes")
const dotenv = require("dotenv").config()
const app = express()

const connnectDb = require("./config/dbConnect")
connnectDb()

//Middlewares
app.use(express.json())

//Routes
app.use("/api/auth", authRoutes)

//Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})