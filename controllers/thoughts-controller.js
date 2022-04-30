const { Thoughts, User } = require('../models');

const thoughtsController = {
     //get all thoughts
     getAllThoughts(req, res) {
        Thoughts.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(404).json(err);
            });
    },
    
};


module.exports = thoughtsController;