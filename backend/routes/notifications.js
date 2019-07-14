const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const notificationCtrl = require('../controllers/notifications');


/* add auth below */

router.post('/notification', notificationCtrl.createNotifications);
router.get('/notification', notificationCtrl.getNotifications);
router.put('/notification/:id', notificationCtrl.modifyNotification);

module.exports = router;