const express = require('express');
const path = require('path');
// turn on express with app
const app = express();
// teach read json
app.use(express.json());
// also we need add formats
app.use(express.urlencoded({extended: true}));

const {authRouter, userRouter} = require('./routes');

app.use('/auth', authRouter);
app.use('/users', userRouter);


app.listen(5000, () => {
    console.log('App listen 5000')
});