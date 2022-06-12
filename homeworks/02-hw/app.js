const express = require('express');
const fs = require('fs')
const expressHbs = require('express-handlebars')
const path = require('path')

const usersDB = require('./db/users')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}))
app.set('views', path.join(__dirname, 'static'))

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.get('/users', (req, res) => {
    res.render('users', {usersDB})
})

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params
    const currentUser = usersDB[user_id]
    res.render('singleUser', {currentUser})
})

app.get('/reg', (req, res) => {
    res.render('reg')
})

app.post('/sign_up', (req, res) => {
    const pathToSave = path.join(__dirname, 'db', 'users.js')
    const {name, password, email, age} = req.body
    //console.log(name, password, email, age)

    const sameEmail = usersDB.find(i => i.email === email)
    if(sameEmail) {
        res.render('bad_email')
        return
    }

    usersDB.push({name: name, password: password, email: email, age: Number(age)})
    const newUser = JSON.stringify(usersDB)
    //console.log(newUser)

    fs.writeFile(pathToSave, `module.exports = ${newUser}`, err => {
        if (err) {
            console.log(err)
            return
        }
        console.log('New user add')
    })
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

    const id = usersDB.findIndex(i=>i.email === email)
    //console.log(id)

    if (!currentUserEmail || !currentUserPass) {
        res.render('bad_login')
    }
    if (currentUserEmail && currentUserPass) {
        res.redirect(`/users/${id}`)
    }
})

app.listen(5000, () => {
    console.log('App listen 5000')
})