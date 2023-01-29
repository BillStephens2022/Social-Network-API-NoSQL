const router = require('express').Router();

// import functions from thoughtController
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Endpoint: /api/thoughts

router.route('/').get(getAllThoughts).post(createThought);

// Endpoint: /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Endpoint: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// Endpoint: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;