const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const SchoolSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    grade: {
        type: String,
    },
    city: {
        type: String,
    },
})

module.exports = mongoose.model('School', SchoolSchema);