const express = require('express')
const router = express.Router()

const FuelController = require('../controller/FuelController')

// all
router.get('/',FuelController.all)
// detail
router.get('/:id',FuelController.detail)
// add
router.post('/add',FuelController.add)
// edit
router.put('/:id',FuelController.edit)
// remove
router.delete('/:id',FuelController.remove)

module.exports = router