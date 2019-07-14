const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    userId : {type: String, required : true},
    departmentId : {type : String, required : true },
    articleId : {type : String, required : true},
    read : {type : Boolean, default : false}
});

module.exports = mongoose.model('Notifications', notificationSchema);