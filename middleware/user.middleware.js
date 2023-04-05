const {fileService} = require("../services");
const ApiError = require('../error/ApiError');


module.exports = {
    checkIsUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;

            const data = await fileService.reader();
            const user = data.find((u) => u.id === +userId);

            if (!user) {
                throw new ApiError('User not found!!!', 400);
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },
    isBodyValid: (req, res, next) => {
        try {
            const {name, age} = req.body;
            if (name.length <= 2 || typeof name !== 'string') {
                throw new ApiError('Wrong name!', 400);
                // return res.status(400).json('Wrong name!')
            }
            if (age <= 0 || Number.isNaN(+age)) {
                throw new ApiError('Wrong age!', 400);

            }
            next();
        } catch (e) {
            next(e);
        }
    },
    isIdValid: (req, res, next) => {
        try {
            const {userId} = req.params;
            if (userId < 0 || Number.isNaN(+userId) ) {
                throw new ApiError('Wrong ID!', 400);

            }
            next();
        } catch (e) {
            next(e);
        }
    },
}