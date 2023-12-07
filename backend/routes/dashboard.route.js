const express = require("express")
const { DrModel } = require("../modules/dr.model")
const { verify } = require("../middleware/authorization")
const dashRouter = express.Router()

dashRouter.get("/doctors",verify,async(req,res)=>{
     try{
        const drs = await DrModel.find()
        res.status(200).json(drs)

     }catch(error){
        res.status(400).json(error.message)
    }
})
dashRouter.delete("/doctors/:id", verify, async (req, res) => {
    const { id } = req.params;
    try {
        await DrModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Dr Deleted" });
    } catch (error) {
        res.status(400).json(error.message);
    }
})



module.exports ={
    dashRouter
}