const express = require("express");
const router = express.Router();
/* const auth = require('../middleware/auth'); */
const articlesCtrl = require('../controllers/articles');



/* add auth below */
router.get('/', articlesCtrl.getAllArticles);
router.post('/', articlesCtrl.createArticles);


module.exports = router;