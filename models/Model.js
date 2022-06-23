const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModelSchema = Schema({
    name:{
        type:String,
    },
    cars:[{type:Schema.Types.ObjectId,ref:'Cars'}],
    category:{type:Schema.Types.ObjectId,ref:'Categories'},
    brand:{type:Schema.Types.ObjectId,ref:'Brands'},
})

module.exports=mongoose.model('Models',ModelSchema)
