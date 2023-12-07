const express = require("express")
const cors = require("cors")
const { connection } = require("./backend/db")
const { userRouter } = require("./backend/routes/user.route")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).json("Welcome to Hospital App")
})
app.use("/users",userRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`Connected to DB Running on port ${process.env.port}`)

    }catch(error){
        console.log(error)
    }
})