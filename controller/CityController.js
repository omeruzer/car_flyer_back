const City = require('../models/City')


const all = (req, res) => {
    City.find().sort('city')
        .populate('districts', 'district')
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {
    City.findById(req.params.id)
        .populate('districts', 'district')

        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => {

    const city = new City(req.body)

    city.save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)

        });

}
const edit = (req, res) => {
    City.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}
const remove = (req, res) => {
    City.findByIdAndRemove(req.params.id)
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