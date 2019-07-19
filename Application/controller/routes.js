const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const router = express.Router()
var path = require('path')

router.use(bodyParser.urlencoded({
    extended: false
}))
router.use(bodyParser.json())

module.exports = router