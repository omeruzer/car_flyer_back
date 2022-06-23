const express = require('express')
const router = express.Router()

const ModelController = require('../controller/ModelController')

// all
router.get('/',ModelController.all)
// detail
router.get('/:id',ModelController.detail)
// add
router.post('/add',ModelController.add)
// edit
router.put('/:id',ModelController.edit)
// remove
router.delete('/:id',ModelController.remove)

module.exports = router