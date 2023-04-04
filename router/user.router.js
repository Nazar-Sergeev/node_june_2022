const router = require('express').Router();
const controller = require('../controller/user.controller');


router.get('/',controller.getAllUsers);
router.post('/');
router.get('/:userId', controller.getUserById);
router.put('/:userId');
router.delete('/:userId');


module.exports = router;