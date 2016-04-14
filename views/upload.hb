
<!DOCTYPE html>
<html>
  <head>
    <title>Add a new file</title>
    <link rel="stylesheet" type="text/css" href="/css/normalize.css">
    <link rel="stylesheet" type="text/css" href="/css/skeleton.css">
    <link rel="stylesheet" type="text/css" href="/css/main.css">
  </head>
  </head>
  <body>
    <div class="container">
      <div class="row nav">
        <ul class="nav">
          <li><a href="/files/">Home</a></li>
          <li class="u-pull-right"><a href="/logout/">Logout</a></li>
        </ul>
      </div>
      <div class="row">
        <form method="POST" enctype="multipart/form-data">
          Upload a file:
          <input type="file" name="myfile"/>
          <br/>
          <input type="submit" value="Upload" ng-click="uploadClick"/>
        </form>
        {{#if upload}}
        <p>Uploaded: <kbd>{{upload}}</kbd></p>
        {{/if}}
        <p><a href="download">Download the file</a></p>
        <p><a href="/files/">View uploaded files</a></p>
      </div>
  </body>
</html>
