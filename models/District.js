const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DistrictSchema = Schema({
    district:{
        type:String,
    },
    city:{type:Schema.Types.ObjectId,ref:'Cities'},
    streets:[{type:Schema.Types.ObjectId,ref:'Streets'}]
})

module.exports=mongoose.model('Districts',DistrictSchema)
