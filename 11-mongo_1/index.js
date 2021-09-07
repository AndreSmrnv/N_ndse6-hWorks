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
const UserDB = process.env.DB_USERNAME || 'mdbBooksUser';
const PasswordDB = process.env.DB_PASSWORD || 'qvsBv8Jt48R7oep8';
const NameDB = process.env.DB_NAME || 'booksDB'
const HostDb = process.env.DB_HOST || 'mongodb://localhost:27017/'
async function start() {
    try {
        const UrlDb = `mongodb+srv://${UserDB}:${PasswordDB}@clusterapp.uu6gw.mongodb.net/${NameDB}?retryWrites=true&w=majority`;
        //const UrlDB = `mongodb+srv://${UserDB}:${PasswordDB}@cluster0.grfrs.mongodb.net/${NameDB}`;
        //const UrlDB = `mongodb://localhost:27017/mydb`;
        //const UrlDB = `mongodb://${UserDB}:${PasswordDB}@localhost:27017/mydb`;
        await mongoose.connect(UrlDb);
        
        // await mongoose.connect(HostDb, {
        //     user: UserDB,
        //     pass: PasswordDB,
        //     dbName: NameDB,
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();

// app.listen(appConfig.listenPort, () => {
//     console.log(`Server is running on port ${appConfig.listenPort}`);
// });








