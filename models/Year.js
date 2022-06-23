const mongoose = require('mongoose')
const Schema = mongoose.Schema

const YearSchema = Schema({
    year:{
        type:Number,
    },
})

module.exports=mongoose.model('Years',YearSchema)
