const router = require("express").Router();

const { getAllUser, getUserById, addNewUser, deleteUserById } = require("../Controller/controllers");

router.get('/', getAllUser);
router.get('/:userId', getUserById);
router.post('/', addNewUser);
router.delete('/:userId', deleteUserById);

module.exports = {userRouter: router};