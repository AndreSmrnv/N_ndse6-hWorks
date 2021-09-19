const config = {};

config.listenPort = process.env.PORT || 3000;
config.userDB = process.env.DB_USERNAME || 'mdbBooksUser';
config.passwordDB = process.env.DB_PASSWORD || 'qvsBv8Jt48R7oep8';
config.nameDB = process.env.DB_NAME || 'usersDB';
config.cookieSecret = process.env.COOKIE_SECRET || 'secretcook'

module.exports = config;



