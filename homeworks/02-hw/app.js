const express = require('express');
const expressHbs = require('express-handlebars')
const path = require('path')

const usersDB = require('./db/users')
const e = require("express");

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

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/auth', (req, res) => {
    const {email, password} = req.body
    // console.log(email,'-email', password, '-pas')
    const currentUserEmail = usersDB.find(i => i.email === email)
    const currentUserPass = usersDB.find(i => i.password === password)
    // console.log(currentUser)

    if(usersDB.find(i => i.email === email)){
        res.end('Welcome to the board')
    } else {
        res.end('Please register your data')
    }
    res.end('yep')
})





app.listen(5000, () => {
    console.log('App listen 5000')
})