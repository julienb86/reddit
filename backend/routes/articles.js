const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const articlesCtrl = require('../controllers/articles');
const multer = require('../middleware/multer-config');

/* add auth below */
router.get('/',auth, articlesCtrl.getAllArticles);
router.post('/',auth, multer, articlesCtrl.createArticles);
router.get('/:id',auth, articlesCtrl.getOneArticle);
router.put('/:id',auth, articlesCtrl.modifyReadPost);

module.exports = router;