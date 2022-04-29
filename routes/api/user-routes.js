const router = require('express').Router();

const {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    addToFriendsList,
    removeFromFriendsList
} = require('../../controllers/')