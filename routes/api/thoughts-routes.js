const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    getThoughById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller');

module.exports = router;