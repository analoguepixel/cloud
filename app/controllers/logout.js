/********************************************************************
 Controller for logging out
 Destroys session and redirects to /files/

 Exports: anonymous function
 ********************************************************************/
var auth = require('basic-auth');

module.exports =
  function (req, res) {
    var credentials = auth(req);
    if (credentials &&
        credentials.name == 'user' &&
        credentials.pass == 'user') 
    {
      req.session.destroy();
      res.redirect('/files/');
    }
    else {
      res.status(401);
      res.set('WWW-Authenticate', 'Basic realm="My Secret Page"')
      res.render('unauthorized', {header: req.get('Authorization')});
    }
  }
