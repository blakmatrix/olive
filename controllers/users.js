var User = require('../models/user').User;
// GET
exports.index = function(req, res) {

  User.find({}, function(err, users){
      res.render('users', {
        title: 'OLIVE users',
        users: users
      });
  });
  
};

// POST