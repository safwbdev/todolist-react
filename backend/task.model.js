const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Task = new Schema({
    task_description: {
        type: String
    },
    due_date: {
        type: String
    },
    task_completed: {
        type: Boolean
    },
    date_completed: {
        type: String
    },
    task_deleted: {
        type: Boolean
    }
});

module.exports = mongoose.model('Task', Task);