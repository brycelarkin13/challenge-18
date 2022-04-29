const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //get:createdAtVal => dataFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    //reactions: []
}, 
{
    toJSON: {
        virtuals:true,
        getters:true
    },
    id: false
}
);

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;