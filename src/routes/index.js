const express = require('express')

const users = require('./users/index')
const calderas = require('./calderas/index')
const tech = require('./technicians/index')
const router = express.Router();

router.use('/users', users)
router.use('/calderas', calderas)
router.use('/technicians', tech)

module.exports = router