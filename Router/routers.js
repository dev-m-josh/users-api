const router = require("express").Router();

const { getAllUser, getUserById, addNewUser, deleteUserById, loginUser } = require("../Controller/controllers");

router.get('/users', getAllUser);
router.get('/users/:userId', getUserById);
router.post('/users/', addNewUser);
router.delete('/users/:userId', deleteUserById);
router.post('/users/login', loginUser);

module.exports = {userRouter: router};