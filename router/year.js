const express = require('express')
const router = express.Router()

const YearController = require('../controller/YearController')

// all
router.get('/',YearController.all)
// detail
router.get('/:id',YearController.detail)
// add
router.post('/add',YearController.add)
// edit
router.put('/:id',YearController.edit)
// remove
router.delete('/:id',YearController.remove)

module.exports = router