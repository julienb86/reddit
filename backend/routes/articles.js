const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const articlesCtrl = require('../controllers/articles');
const multer = require('../middleware/multer-config');


/* add auth below */
router.get('/',articlesCtrl.getAllArticles);
router.post('/', multer, auth, articlesCtrl.createArticles);
router.get('/:id', articlesCtrl.getOneArticle);

module.exports = router;