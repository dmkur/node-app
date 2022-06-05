## Lesson 2
#### 1. Express - framework for Node (https://expressjs.com/)
1. Routes, request, response-
2. req.body - data from input
3. req.params - data from dynamic parameters in URL "2" - (http://localhost:5000/users/2)
4. req.query - data from URL but this it`s probable data after "2" - (http://localhost:5000/users/2?name=Anna&surname=Lola)
#### 2. Express - Handlebars - template engine for express (https://handlebarsjs.com/, https://www.npmjs.com/package/express-handlebars)
1. Settings express-hbs, engine...
2. Hbs lib for drawing page with some functions in html like: loop, simple if else
3. res.render("nameFile", {options}) - options for some data

## Lesson 1
#### 1. File system manager - "fs":
   1. writeFile, 
   2. appendFile, 
   3. mkdir, 
   4. readFile, 
   5. readdir, 
   6. stats, 
   7. rmdir, 
   8. rename,
   9. stream;
#### 2. Libs:
   1. util
      1. promisify
   2. path
   3. fs
