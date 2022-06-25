const Brand = require('../models/Brand')
const Category = require('../models/Category')


const all = (req, res) => {
    Brand.find()
    // .select('name models category')
    .populate('models','name')
    .populate('category','name')
    .populate('cars')
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}
const detail = (req, res) => {
    Brand.findById(req.params.id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => {

    const brand = new Brand(req.body)

    brand.save()
        .then((result) => {
            Category.findByIdAndUpdate(result.category, { $push: { brands: result.id } })
        }).catch((err) => {
            res.json(err)

        });

}
const edit = (req, res) => {
    Brand.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}
const remove = (req, res) => {
    Brand.findByIdAndRemove(req.params.id)
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