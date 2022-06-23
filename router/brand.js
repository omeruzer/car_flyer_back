const express = require('express')
const router = express.Router()

const BrandController = require('../controller/BrandController')

// all
router.get('/',BrandController.all)
// detail
router.get('/:id',BrandController.detail)
// add
router.post('/add',BrandController.add)
// edit
router.put('/:id',BrandController.edit)
// remove
router.delete('/:id',BrandController.remove)

module.exports = router