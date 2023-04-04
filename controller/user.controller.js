const {fileService} = require("../services");

module.exports = {
    getAllUsers: async (req, res) => {
        const data = await fileService.reader();

        res.json(data);
    },
    getUserById: async (req, res) => {
        const { userId } = req.params
        const data = await fileService.reader()
        const user = data.find((u) => u.id === +userId);

        res.json(user);
    },
    createUser: async (req, res) => {
        const userInfo = req.body;
        const data = await fileService.reader()

    },
    updateUser:4,
    deleteUserById:5
}