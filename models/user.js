(function() {
  var Schema, User, UserSchema, mongoose, mongooseAuth;
  mongoose = require('mongoose');
  Schema = mongoose.Schema;
  mongooseAuth = require('mongoose-auth');
  var Friends = new Schema({
     username : String,
    created_at: {
                type: Date
              , default: Date.now
    }
});
  UserSchema =  new Schema({});
  User = null;
  UserSchema.plugin(mongooseAuth, {
    everymodule: {
      everyauth: {
        User: function() {
          return User;
        }
      }
    },
    password: {
      loginWith: 'login',
      extraParams: {
        email     : String,
        first     : String,
        last      : String,
        fav_color : String,
        c_toggle  : Boolean,
        body      : String,
        created_at: {
                type: Date
              , default: Date.now
            },
        dob: {
                type: Date
              , default: Date.now
            },
        friends   :[Friends]
      },
      everyauth: {
        getLoginPath: '/login',
        postLoginPath: '/login',
        loginLayout: 'auth_layout', // Only with `express`
        registerLayout: 'auth_layout', // Only with `express`
        loginView: 'login',
        getRegisterPath: '/register',
        postRegisterPath: '/register',
        registerView: 'register',
        loginSuccessRedirect: '/',
        registerSuccessRedirect: '/'
      }
    }
  });
  User = mongoose.model('User', UserSchema);
  module.exports = User;
}).call(this);
/*
var User = new Schema({
username  : String,
first     : String,
last      : String,
email     : String,
fav_color : String,
c_toggle  : Boolean,
friends   :[Friends],
created_at:{
   type   : Date,
   default: Date.now},
dob       :{ 
    type: Date,
    default: Date.now},
body      : String,
});

exports.User = User;
*/