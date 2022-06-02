const express = require('express')

// turn on express wit app
const app = express()

// Routes
// GET, POST, PUT, HEAD, DELETE, PATCH,
// OPTIONS CONNECT, TRACE
app.get('/', (req, res) => {

})

// server starts listening app on PORT
app.listen(5000, () => {
    console.log('App listen 5000')
})