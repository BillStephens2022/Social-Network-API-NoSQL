const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// Functions for Users and Friends

module.exports = {
    getAllUsers(req, res) {
      User.find()
        .populate('thoughts')
        .populate('friends')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .populate('thoughts')
          .populate('friends')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
          .then((userData) => res.json(userData))
          .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findByIdAndUpdate(
          ObjectId(req.params.userId),
          { $set: req.body },
          { new: true }
        )
        .then((user) =>
          !user  
            ? res.status(404).json({ message: "No user found with that ID" })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
      User.findByIdAndRemove(ObjectId(req.params.userId))
        .then((user) =>
            !user  
              ? res.status(404).json({ message: "No user found with that ID" })
              : res.json({ message: "User deleted!"})
        )
        .catch ((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        {runValidators: true, new: true}
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user found with that ID' })
            : res.json(user)       
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    }
}

// GET all users 
// GET a single user by its _id and populated thought and friend data 
// POST a new user
// PUT to update a user by its _id
// DELETE to remove user by its _id
// BONUS: Remove a user's associated thoughts when deleted.

// Endpoint: /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list