
const City = require('../models/City')
const District = require('../models/District')

const all = (req, res) => {
    District.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {
    District.findById(req.params.id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)

        });
}
const add = (req, res) => { 

    const district = new District(req.body)

    district.save()
        .then(async (result) => {
            await City.findByIdAndUpdate(result.city, { $push: { districts: result.id } })
        }).catch((err) => {
            res.json(err)
            
        });

}
const edit = (req, res) => { 
    District.findByIdAndUpdate(req.params.id,req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
}
const remove = (req, res) => { 
    District.findByIdAndRemove(req.params.id)
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