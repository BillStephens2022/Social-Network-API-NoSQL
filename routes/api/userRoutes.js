const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Endpoint: /api/users
router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// GET all users
// GET a single user by its _id and populated thought and friend data
// POST a new user
// PUT to update a user by its _id
// DELETE to remove user by its _id
// BONUS: Remove a user's associated thoughts when deleted.

// Endpoint: /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list

module.exports = router;