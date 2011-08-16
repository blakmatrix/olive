var User = require('../models/user').User;

// GET /:username
exports.index = function(req, res,  next ) {

  User.find({username:req.params.id}, function(err, user) {

    if(user[0]==undefined){
        req.flash('error','There is no user or page by the name: '+req.params.id);
        res.redirect('/');
        next();
    }
    else if (!err) {
      res.render('user', {
        title: 'OLIVE',
        user: user[0]
      });
    }
    else next();
  });
};

// POST
