const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/Router')

const app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static('public'));

app.use('/', routes);


app.listen(3000);
