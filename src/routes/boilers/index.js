const express = require ('express')
const controller = require ('../../controllers/boilers/controller')

const router = express.Router();

router.route('/showall_boilers').get(controller.indexBoilers);

module.exports = router;