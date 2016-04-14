/********************************************************************
 Controller for creating directory
 Accepts a current directory or creates new directory from post in 
 user's root folder

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
          console.log(req.session.user + 'user session id');
        // page access, if auth successful
        if((req.method == 'post' || req.method == 'POST') && req.body.newDir)
        {
          uname = credentials.name;
          currentDir = req.session.currentDir;
          dirName = req.body.newDir;
          if(currentDir === '/')
            currentDir = '';

          console.log('current dir: ' + req.session.currentDir);
          // looks to see if user directory exists, mkdir if not
          // assume currentDir ends in '/'
          fs.readdir('./uploads/' + uname + '/' + currentDir + dirName, (err, files) =>
          {
            if(!files)
              fs.mkdir('./uploads/' + uname + '/' + currentDir + dirName, (arg)=>console.log(arg));
          });
            res.redirect('/files/' + currentDir + dirName);
            console.log('if statement hit');
        }
        else
        {
          currentDir = req.session.currentDir;
          console.log('current dir: ' + req.session.currentDir);
          res.render('makeDirectory', {user: req.session.user});
        }
          return console.log('success');
      }  
    }
        res.status(401);
        res.set('WWW-Authenticate', 'Basic realm="My Secret Page"')
        res.render('unauthorized', {header: req.get('Authorization')});
}
