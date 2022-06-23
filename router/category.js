const express = require('express')
const router = express.Router()

const CategoryController = require('../controller/CategoryController')

// all
router.get('/',CategoryController.all)
// detail
router.get('/:id',CategoryController.detail)
// add
router.post('/add',CategoryController.add)
// edit
router.put('/:id',CategoryController.edit)
// remove
router.delete('/:id',CategoryController.remove)

module.exports = router