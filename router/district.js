const express = require('express')
const router = express.Router()

const DistrictController = require('../controller/DistrictController')

// all
router.get('/',DistrictController.all)
// detail
router.get('/:id',DistrictController.detail)
// add
router.post('/add',DistrictController.add)
// edit
router.put('/:id',DistrictController.edit)
// remove
router.delete('/:id',DistrictController.remove)

module.exports = router