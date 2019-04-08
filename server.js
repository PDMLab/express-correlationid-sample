'use strict';

const controllers = require('./controllers');
const correlator = require('express-correlation-id');
const express = require('express');
const app = express();
const Logger = require('./logger');
const logger = new Logger('test');
app.use(correlator());
app.set('logger', logger);
controllers.init(app);


const port = 3000;
app.listen(port);
console.log(`server listening on port ${port}`);


