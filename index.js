const express = require('express');
const path = require('path');
const morgan = require('morgan');

const config = require('./config/app-config');
const routes = require('./config/routes');

const app = express();

// setup logging
app.use(morgan('short'));

// serve static public files
app.use(express.static(path.resolve(__dirname, 'public')));

// configure parsing of form params
app.use(express.urlencoded( {extended: false} ));

app.get('/', (req, res) => res.sendFile(path.resolve(process.cwd(), 'index.html')));

// configure routes
app.use('/', routes);

// start app
const port = process.env.PORT || config.port;
app.listen(port, () => console.log(`App listening at port ${port}`));
