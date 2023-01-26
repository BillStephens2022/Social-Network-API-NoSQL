const router = require('express').Router();

// Endpoint: /api/users

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