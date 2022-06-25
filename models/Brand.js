const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BrandSchema = Schema({
    name:{
        type:String,
    },
    icon:{
        type:String,
    },
    cars:[{type:Schema.Types.ObjectId,ref:'Cars'}],
    models:[{type:Schema.Types.ObjectId,ref:'Models'}],
    category:{type:Schema.Types.ObjectId,ref:'Categories'}
})

module.exports=mongoose.model('Brands',BrandSchema)
