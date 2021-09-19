const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');  

const recordsSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        default: "",
    },
    displayName: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },    
    date: {
        type: Date,
        default: Date.now,
    }

});
recordsSchema.plugin(passportLocalMongoose);

  
 module.exports = mongoose.model("User", recordsSchema); 


