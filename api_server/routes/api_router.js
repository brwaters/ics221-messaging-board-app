const express = require('express');
const router = express.Router();
const passport = require('passport');

const msgAPIController = require('../controllers/msg-api');
const userAPIController = require('../controllers/user-api');


// Message Endpoint
router.route('/msgs')
.get(msgAPIController.getAllMessagesOrderedByLastPosted)
.post(passport.authenticate('basic', { session: false }), msgAPIController.addNewMessage)
.delete(passport.authenticate('basic', { session: false }), msgAPIController.deleteAll);

router.route('/msgs/:messageid')
.put(passport.authenticate('basic', { session: false }), msgAPIController.updateMessage)
.delete(passport.authenticate('basic', { session: false }), msgAPIController.deleteMessage);

// Register/Login Endpoint
router.post('/users', userAPIController.registerNewUser);
router.get('/users/login', passport.authenticate('basic', { session: false }), userAPIController.loginUser);

module.exports = router;