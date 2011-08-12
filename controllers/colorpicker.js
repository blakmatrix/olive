exports.index = function(req, res,g_color) {
  res.render('colorpicker', {
    title: 'OLIVE colorpicker',
    g_color: "body{background-color:#"+g_color+";}"
  });
};