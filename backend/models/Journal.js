const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    'title': {
        type: String,
        required: [true, 'Please add a title'],
    },
    'content': {
        type: String,
        required: [true, 'Please add content'],
    },
    'tags': {
        type: [String],
    },
    'userId': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    'createdAt': {
        type: Date,
        default: Date.now,
    },
});


const Journal = mongoose.model('Journal', JournalSchema);

module.exports = Journal;