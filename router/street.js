const express = require('express')
const router = express.Router()

const StreetController = require('../controller/StreetController')

// all
router.get('/',StreetController.all)
// detail
router.get('/:id',StreetController.detail)
// add
router.post('/add',StreetController.add)
// edit
router.put('/:id',StreetController.edit)
// remove
router.delete('/:id',StreetController.remove)

module.exports = router