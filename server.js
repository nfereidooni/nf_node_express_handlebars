const express = require ('express')
const exphbs = require('express-handlebars')
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3306;

var app = express();

app.use( express.static('public') )

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function () {
    console.log("Serving burgers on PORT " + PORT);
    
});