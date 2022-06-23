const Traction = require('../models/Traction')


const all = (req, res) => {
    Traction.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {
    Traction.findById(req.params.id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => { 

    const traction = new Traction(req.body)

    traction.save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
            
        });

}
const edit = (req, res) => { 
    Traction.findByIdAndUpdate(req.params.id,req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
}
const remove = (req, res) => { 
    Traction.findByIdAndRemove(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}   

module.exports = {
    all,
    detail,
    add,
    edit,
    remove
}