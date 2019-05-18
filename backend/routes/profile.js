const express = require("express");
const router = express.Router();

const profileCtrl = require('../controllers/profile');

router.post('/profile', profileCtrl.confirmProfile);


module.exports = router;