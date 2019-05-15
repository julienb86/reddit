const express = require('express');
const postCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');

const router = express.Router();



router.get('/', auth, postCtrl.getAllPosts);

module.exports = router;
