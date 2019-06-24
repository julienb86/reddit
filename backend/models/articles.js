const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema({
    userId : {type : String, required:true},
    name : {type: String, required: false},
    department: {type: String, required: true},
    content: {type: String, required: false},
    imageUrl: {type : String, required: false},
    created : {type : Date, required: true}

});

module.exports = mongoose.model('Articles', articlesSchema);