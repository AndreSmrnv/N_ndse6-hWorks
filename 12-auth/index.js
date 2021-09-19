const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const routes = require('./routes');
const mongoose = require('mongoose');
const appConfig = require('./config');
const errorMiddleware = require('./middleware/error');
const User = require('./models/User_mdb'); 


passport.use('local', new LocalStrategy(User.authenticate()))


passport.serializeUser(
  User.serializeUser()
)

passport.deserializeUser(
  User.deserializeUser()
)

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('express-session')({
  secret: appConfig.cookieSecret,
  resave: false,
  saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())
app.use('/', routes);

app.use(errorMiddleware);

// start app

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

