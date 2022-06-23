const Year = require('../models/Year')


const all = (req, res) => {
    Year.find().sort('year')
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {
    Year.findById(req.params.id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => { 

    const years = new Year(req.body)

    years.save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
            
        });

}
const edit = (req, res) => { 
    Year.findByIdAndUpdate(req.params.id,req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
}
const remove = (req, res) => { 
    Year.findByIdAndRemove(req.params.id)
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