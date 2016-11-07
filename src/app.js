const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));
app.set('view engine', 'ejs');

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(bodyParser.json());

import Express from 'express';
app.use('/public', Express.static(app.get('public')));

if (process.env.NODE_ENV == "production") {
	app.use('/', require("../client/express-prerender.js"));
} else {
	app.use(require("../client/express-dev.js").javascript);
  app.use('/', require("../client/express-dev.js").template);
}

app.use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware);

module.exports = app;
