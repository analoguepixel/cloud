/********************************************************************
 Controller for displaying files
 Creates a list of files in a folder
 Passes current user, file list

 Exports: anonymous function
 ********************************************************************/
var fs = require('fs');
var auth = require('basic-auth');

module.exports = 
  function showList(req, res, next) {
    if(req.session.user != undefined)
    {
    
      req.session.currentDir = '/';
      var ls = new Array();

      var user = req.session.user;
      
      if (req.session.user)
      {
          fs.readdir('./uploads/' + user, (err, files)=>
          {
            if(!files)
              fs.mkdir('./uploads/' + user, (arg)=>console.log(arg));
          });
          fs.readdir('./uploads/' + user, (err, files)=>
          {
            ls = files.sort();
            res.render('files', 
                     {user: req.session.fullName,
                      ls: ls});
          });
      }
      else
      {
        res.status(401);
        res.set('WWW-Authenticate', 'Basic realm="My Secret Page"')
        res.render('unauthorized', {header: req.get('Authorization')});
      }
    }
   else
     res.redirect('/u');
  }
