const express = require('express');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.engine('ejs', ejsMate);
//setting static folder
app.use('/public',express.static('./public'));

app.get('/', (req, res) => {
    // res.send('Haha');
    res.render('client/page/homepage');
});
app.get('/post', (req, res) => {
    res.render('client/page/post');
});
app.get('/contact', (req, res) => {
    res.render('client/contact');
});
app.get('/about', (req, res) => {
    res.render('client/about');
});
// app.get('/views', (req, res) => {

// })

app.listen(3000)