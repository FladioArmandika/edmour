const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    city: {
        type: String,
    },
    grade: {
        type: String,
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'School',
    },
    interest: {
        type: String,
    },
    roles: {
        type: String,
        enum: ['student','instructor']
    },
    events: [
        {
            type: Schema.Types.ObjectId,
            ref:'Event'
        }
    ]
})

module.exports = mongoose.model('User', UserSchema);