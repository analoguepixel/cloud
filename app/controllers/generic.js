/********************************************************************
 Contains a few generic functions for rendering and redirect 

 Exports: renderTemplate(), renderError(), 
          redirect(), and requireLogin
 ********************************************************************/
exports.renderTemplate = function renderTemplate(name) {
  return function (req, res) {
    res.render(name, {user: req.session.user});
  }
}

exports.renderError = function renderError(name) {
  return function (req, res) {
    res.sendStatus(404).send('Not found');
  }
}

exports.redirect = function redirect(url) {
  return function (req, res, next) {
    res.redirect(url);
  }
}

exports.requireLogin = function requireLogin(req, res, next) {
  if (! req.session.user) {
    res.redirect('/login');
  }
  else {
    next();
  }
}
