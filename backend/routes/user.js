const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/user');

/* add auth below */

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/user/:id', userCtrl.deleteAccount);

module.exports = router;