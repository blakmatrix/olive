var User = require('../models/user').User;
var bcrypt = require('bcrypt'); 

// GET /register
exports.index = function(req, res,g_color) {
  res.render('register', {
    title: 'OLIVE register',
    g_color: "body{background-color:#"+g_color+";}"
  });
};

// POST /register

exports.register = function(req, res) {
    bcrypt.gen_salt(10, function(err, salt) {
        bcrypt.encrypt(req.body.password, salt, function(err, hash) {
            var user = new User({
                username  : req.body.username,
                password  : hash,
                salt      : salt,
                first     : req.body.first,
                last      : req.body.last,
                email     : req.body.email,
                dob       : req.body.dob
            });
            
            user.save(function (err) {
                if (!err) {
                  req.flash('info', 'Created account for ' + req.body.username);
                  //also do first login
                  req.session.username = req.body.username;
                  res.redirect('/');
                }
                else {
                  var error = "unkown error";
                  if(err.message.search("E11000") >= 0 )error = req.body.username+" has already been taken."; 
                  req.flash('error', "Couldn't save the account: "+error);
                  console.log(err);
                  res.redirect('/register');
                }

            });
        });
    });
};