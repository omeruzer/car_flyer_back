const express = require('express')
const router = express.Router()

const fromWhoController = require('../controller/fromWhoController')

// all
router.get('/',fromWhoController.all)
// detail
router.get('/:id',fromWhoController.detail)
// add
router.post('/add',fromWhoController.add)
// edit
router.put('/:id',fromWhoController.edit)
// remove
router.delete('/:id',fromWhoController.remove)

module.exports = router