const express = require ('express')
const controller = require ('../../controllers/boilers/controller')
const router = express.Router();
const jsonParser = express.json()


router.get('/showall_boilers',jsonParser,controller.indexBoilers);
router.get('/showall_typeboilers',jsonParser,controller.indexBoilerType);
router.post('/addBoiler',jsonParser, controller.addBoiler);
router.post('/addBoilerType',jsonParser, controller.addBoilerType);

router.get('/:_id',jsonParser,controller.getBoilerById);
router.delete('/:_id',jsonParser,controller.deleteBoiler);
router.put('/:_id',jsonParser,controller.editBoiler);

module.exports = router;