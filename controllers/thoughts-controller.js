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
    addThought({ body }, res) {
        Thoughts.create(body)
            .then((ThoughtData) => {
                return User.findOneAndUpdate(
                    //create a thought using current user
                    {_id: body.userId 
                    }, {
                        $addToSet: {
                            thoughts: ThoughtData._id
                        }
                    }, {
                        new: true
                    }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({
                        message: 'No user found with that id.'
                    });
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    
};


module.exports = thoughtsController;