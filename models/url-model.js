const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UrlModel = new Schema({
    fromUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    }
});


module.exports = mongoose.model('links', UrlModel);