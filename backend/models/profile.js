const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    birthday : {type: Date, required: true}
});

module.exports = mongoose.model('Profile', profileSchema);