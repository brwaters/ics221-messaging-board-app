const express = require('express');
const router = express.Router();
// const mainController = require('../controllers/main');

const msgController = require('../controllers/msg.js');

/* GET home page. */
router.get('/', msgController.index);

module.exports = router;