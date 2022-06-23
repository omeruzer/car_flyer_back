const Category = require('../models/Category')


const all = (req, res) => {
    Category.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {
    Category.findById(req.params.id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => { 

    const category = new Category(req.body)

    category.save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
            
        });

}
const edit = (req, res) => { 
    Category.findByIdAndUpdate(req.params.id,req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
}
const remove = (req, res) => { 
    Category.findByIdAndRemove(req.params.id)
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