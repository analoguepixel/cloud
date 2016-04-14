Project Name: My Cloud

Partners: Jim Johnson & Will Means

Resources Used: 
	- https://www.npmjs.com/package/mimetype
		- this module was used to obtain the mime type. This was used specifically for generating the file displayed within the browser.
  - https://nodejs.org/api/
    - general Node research
  - http://expressjs.com/en/api.html
    - general Express research
  - http://stackoverflow.com/
    - when troubleshooting failed

How To Use: 
	- The home page used for our project is localhost:8000/files. Any of the users defined within the config file can be used to login. (The user gfoust already has a folder and some files within its folder. {username: 'gfoust', password: 'secret'}.) If the users login information was entered correctly the file page should show the files and directories available. The user can either choose to: upload a new file, view the file in-browser, create a new directory to store files, or to logout. If the user chooses upload a file, they will be redirected to the uploads page where they can upload a file. If the user chooses to view the file in the browser, they can click on the file. If the user chooses to create a new directory, they will select "create" and be redirected to the new directory page. If the user chooses to logout, they can do so from any page. When the user is logged out and unsuccessfully tries to login, they will be redirected to an unauthorized 401 error page. 

Design: 
	- Simplicity was stressed in the creation of our design. All functionality of the application is visible from the /files homepage. The controllers used do not necessarily have an associated handlebar stored in views. This is because certain functionalities made sense to have on the same page. New directory and upload were given their own handlebar. Login and logout use the in browser authentication and do not have their own templates.
  - Our authentication solution is to redirect to a url '/u/' which is routed to a controller that prompts login. If successful, the controller redirects to '/files/'.

Helper/partial template:
	- Our files template is a partial template in the sense that it relies in argumets passed in from the mapURL or files controllers.

Strengths/Weaknesses: 
  - Weakness: We encountered a strange bug that allowed the authentication to only function on the 'upload' controller or a controller dedicated only to authentication. As a result, our authentication is handled by only one route ('/u/'). All routes accessed without an authenticated session redirect to '/u/' and successful authentication. This solution works, but is not ideal.
  - Weakness: We had trouble capturing '/../' occurences in the requested url. Paths with '/../' are not filtered but users only have access to files in their own directory so they cannot access other user's files.
	- Strength: The project at its current state has the potential for upward mobility. While basic in its core functions, the modularity we chose to design allows the project to be altered in a way that can add controllers to improve functionality without crashing the rest of the application. The project was also designed to have an easily navigable and clean UI, so that the user may easily understand what each function does and how to acheive it. While the UI is very clean, it is not as in depth or structured as it should be in a real-world setting. As far as we've tested the security is strong for each of the views, and a session ID links the sites from being accessed without authentication. 

