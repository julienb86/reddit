const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    department : {type: String, required: true},
    birthday : {type: String, required: true}
});

module.exports = mongoose.model('Profile', profileSchema);