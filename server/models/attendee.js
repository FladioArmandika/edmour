const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;


const AttendeeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    dateJoin: {
        type: Schema.Types.Date,
    }
})



module.exports = mongoose.model('Attendee',AttendeeSchema);