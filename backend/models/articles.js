const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema({
    department: {type: String, required: true},
    picture: {type: String, required:true},
    content: {type: String, required: true},
    imageUrl: {type : String, required: true},
    created : Date

});

module.exports = mongoose.model('Articles', articlesSchema);