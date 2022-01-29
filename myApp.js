var express = require('express');
var app = express();

// app.METHOD(PATH, HANDLER)
console.log('Hello World')

app.get('/', (req, res) => {
    // res.send('Hello Express')
    // The directory name of the current module.(__dirname)
    res.sendFile(`${__dirname}/views/index.html`)
})
































 module.exports = app;
