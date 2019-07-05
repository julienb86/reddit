const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    name : {type : String},
    posts : {
        userId : {type : String, required:true},
        name : {type: String, required: false},
        department: {type: String, required: true},
        content: {type: String, required: false},
        imageUrl: {type : String, required: false},
        created : {type : Date, required: true}
    }
});

module.exports = mongoose.model('Department', departmentSchema);