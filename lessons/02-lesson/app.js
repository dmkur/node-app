const express = require('express')
// lib for drawing hbs files
const expressHbs = require('express-handlebars')
const path = require('path')

const {PORT} = require('./config/variables')
const users = require('./db/users')

// turn on express with app
const app = express()

// teach read json
app.use(express.json())
// also we need add formats
app.use(express.urlencoded({extended: true}))

// setting for view engine for hbs files
// add permission to dir static
app.use(express.static(path.join(__dirname, 'static')))
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'))


// Routes
// rout dor testing
app.get('/ping', (req, res) => {
    res.json('pong')
})
// the main routes:
// GET, POST, PUT, HEAD, DELETE, PATCH, OPTIONS, CONNECT, TRACE
app.get('/', (req, res) => {
//    req - what we need
//    res - what we give

    // res.end('end response')
    // res.send('<h1>send response</h1>')
    // res.json({response: 'json'})

    // res.write('hello ')
    // res.write('world')
    // res.end()

    res.status(404).end('Status not found')
// status code
// Informational responses ( 100–199 )
// Successful responses ( 200–299 )
// Redirects ( 300–399 )
// Client errors ( 400–499 )
// Server errors ( 500–599 )
})

// app.get('/users', (req, res) => {
//     res.json(
//         [{name: 'Dima'}, {name: 'Lol'}]
//     )
// })

// hbs example
app.get('/users', (req, res) => {
    //main options can provide any info to users.hbs
    res.render('users', {userName: 'Dimasik', users})
})

// how drawing each user with new URL?
// dynamic parameters in URL
app.get('/users/:user_id', (req, res) => {
    // user_id - dynamic parameter
    // how find this data? With query.params
    // http://localhost:5000/users/7
    console.log(req.params) // {user_id:7}
    const {user_id} = req.params
    console.log(user_id) // 7

    // req.query - parameter may be impossible or not
    // http://localhost:5000/users/2?name=Anna&surname=Lola
    // req.query - { name: 'Anna', surname: 'Lola' }
    console.log(req.query)

    const currentUser = users[user_id]
    if (!currentUser) {
        res.status(404).end(`User with id-${user_id} not found`)
        return
    }

    res.json(currentUser)
})

app.get('/login', (req, res) => {
    res.render('login', {isMale: true})
})

app.post('/auth', (req, res) => {
    // read property from input wit body
    // for read body we need teach node read json
    console.log(req.body)
    const {name, password} = req.body
    console.log(name, password)

    res.json('OK')
})


// server starts listening app on PORT
app.listen(PORT, () => {
    console.log('App listen', PORT)
})