const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TractionSchema = Schema({
    name:{
        type:String,
    },
})

module.exports=mongoose.model('Tractions',TractionSchema)
