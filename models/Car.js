const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarSchema = Schema({
    images:[{type:String}],
    name:{
        type:String,
    },
    km:{
        type:Number
    },
    engine_capacity:{
        type:Number
    },
    engine_power:{
        type:Number
    },
    fuel_cons:{
        type:Number
    },
    fuel_tank:{
        type:Number
    },
    price:{
        type:Number
    },
    brand:{type:Schema.Types.ObjectId,ref:'Brands'},
    model:{type:Schema.Types.ObjectId,ref:'Models'},
    category:{type:Schema.Types.ObjectId,ref:'Categories'},
    gear:{type:Schema.Types.ObjectId,ref:'Gears'},
    fuel:{type:Schema.Types.ObjectId,ref:'Fuels'},
    case:{type:Schema.Types.ObjectId,ref:'Cases'},
    traction:{type:Schema.Types.ObjectId,ref:'Tractions'},
    fromWho:{type:Schema.Types.ObjectId,ref:'FromWho'},
    year:{type:Schema.Types.ObjectId,ref:'Years'},
    city:{type:Schema.Types.ObjectId,ref:'Cities'},
    district:{type:Schema.Types.ObjectId,ref:'Districts'},
    street:{type:Schema.Types.ObjectId,ref:'Streets'},
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports=mongoose.model('Cars',CarSchema)
