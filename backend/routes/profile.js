const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const profileCtrl = require('../controllers/profile');



/* add auth below */
router.post('/profile', profileCtrl.confirmProfile);


module.exports = router;