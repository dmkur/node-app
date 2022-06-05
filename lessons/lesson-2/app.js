const express = require('express')

// turn on express with app
const app = express()

// Routes
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

app.get('/users', (req, res) => {
    res.json(
        [{name: 'Dima'}, {name:'Lol'}]
    )
})

// server starts listening app on PORT
app.listen(5000, () => {
    console.log('App listen 5000')
})