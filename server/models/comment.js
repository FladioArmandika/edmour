const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const CommentSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    body: {
        type: String,
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    children: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});


module.exports = mongoose.model('Comment', CommentSchema);

