const Car = require('../models/Car')
const Category = require('../models/Category')


const all = (req, res) => {
    Car.find()
        .populate('brand', 'name')
        .populate('model', 'name')
        .populate('category', 'name')
        .populate('gear', 'name')
        .populate('fuel', 'name')
        .populate('case', 'name')
        .populate('traction', 'name')
        .populate('fromWho', 'name')
        .populate('year', 'year')
        .populate('city', 'city')
        .populate('district', 'district')
        .populate('street', 'street')
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}
const detail = (req, res) => {
    Car.findById(req.params.id)
        .populate('brand', 'name')
        .populate('model', 'name')
        .populate('category', 'name')
        .populate('gear', 'name')
        .populate('fuel', 'name')
        .populate('case', 'name')
        .populate('traction', 'name')
        .populate('fromWho', 'name')
        .populate('year', 'year')
        .populate('city', 'city')
        .populate('district', 'district')
        .populate('street', 'street')
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => {

    const car = new Car(req.body)

    car.save()
        .then(async (result) => {
            await Category.findByIdAndUpdate(result.category, { $push: { cars: result.id } })
            await Brand.findByIdAndUpdate(result.brand, { $push: { cars: result.id } })
            await Model.findByIdAndUpdate(result.model, { $push: { cars: result.id } })
            await res.json({ status: true, message: 'Created' })
        }).catch((err) => {
            res.json(err)

        });

}
const edit = (req, res) => {
    Car.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}
const remove = (req, res) => {
    Car.findByIdAndRemove(req.params.id)
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