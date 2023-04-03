// const express = require('express');
// const {urlencoded} = require("express");
//
// const userDb = require('./db/users')
//
// const app = express();
//
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
//
//
// app.get('/users', (req, res) => {
//     console.log('USERS ENDPOINT');
//
//     // res.json({user: 'Nazar'});
//     //
//     // res.end('its ok');
//     //
//     // res.status(401).json({user: 'Nazar'});
//     //
//     // res.sendFile('./');
//
//     res.json(userDb);
//
// });
//
// app.get('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//
//     if (!userDb[userId]) {
//         res.status(401).json(`User with id ${userId} not found! Please tru again`);
//     } else {
//         res.status(200).json(userDb[userId]);
//     }
//
// });
//
//
// app.post('/users', (req, res) => {
//     const userInfo = req.body;
//     if (!userInfo) {
//         res.status(400).json('Enter the user!');
//     } else if (!userInfo.name) {
//         res.status(401).json(`Please enter the name user!`)
//     } else if (userInfo.name.length < 2) {
//         res.status(401).json(`Please enter the name user where length name more than two constters!`)
//     } else if (!userInfo.age) {
//         res.status(401).json(`Please enter the age user!`);
//     } else if (userInfo.age < 18) {
//         res.status(401).json(`Please enter the user older than 18`)
//     }
//     userDb.push(userInfo);
//
//     res.status(201).json('Created');
// })
//
// app.put('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//     const updatedUser = req.body
//     if (!userDb[userId]) {
//         res.status(401).json(`User with id ${userId} not found! Please tru again`)
//     } else if (!updatedUser) {
//         res.status(400).json('Enter the user!');
//     } else if (!updatedUser.name) {
//         res.status(401).json(`Please enter the name user!`)
//     } else if (updatedUser.name.length < 2) {
//         res.status(401).json(`Please enter the name user where length name more than two constters!`)
//     } else if (!updatedUser.age) {
//         res.status(401).json(`Please enter the age user!`);
//     } else if (updatedUser.age < 18) {
//         res.status(401).json(`Please enter the user older than 18`)
//     }
//     userDb[userId] = updatedUser;
//
//     res.json('Updated');
// });
//
// app.deconste('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//
//     if (!userDb[userId]) {
//         res.status(401).json(`User with id ${userId} not found! Please tru again`);
//     } else {
//         userDb.splice(userId, 1);
//     }
//
//     res.json(userDb);
//     res.json('deconsted');
// })
//
//
// app.listen(5001, () => {
//     console.log('Server listen 5001');
// });

// const fs = require('fs/promises');
// const path = require('path');
// const express = require('express');
// const app = express();
//
// app.use(express.json());
// app.use(express.urlencoded({extended: true}))
//
//
// app.get('/users', async (req, res) => {
//     console.log('Users Endpoint!');
//
//     const buffer = await fs.readFile(path.join(__dirname, 'db', 'usersDb.json'));
//     const users = JSON.parse(buffer.toString());
//
//     res.json(users);
//
// });
//
// app.get('/users/:userId', async (req, res) => {
//     console.log('User by ID!');
//     const {userId} = req.params;
//
//     const buffer = await fs.readFile(path.join(__dirname, 'db', 'usersDb.json'));
//     const users = JSON.parse(buffer.toString());
//
//     const user = users.find((user) => user.id === +userId);
//
//     if (!user) {
//         res.status(404).json(`User with id ${userId} not found! Please tru again`);
//     } else {
//         res.status(200).json(user);
//     }
//
// });
//
// app.post('/users', async (req, res) => {
//     const userInfo = req.body;
//
//     const buffer = await fs.readFile(path.join(__dirname, 'db', 'usersDb.json'));
//     const users = JSON.parse(buffer.toString());
//
//     const newUser = {...userInfo, id: users[users.length - 1].id + 1};
//     users.push(newUser);
//
//     await fs.writeFile(path.join(__dirname, 'db', 'usersDb.json'), JSON.stringify(users))
//
//     res.status(201).json(users);
// });
//
// app.put('/users/:userId', async (req, res) => {
//     const newUserInfo = req.body;
//     const {userId} = req.params;
//
//     const buffer = await fs.readFile(path.join(__dirname, 'db', 'usersDb.json'));
//     const users = JSON.parse(buffer.toString());
//
//     const index = users.findIndex((u) => u.id === +userId);
//     if (index === -1) {
//         return res.status(401).json(`User with id ${userId} not found! Please tru again`)
//     }
//
//     users[index] = {...users[index], ...newUserInfo};
//
//     await fs.writeFile(path.join(__dirname, 'db', 'usersDb.json'), JSON.stringify(users))
//
//     res.status(200).json(users[index])
//
// });
//
// app.deconste('/users/:userId', async (req, res) => {
//     const {userId} = req.params;
//
//     const buffer = await fs.readFile(path.join(__dirname, 'db', 'usersDb.json'));
//     const users = JSON.parse(buffer.toString());
//     const index = users.findIndex((u) => u.id === +userId);
//
//     users.splice(index, 1);
//     await fs.writeFile(path.join(__dirname, 'db', 'usersDb.json'), JSON.stringify(users));
//
//     res.sendStatus(204);
//
// });

// const fs = require('fs/promises');
// const express = require('express');
// const app = express();
// const path = require('path');
//
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
//
// app.get('/users', async (req, res) => {
//     console.log('Users Endpoint!!!');
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//     res.json(data);
// })
//
// app.get('/users/:userId', async (req, res) => {
//     const {userId} = req.params;
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//     const user = data.find((u) => u.id === +userId);
//
//
//     if (!user) {
//         res.status(404).json(`User with ${userId} not found, please try again !`)
//     }
//     res.status(200).json(user);
// })
//
// app.post('/users', async (req, res) => {
//     const userInfo = req.body;
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//
//     const newUser = {...userInfo, id: data[data.length - 1].id + 1};
//     data.push(newUser);
//
//     await fs.writeFile(pathFile, JSON.stringify(data));
//     res.json(data)
//
// });
//
// app.put('/users/:userId', async (req, res) => {
//     const {userId} = req.params;
//     const userInfo = req.body;
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//     const index = data.findIndex((u) => u.id === +userId);
//
//     data[index] = {...data[index], ...userInfo}
//     await fs.writeFile(pathFile, JSON.stringify(data));
//
//     res.json(data[index]);
//
// });
//
// app.delete('/users/:userId', async (req, res) => {
//     const {userId} = req.params;
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//
//     const index = data.findIndex((u) => u.id === +userId);
//     data.splice(index, 1);
//
//     await fs.writeFile(pathFile, JSON.stringify(data));
//
//     res.json(data);
// });

// const express = require('express');
// const fs = require('fs/promises');
// const path = require('path');
//
// const app = express();
//
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
//
// app.get('/users', async (req, res) => {
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//
//     res.json(data);
//
// });
//
// app.get('/users/:userId', async (req, res) => {
//     const {userId} = req.params;
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//     const user = data.find((u) => u.id === +userId);
//
//     res.json(user);
//
// });
//
// app.post('/users', async (req, res) => {
//     const userInfo = req.body;
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//
//     const newUser = {...userInfo, id: data[data.length - 1].id + 1};
//     data.push(newUser);
//
//     await fs.writeFile(pathFile, JSON.stringify(data));
//
//     res.json(data);
//
// });
//
// app.put('/users/:userId', async (req, res) => {
//     const {userId} = req.params;
//     const newUserInfo = req.body;
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//
//     const index = data.findIndex((u) => u.id === +userId);
//
//     data[index] = {...data[index], ...newUserInfo};
//     await fs.writeFile(pathFile, JSON.stringify(data));
//
//     res.json(data);
//
// });
//
// app.delete('/users/:userId', async (req, res) => {
//     const {userId} = req.params;
//     const pathFile = path.join(__dirname, 'db', 'usersDb.json');
//
//     const buffer = await fs.readFile(pathFile);
//     const data = JSON.parse(buffer.toString());
//
//     const index = data.findIndex((u) => u.id === +userId);
//
//     data.splice(index, 1);
//     await fs.writeFile(pathFile, JSON.stringify(data));
//
//     res.json(data);
// });


// const port = 5000;
// app.listen(port, () => {
//     console.log(`Server listen ${port}`);
// });

