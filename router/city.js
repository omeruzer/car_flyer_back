const express = require('express')
const router = express.Router()

const CityController = require('../controller/CityController')

// all
router.get('/',CityController.all)
// detail
router.get('/:id',CityController.detail)
// add
router.post('/add',CityController.add)
// edit
router.put('/:id',CityController.edit)
// remove
router.delete('/:id',CityController.remove)

module.exports = router