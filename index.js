const express = require('express');
const path = require('path');
const morgan = require('morgan');

const config = require('./config/app-config');
const routes = require('./config/routes');

const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

// setup logging
app.use(morgan('short'));

// serve static public files
app.use(express.static(path.resolve(__dirname, 'public')));

// configure parsing of form params
app.use(express.urlencoded( {extended: false} ));

// configure routes
app.use('/', routes);

// start app
const port = process.env.PORT || config.port;
app.listen(port, () => console.log(`App listening at port ${port}`));
