/********************************************************************
 Controller for handling most url routes that ar not explicit
 functions of the system (i.e. not makeDirectory, upload, logout)
 This controller processes the URL as arguments and replaces '/files/'
 with the user's username. It also determines if the url accesses a
 file, directory, or neither.

 Exports: anonymous function
 ********************************************************************/
var generic = require('./generic');
var fs      = require('fs');
var mime    = require('mimetype');

module.exports = 
  function showList(req, res, next) {

    // default to 'user' for user if undefined
    var user = req.session.user;
    if(user === undefined)
      res.redirect('/u/');
    
    // use regex to generate array of url elements
    var ls = new Array();
    var regExp = /(\w+\/)*?([\w\-\.]*)/g;
    var cdUpRegExp = /\.\.[\/]/;
    var url    = req.originalUrl;
    url = url.replace('../', '');
    var urls   = url.match(regExp);

    // strip empty string matches cause by second parentheses grouping
    var tempUrls= new Array();
    var len = urls.length;
    for(var i = 0, c = 0; i < len; i++)
    {
      if(urls[i] != "")
      {
        tempUrls[c] = urls[i];
        c++;
      }
    }
    urls = tempUrls;

    // construct new string based on current url elements
    // element 0 will be 'files', so construct string from index 1 onward
    var urlFrag = '';
    var len = urls.length;
    for(var i = 1; i < len; i++)
    {
      if(i == len - 1)
      urlFrag += urls[i] ;
      else
      urlFrag += urls[i] + '/';
    }

    // look in user's own directory within /uploads/
    testUrl = './uploads/' + user + '/' + urlFrag;

    // stat url to determine whether it is a file, directory, or neither
    // call
    fs.stat(testUrl, (error, stat)=> {
      console.log(error);
      if(stat != undefined && stat.isDirectory())
        serveDir(testUrl);
      else if(stat != undefined && stat.isFile())
        serveFile(testUrl);
      else
        serveError(error);
        
    });
    
    // for serving error to client
    function serveError(dir) {
      res.redirect('/404');
    }

    // for serving file to client
    // check extension if it is an image and displays file
    // sends all other filetypes
    function serveFile(file) {
      var imgExp = /\.(jpg|png|jpeg|bmp|gif)/i;

      var isImg = file.match(imgExp)==null?false:true;
      //file begins with a 0
      file= file.substring(1);

      // display in browser if image, else send file
      if(isImg === true)
      {
        var img = fs.readFileSync(process.cwd() + file);
        res.writeHead(200, {'Content-Type': 'image/gif' });
        res.end(img, 'binary');
      }
      else
      {
        var mimetype = mime.lookup(file);
        res.set('Content-Disposition',
          'attachment; filename=' + file 
        );
        res.setHeader('Content-Type', mimetype);
        res.sendFile(process.cwd() +  file);
      }
    }

    // for serving files view to client
    // renders corresponding folder with files template
    function serveDir(dir) {

      //fs.readdir('./uploads/' + user + '/' + urls[1],  (err, files)=>
      fs.readdir(dir,  (err, files)=>
      {
        ls = files.sort();
        //res.send(urls);
        req.session.currentDir = urlFrag + '/';
        res.render('files', 
                 {user: user,
                  dir: urlFrag,
                  ls: ls});
      });
    }
 } 
