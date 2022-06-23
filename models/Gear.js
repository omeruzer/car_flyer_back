const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GearSchema = Schema({
    name:{
        type:String,
    },
})

module.exports=mongoose.model('Gears',GearSchema)
