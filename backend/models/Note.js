const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
    },
    content: {
        type: String,
        required: [true, 'Please add content'],
    },
    tags: {
        type: [String],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;