const Model = require('../models/Model')
const Brand = require('../models/Brand')
const Category = require('../models/Category')


const all = (req, res) => {
    Model.find()
    .populate('brand','name')
    .populate('category','name')
    .populate('cars')
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => {

    const model = new Model(req.body)

    model.save()
        .then(async (result) => {
            await Category.findByIdAndUpdate(result.category, { $push: { models: result.id } })
            await Brand.findByIdAndUpdate(result.brand, { $push: { models: result.id } })
            await res.json(result) 

                
        }).catch((err) => {
            res.json(err)

        });

}
const edit = (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}
const remove = (req, res) => {
    Model.findByIdAndRemove(req.params.id)
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