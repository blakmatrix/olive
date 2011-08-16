// GET /logout

exports.index = function(req, res) {
  if (req.session) {
    req.session.destroy(function() {});
  }
  res.redirect('/');
};