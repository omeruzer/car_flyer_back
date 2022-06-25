const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = Schema({
    name:{
        type:String,
    },
    icon:{
        type:String,
    },
    brands:[{type:Schema.Types.ObjectId,ref:'Brands'}],
    models:[{type:Schema.Types.ObjectId,ref:'Models'}],
    cars:[{type:Schema.Types.ObjectId,ref:'Cars'}],
})

module.exports=mongoose.model('Categories',CategorySchema)
