const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const EventSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    host: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dateCreated: {
        type: Schema.Types.Date,
    },
    status: {
        type: String,
    },
    capacity: {
        type: Schema.Types.Number
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
})

module.exports = mongoose.model('Event', EventSchema);