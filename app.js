const express = require('express');
require('dotenv').config();

const userRouter = require('./router/user.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.listen(process.env.PORT , () => {
    console.log(`Server listen ${process.env.PORT}`);
});