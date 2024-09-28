const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'low'
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
