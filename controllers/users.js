var User = require('../models/user').User;
// GET
exports.index = function(req, res, g_color) {

  User.find({}, function(err, users){
      res.render('users', {
        title: 'OLIVE users',
        g_color: "body{background-color:#"+g_color+";}",
        users: users
      });
  });
  
};

// POST