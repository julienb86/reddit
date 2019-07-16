const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const articlesCtrl = require('../controllers/articles');
const multer = require('../middleware/multer-config');

/* add auth below */
router.get('/',articlesCtrl.getAllArticles);
router.post('/',multer, articlesCtrl.createArticles);
router.get('/:id',articlesCtrl.getOneArticle);
router.put('/:id',articlesCtrl.modifyReadPost);

module.exports = router;