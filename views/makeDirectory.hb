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
          Make a new Directory:
          <input type="text" name="newDir"/>
          <br/>
          <input type="submit" value="Create" ng-click="uploadClick"/>
        </form>
        {{#if upload}}
        <p>Uploaded: <kbd>{{upload}}</kbd></p>
        {{/if}}
         <!--<p><a href="download">Download the file</a></p>-->
      </div>
  </body>
</html>
