const {fileService} = require("../services");
const ApiError = require("../error/ApiError");

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const data = await fileService.reader();

            console.log('User endpoint');
            res.json(data);
            next();
        } catch (e) {
            next(e);
        }
    },
    getUserById: async (req, res, next) => {
        // const {userId} = req.params
        // const data = await fileService.reader()
        // const user = data.find((u) => u.id === +userId);

        try {
            console.log('User endpoint by id');
            res.json(req.user);
            next();
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const userInfo = req.body;
            const data = await fileService.reader();

            const newUser = {...userInfo, id: data[data.length - 1].id + 1}
            data.push(newUser);
            await fileService.writer(data);

            console.log('Create user');
            res.json(data);
            next();
        } catch (e) {
            next(e);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const userInfo = req.body;

            const data = await fileService.reader();
            const index = data.findIndex((u) => u.id === +userId);

            data[index] = {...data[index], ...userInfo};
            await fileService.writer(data);

            console.log('Update user');
            res.status(200).json(data);
            next();
        } catch (e) {
            next(e);
        }
    },
    deleteUserById: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const data = await fileService.reader();
            console.log(data);
            const index = data.findIndex((u) => u.id === +userId);

            data.splice(index, 1);

            await fileService.writer(data);

            console.log('User delete');
            res.sendStatus(204);
            next();
        } catch (e) {
            next(e);
        }
    },
}