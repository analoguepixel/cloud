/********************************************************************
 Controller for uploading file 
 Accepts a current directory in which to upload new file or uploads 
 file in user's root folder

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
        if((req.method == 'post' || req.method == 'POST') && req.file)
        {
          name = credentials.name;
          currentDir = req.session.currentDir;
          console.log('currentDir: ' + currentDir);

          // looks to see if user directory exists, mkdir if not
          fs.readdir('/uploads/' + name + '/', (err, files) =>
          {
            if(!files)
              fs.mkdir('/uploads/' + name + '/', (arg)=>console.log(arg));
          });
          
          // assume currentDir ends in '/'
          fs.rename(req.file.path,
                     './uploads/' + name + '/' + currentDir + req.file.originalname);
          console.log('currentDir: ' + currentDir);
          res.redirect('/files/' + currentDir);
        }
        else
        {
          console.log('passed auth');
          res.render('upload', {user: req.session.user});
        }
          return console.log('success');
      }  
    }
        res.status(401);
        res.set('WWW-Authenticate', 'Basic realm="My Secret Page"')
        res.render('unauthorized', {header: req.get('Authorization')});
}
