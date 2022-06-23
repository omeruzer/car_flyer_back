const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = Schema({
    city:{
        type:String,
    },
    districts:[{type:Schema.Types.ObjectId,ref:'Districts'}],
    streets:[{type:Schema.Types.ObjectId,ref:'Streets'}]
})

module.exports=mongoose.model('Cities',CitySchema)
