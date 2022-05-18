const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');

//  /api/thoughts 
router
.route('/')
.get(getAllThoughts);

// /api/thoughts/:userId 
router
.route('/:userId')
.post(addThought);

//  /api/thoughts/:id <GET, PUT, DELETE>
//router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought); 

// /api/thoughts/:thoughtId/reactions <POST>
//router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactionId <DELETE>
//router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;