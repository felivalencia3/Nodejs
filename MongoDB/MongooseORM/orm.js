const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/AppDB");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    const person
});