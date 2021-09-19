#!/usr/bin/env node
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formData = require("express-form-data");
const routes = require('./routes');
const errorMiddleware = require('./middleware/error');
const appConfig = require('./config');

const app = express();
//app.use(formData.parse());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(cors());
app.set("view engine", "ejs");

app.use('/', routes);

app.use(errorMiddleware);

const PORT = appConfig.listenPort || 3000;
const UserDB = appConfig.userDB;
const PasswordDB = appConfig.passwordDB;
const NameDB = appConfig.nameDB;
//const HostDb = process.env.DB_HOST || 'mongodb://localhost:27017/'

async function start() {
    try {
        const UrlDb = `mongodb+srv://${UserDB}:${PasswordDB}@clusterapp.uu6gw.mongodb.net/${NameDB}?retryWrites=true&w=majority`;
        await mongoose.connect(UrlDb);
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();










