const express = require('express')

// turn on express with app
const app = express()

// Routes
// the main routes:
// GET, POST, PUT, HEAD, DELETE, PATCH, OPTIONS, CONNECT, TRACE
app.get('/', (req, res) => {
    console.log(req)
    res.end('end')
})

// server starts listening app on PORT
app.listen(5000, () => {
    console.log('App listen 5000')
})