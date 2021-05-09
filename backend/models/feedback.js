const mongoose = require('mongoose');

const Feedback = mongoose.model('Feedback', {
    email: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});

module.exports = { Feedback };