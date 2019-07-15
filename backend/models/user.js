const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name : {type: String, required: true},
    email : {type:String, required: true, unique: true},
    department : {type : String, required: true},
    birthday : {type: Date},
    password : {type: String, required: true},
    read: {type: [String], required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

