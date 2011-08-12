// GET /

exports.index = function(req, res,g_color) {
  res.render('index', {
    title: 'OLIVE',
    g_color: "body{background-color:#"+g_color+";}"
  });
};

