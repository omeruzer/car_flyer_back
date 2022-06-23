const express = require('express')
const router = express.Router()

const CaseController = require('../controller/CaseController')

// all
router.get('/',CaseController.all)
// detail
router.get('/:id',CaseController.detail)
// add
router.post('/add',CaseController.add)
// edit
router.put('/:id',CaseController.edit)
// remove
router.delete('/:id',CaseController.remove)

module.exports = router