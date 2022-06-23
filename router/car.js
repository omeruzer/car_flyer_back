const express = require('express')
const router = express.Router()

const CarController = require('../controller/CarController')

// all
router.get('/',CarController.all)
// detail
router.get('/:id',CarController.detail)
// add
router.post('/add',CarController.add)
// edit
router.put('/:id',CarController.edit)
// remove
router.delete('/:id',CarController.remove)

module.exports = router