const express = require('express')

const users = require('./users/index')
const boilers = require('./boilers/index')
const tech = require('./technicians/index')
const router = express.Router();

router.use('/users', users)
router.use('/boilers', boilers)
router.use('/technicians', tech)

module.exports = router