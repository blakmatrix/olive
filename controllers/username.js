var User = require('../models/user');

// GET /:username
exports.index = function(req, res,  next ) {
  User.findOne(req.params.id, function(err, user) {
    if (!err) {
      res.render('user', {
        title: 'OLIVE',
        g_color: "body{background-color:#"+000000+";}",//g_color+";}",
        user: user
      });
    }
    else next();
  });
};

// POST
