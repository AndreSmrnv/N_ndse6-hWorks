#!/usr/bin/env node
const express = require('express');
const cors = require('cors');
const formData = require("express-form-data");
const routes = require('./routes');
const errorMiddleware = require('./middleware/error');
const appConfig = require('./config');

const app = express();
//app.use(formData.parse());
app.use(cors());
app.use('/', routes);

app.use(errorMiddleware);

app.listen(appConfig.listenPort, () => {
    console.log(`Server is running on port ${appConfig.listenPort}`);
});








