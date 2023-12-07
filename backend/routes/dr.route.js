const express = require("express")
const { DrModel } = require("../modules/dr.model")
const { verify } = require("../middleware/authorization")
const drRouter = express.Router()

drRouter.post("/appointment",verify, async(req,res)=>{
    const {name,imageUrl,specialization,experience,locationIp,date,slots,fee,user} = req.body
    try{
        const newDr = new DrModel({name,imageUrl,specialization,experience,locationIp,date,slots,fee,user})
        await newDr.save()
        res.status(200).json({message:"Onboard Successful"})

    }catch(error){
        res.status(400).json(error.message)
    }
})

module.exports ={
    drRouter
}