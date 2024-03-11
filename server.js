const express = require("express")
const app = express()
const PORT = 8000
const connectDB = require("./db")

app.use(express.json())
app.use("/api/auth", require("./routes/User.js"))

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