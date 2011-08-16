// User Schema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
Friends = require('./friends');

var User = new Schema({
    username  : { type: String, unique: true},
    password  : String,
    salt      : String,
    first     : String,
    last      : String,
    email     : String,
    fav_color : String,
    c_toggle  : Boolean,
    friends   :[Friends],
    body      : String,
    created_at: {
                    type: Date
                  , default: Date.now
                },
    dob: {
                    type: Date
                  , default: Date.now
                }
});

exports.User = mongoose.model('User', User);