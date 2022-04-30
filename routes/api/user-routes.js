const router = require('express').Router();

const {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
    addToFriendsList,
    deleteFromFriendsList
} = require('../../controllers/user-controller');

// /api/users <GET, POST>
router.route('/').get(getAllUsers).post(createUser);

//  /api/users/:id <GET, PUT, DELETE>
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

//  /api/users/:userId/friends/:friendId <POST, DELETE>
router.route('/:id/friends/:friendId').post(addToFriendsList).delete(deleteFromFriendsList)

module.exports = router;