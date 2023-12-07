const mongoose = require("mongoose")

const drSchema = mongoose.Schema({
    name:{type:String,required:true},
    imageUrl:{type:String,required:true},
    specialization:{type:String,required:true},
    experience:{type:String,required:true},
    locationIp:{type:String,required:true},
    date:{type:String,required:true},
    slots:{type:Number,required:true},
    fee:{type:Number,required:true},
    user:{type:String,required:true}
},{
    versionKey:false
})

const DrModel = mongoose.model("dr",drSchema)

module.exports ={
    DrModel
}