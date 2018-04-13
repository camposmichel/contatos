var mongoose = require('mongoose');

const dburl = 'mongodb://localhost/poccontatos';

mongoose.connect(dburl);

require('../models/contact.model')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function () {
    console.log('Conectado a ' + dburl)
});