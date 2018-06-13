'use strict';

const controllers = require('./controllers');
const correlator = require('express-correlation-id');
const express = require('express');
const app = express();
app.use(correlator());
controllers.init(app);


const port = 3000;
app.listen(port);
console.log(`server listening on port ${port}`);


