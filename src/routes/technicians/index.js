const express = require ('express')
const router = express.Router();
const { getAllTech, getTechById, postTech, editTech, deleteTech } = require('../../controllers/technicians/controller')
const jsonParser = express.json()

router.get('/', getAllTech)
router.post('/', jsonParser, postTech)
router.put('/:_id', jsonParser, editTech)
router.get('/:_id', jsonParser, getTechById)
router.delete('/:_id', jsonParser, deleteTech)


module.exports = router;