<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="/css/normalize.css">
    <link rel="stylesheet" type="text/css" href="/css/skeleton.css">
    <link rel="stylesheet" type="text/css" href="/css/main.css">
  </head>
  <body>
  <div class="container">
    <div class="row nav">
      <ul class="nav">
        <li><a href="/files/">Files</a></li>
        <li class="u-pull-right"><a href="/logout/">Logout</a></li>
      </ul>
    </div>
    <div class="row">
      <h2>Welcome, {{user}}!</h2>
    </div>
    <div class="row">
      <h4>
      {{dir}}/
      </h4>
      <a href="/makeDirectory/"><button>New folder</button></a>
      <a href="/upload/"><button>New file</button></a>
      <ul class="files">
        {{#each ls}}
          <li>
            <a href="/files/{{../dir}}/{{this}}">
              {{this}}
            </a>
          </li>
        {{/each}}
      </ul>
      </div>
    </div>
  </body>
</html>
