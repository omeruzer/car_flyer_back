const express = require('express')
const router = express.Router()

const GearController = require('../controller/GearController')

// all
router.get('/',GearController.all)
// detail
router.get('/:id',GearController.detail)
// add
router.post('/add',GearController.add)
// edit
router.put('/:id',GearController.edit)
// remove
router.delete('/:id',GearController.remove)

module.exports = router