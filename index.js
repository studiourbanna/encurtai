const express = require('express'); // Obviously, we need Express.
const pug = require('pug'); // And we couldn't render Pug without Pug.
require('jstransformer-markdown-it'); // This needs to be installed for Pug to use it.

const app = express();
app.use(express.static('/'));

app.get('/', function (req, res) {
    res.send(pug.renderFile('/index.pug')); 
});

app.get('/home', function (req, res) {
    res.send(pug.renderFile('/index.pug')); 
});

// Add more URLs and Pug files here...
app.get('/404', function (req, res) {
    res.send(pug.renderFile('/error.pug')); 
});

app.get('/error', function (req, res) {
    res.send(pug.renderFile('/error.pug')); 
});

app.get('/about', function (req, res) {
    res.send(pug.renderFile('/about.pug')); 
});

app.get('/terms', function (req, res) {
    res.send(pug.renderFile('/terms.pug')); 
});

app.listen(8080, function() {
    console.log('Servidor funcionando!');
});