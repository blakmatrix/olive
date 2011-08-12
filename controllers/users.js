// GET
exports.index = function(req, res, g_color) {
  res.render('users', {
    title: 'OLIVE users',
    g_color: "body{background-color:#"+g_color+";}"
  });
};

// POST