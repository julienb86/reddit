const express = require("express");
const router = express.Router();
/* const auth = require('../middleware/auth'); */
const departCtrl = require('../controllers/articles');


/* add auth below */
router.get('/', departCtrl.getAllDepartments);


module.exports = router;