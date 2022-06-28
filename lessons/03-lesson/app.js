const express = require('express');
// turn on express with app
const app = express();
// teach read json
app.use(express.json());
// also we need add formats
app.use(express.urlencoded({ extended: true }));

const { PORT } = require('./config/variables');
const { authRouter, userRouter } = require('./routes');

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('App listen', PORT);
});
