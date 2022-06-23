const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FuelSchema = Schema({
    name:{
        type:String,
    },
})

module.exports=mongoose.model('Fuels',FuelSchema)
