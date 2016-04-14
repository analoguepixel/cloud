/********************************************************************
 Controller for handling login and redirecting to files if successful

 Exports: anonymous function
 ********************************************************************/
var fs = require('fs');
var auth = require('basic-auth');
var config = require('../../config');

module.exports =
  function upload(req, res, next) {
      var credentials = auth(req);
      var users = config.users;

    for(tag in users)
    {
        if(credentials && credentials.name == tag && credentials.pass == users[tag].password)
      {
          req.session.user = credentials.name;
          req.session.fullName = users[tag].name;
          res.redirect('/files/');
          return;
      }  
    }
        res.status(401);
        res.set('WWW-Authenticate', 'Basic realm="My Secret Page"')
        res.render('unauthorized', {header: req.get('Authorization')});
}
