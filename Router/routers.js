const router = require("express").Router();

const { getAllUser, getUserById, addNewUser, deleteUserById, userByPassword } = require("../Controller/controllers");

router.get('/users', getAllUser);
router.get('/users/:userId', getUserById);
router.post('/users/', addNewUser);
router.delete('/users/:userId', deleteUserById);
router.get('/user/:userPassword', userByPassword)

module.exports = {userRouter: router};