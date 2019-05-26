const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema({
/*     userId : {type : String, required:true}, */
    department: {type: String, required: true},
    content: {type: String, required: true},
    imageUrl: {type : String, required: true},
    created : Date

});

module.exports = mongoose.model('Articles', articlesSchema);