var express = require('express');
var app = express();

// app.METHOD(PATH, HANDLER)
console.log('Hello World')

app.get('/', (req, res) => {
    res.send('Hello Express')
})
































 module.exports = app;
