const { Thoughts, User } = require('../models');

const thoughtsController = {
     //get all thoughts
     getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    
};


module.exports = thoughtsController;