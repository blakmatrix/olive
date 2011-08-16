var bcrypt = require('bcrypt');  
var User = require('../models/user').User;

// GET /login
exports.index = function(req, res,g_color) {
  res.render('login', {
    title: 'OLIVE login',
    g_color: "body{background-color:#"+g_color+";}"
  });
};

// POST /login
exports.login = function(req, res) {

    var username = req.body.username;
    var password = req.body.password;
    // username exist?
    User.find({username: username}, function(err, user){
        if(user[0] == undefined){
            req.flash('error', "Bad Username");
            res.redirect('/login');
        }
        else if(!err){
           
            
            var hashed_pw = user[0].password;
            

            bcrypt.compare(password, hashed_pw, function(err, res_cmp) {
                if (!err) {
                  if(res_cmp){
                    //log in succesful!
                    req.session.username = username;
                    // Remember me
                      if (req.body.remember_me) {
                        //TODO: Persistant login
                      }
                    console.log('\nSuccessful login for '+username+'.\n');
                    res.redirect('/');
                  }
                  else{
                    console.log('\nBad password for '+username+'.\n');
                    req.flash('error', "Bad Password");
                    res.redirect('/login');
                  }
                }
                else {
                  console.log('\n Compare error for '+username+'.\n');
                  req.flash('error', "Unknown Error.");
                  console.log(err);
                }  
            });        
        }
        else{
            req.flash('error', "Bad Username");
            res.redirect('/login');
            console.log(err);
        }
    });
};