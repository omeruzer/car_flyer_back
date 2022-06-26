const Street = require('../models/Street')
const Category = require('../models/Category');
const District = require('../models/District');


const all = (req, res) => {
    Street.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}
const detail = (req, res) => {
    Street.findById(req.params.id)

        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => {

    const street = new Street(req.body)

    street.save()
        .then(async (result) => {
            await District.findByIdAndUpdate(result.district, { $push: { streets: result.id } })
            await res.json(result)
        }).catch((err) => {
            res.json(err)

        });

}
const edit = (req, res) => {
    Street.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}
const remove = (req, res) => {
    Street.findByIdAndRemove(req.params.id)
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