const express = require('express')
const router = express.Router()

const TractionController = require('../controller/TractionController')

// all
router.get('/',TractionController.all)
// detail
router.get('/:id',TractionController.detail)
// add
router.post('/add',TractionController.add)
// edit
router.put('/:id',TractionController.edit)
// remove
router.delete('/:id',TractionController.remove)

module.exports = router