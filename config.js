require('dotenv').config();


const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

module.exports.PROTOCOL = process.env.PROTOCOL || 'http';
module.exports.DOMAIN = process.env.DOMAIN || 'localhost';
module.exports.PORT = PORT || 5000;
module.exports.DB_URI = DB_URI;