const express = require('express');
const {urlencoded} = require("express");

const userDb = require('./db/users')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/users', (req, res) => {
    console.log('USERS ENDPOINT');

    // res.json({user: 'Nazar'});
    //
    // res.end('its ok');
    //
    // res.status(401).json({user: 'Nazar'});
    //
    // res.sendFile('./');

    res.json(userDb);

});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;

    if (!userDb[userId]) {
        res.status(401).json(`User with id ${userId} not found! Please tru again`);
    } else {
        res.status(200).json(userDb[userId]);
    }

});


app.post('/users', (req, res) => {
    const userInfo = req.body;
    if (!userInfo) {
        res.status(400).json('Enter the user!');
    } else if (!userInfo.name) {
        res.status(401).json(`Please enter the name user!`)
    } else if (userInfo.name.length < 2) {
        res.status(401).json(`Please enter the name user where length name more than two letters!`)
    } else if (!userInfo.age) {
        res.status(401).json(`Please enter the age user!`);
    } else if (userInfo.age < 18) {
        res.status(401).json(`Please enter the user older than 18`)
    }
    userDb.push(userInfo);

    res.status(201).json('Created');
})

app.put('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const updatedUser = req.body
    if (!userDb[userId]) {
        res.status(401).json(`User with id ${userId} not found! Please tru again`)
    } else if (!updatedUser) {
        res.status(400).json('Enter the user!');
    } else if (!updatedUser.name) {
        res.status(401).json(`Please enter the name user!`)
    } else if (updatedUser.name.length < 2) {
        res.status(401).json(`Please enter the name user where length name more than two letters!`)
    } else if (!updatedUser.age) {
        res.status(401).json(`Please enter the age user!`);
    } else if (updatedUser.age < 18) {
        res.status(401).json(`Please enter the user older than 18`)
    }
    userDb[userId] = updatedUser;

    res.json('Updated');
});

app.delete('/users/:userId', (req, res) => {
    const {userId} = req.params;

    if (!userDb[userId]) {
        res.status(401).json(`User with id ${userId} not found! Please tru again`);
    } else {
        userDb.splice(userId, 1);
    }

    res.json(userDb);
    res.json('deleted');
})


app.listen(5001, () => {
    console.log('Server listen 5001');
});