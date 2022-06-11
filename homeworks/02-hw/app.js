const express = require('express');
const fs = require('fs')
const expressHbs = require('express-handlebars')
const path = require('path')

const usersDB = require('./db/users')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}))
app.set('views', path.join(__dirname, 'static'))

app.get('/ping', (req, res) => {
    res.end('pong')
})

app.get('/users', (req, res) => {
    res.render('users', {usersDB})
})
app.get('/reg', (req, res) => {
    res.render('reg')
})
app.post('/newUser', (req, res) => {
    const {name, password, email, age} = req.body
    //console.log(name, password, email, age)
   const newUser = usersDB.push({name: name, password: password, email: email, age:Number(age)})
    const newdata = [...usersDB, newUser]
    const newPath = path.join(__dirname, 'db', 'users.js')
    fs.writeFile(newPath, JSON.stringify(`module.exports = ${newdata}`), err => {
        if(err){
            console.log(e)
            return
        }
        console.log('New user add')
    })
    console.log(newdata)
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/auth', (req, res) => {
    const {email, password} = req.body
    // console.log(email,'-email', password, '-pas')
    const currentUserEmail = usersDB.find(i => i.email === email)
    const currentUserPass = usersDB.find(i => i.password === password)
    // console.log(currentUser)

    if(currentUserEmail && currentUserPass){
        res.redirect('/users')
    } if(!currentUserEmail) {
        res.redirect('/reg')
    }
})





app.listen(5000, () => {
    console.log('App listen 5000')
})