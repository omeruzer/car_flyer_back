const FromWho = require('../models/FromWho')


const all = (req, res) => {
    FromWho.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {
    FromWho.findById(req.params.id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => { 

    const fromWho = new FromWho(req.body)

    fromWho.save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
            
        });

}
const edit = (req, res) => { 
    FromWho.findByIdAndUpdate(req.params.id,req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
}
const remove = (req, res) => { 
    FromWho.findByIdAndRemove(req.params.id)
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