const express = require('express');
const postCtrl = require('../controllers/posts');

const router = express.Router();


router.get('/', postCtrl.getAllPosts);

module.exports = router;
