const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FromWhoSchema = Schema({
    name:{
        type:String,
    },
})

module.exports=mongoose.model('FromWho',FromWhoSchema)
