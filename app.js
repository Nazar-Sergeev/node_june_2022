const express = require('express');

const { fileServices } = require('./services')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/users', async (req, res) => {
    const data = await fileServices.reader()

    res.json(data);
});

app.post('/users', async (req, res) => {
    const userInfo = req.body;

    const data = await fileServices.reader();

    const newUser = {...userInfo, id: data[data.length - 1].id + 1};
    data.push(newUser);

    await fileServices.writer(data);

    res.json(data);
});

app.get('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const data = await fileServices.reader();
    const user = data.find((u) => u.id === +userId);

    res.json(user);
});

app.put('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const newUserInfo = req.body;

    const data = await fileServices.reader();

    const index = data.findIndex((u) => u.id === +userId);
    data[index] = {...data[index], ...newUserInfo};

    await fileServices.writer(data);

    res.json(data);
});

app.delete('/users/:userId', async (req, res) => {
    const {userId} = req.params;

    const data = await fileServices.reader();

    const index = data.findIndex((u) => u.id === +userId);
    data.splice(index, 1);

    await fileServices.writer(data);

    res.json(data);
});



const port = 5000;
app.listen(port, () => {
    console.log(`Server listen ${port}`);
});