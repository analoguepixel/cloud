/********************************************************************
 Controller for downloading files 

 Exports: anonymous function
 ********************************************************************/
var auth = require('basic-auth');
var config = require('../../config');

module.exports =
  function (req, res) {
    var credentials = auth(req);
    var succesfulAuth, succesfulPass;
    
    /*console.log(config.users);
    for (tag in config.users)
        {
            console.log(tag);
        }*/
    
    if (credentials && credentials.name == 'user' && credentials.pass == 'user') 
    {
      res.set('Content-Disposition',
        'attachment; filename=' + (req.session.name ? req.session.name : 'file')
       );
      res.sendFile(process.cwd() + '/uploads/file');
      res.render('upload');
    }
    else {
      res.status(401);
      res.set('WWW-Authenticate', 'Basic realm="My Secret Page"')
      res.render('unauthorized', {header: req.get('Authorization')});
    }
  }

/*credentials &&
        credentials.name == config.users &&
        credentials.pass == config.users.password*/
