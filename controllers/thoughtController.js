const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');

// Endpoint: /api/thoughts

module.exports = {
    getAllThoughts(req, res) {
      Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          //.populate('reactions')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true}
            );
          })
          .then((user) =>
            !user
              ? res.status(404).json({
                message: 'Thought created, but found no user with that ID',
                })
              : res.json('Created the thought 🎉')
          )
          .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findByIdAndUpdate(
            ObjectId(req.params.thoughtId),
          { $set: req.body },
          { new: true }
        )
        .then((thought) =>
          !thought 
            ? res.status(404).json({ message: "No thought found with that ID" })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findByIdAndRemove(ObjectId(req.params.thoughtId))
          .then((thought) =>
              !thought  
                ? res.status(404).json({ message: "No thought found with that ID" })
                : res.json({ message: "Thought deleted!"})
          )
          .catch ((err) => res.status(500).json(err));
    },
    createReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought found with that ID' })
              : res.json(thought)       
          )
          .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought found with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
      }
}

// GET to get all thoughts
// GET to get a single thought by its _id
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id

// Endpoint: /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value