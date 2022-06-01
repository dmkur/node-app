const express = require('express')

// turn on express wit app
const app = express()

app.get('/', (req, res) => {

})

// server starts listening app on PORT
app.listen(5000, () => {
    console.log('App listen 5000')
})