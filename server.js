const express = require("express")
const app = express()
const PORT = 8000
const connectDB = require("./db")

// Connect to DB
connectDB()
const server = app.listen(PORT, () => 
    console.log(`Server Connected to port ${PORT}`)
)

//Handling errors
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})