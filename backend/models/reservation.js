const mongoose = require('mongoose');

const Reservation = mongoose.model('Reservation', {
    guestName: {
        type: String,
        required: true
    },
    checkin: {
        type: String,
        required: true
    },
    checkout: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    }
});

module.exports = { Reservation };