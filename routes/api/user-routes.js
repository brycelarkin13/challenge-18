const router = require('express').Router();

const {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
    addToFriendsList,
    removeFromFriendsList
} = require('../../controllers/user-controller');

// GET and POST routes api/user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// GET one, Put, and Delete api/users/<id>    
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addToFriendsList);

router
    .route('/:userId/friends/:friendId')
    .delete(removeFromFriendsList);

module.exports = router;