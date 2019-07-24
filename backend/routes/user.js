const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/user');


router.post('/signup', userCtrl.signup);
router.post('/login',userCtrl.login);
router.delete('/user/:id',userCtrl.deleteAccount);
router.post('/user/:id/read',userCtrl.modifyReadPost);
router.get('/user/:id',userCtrl.getOneUser);

module.exports = router;