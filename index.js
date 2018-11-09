"use strict";

const config = require('config-yml');
const morgan = require('morgan');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

const host = config.server.host
const port = config.server.port

const router = require('./router');

app.engine('.hbs', exphbs({
  extname: '.hbs', 
  defaultLayout: 'main'
}));

app.set('view engine', '.hbs');

app.use(morgan('dev'));
app.use('/public', express.static('public'));
app.use("/",router);

app.locals.copyrightYear = config.corp.copyrightYear;
app.locals.companyName = config.corp.companyName;
app.locals.disclaimerText = config.corp.disclaimerText;

app.listen(port, () => console.log('app is running at ' + host + ':' + port));

