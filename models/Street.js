const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StreetSchema = Schema({
    street:{
        type:String,
    },
    district:{type:Schema.Types.ObjectId,ref:'Districts'},
    city:{type:Schema.Types.ObjectId,ref:'Streets'}

})

module.exports=mongoose.model('Streets',StreetSchema)
