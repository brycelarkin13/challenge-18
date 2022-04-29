const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        //char length
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
})