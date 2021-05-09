const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const db = require('../config/db')

const { Guest } = require('../models/guest');
const { Reservation } = require('../models/reservation');
const { Feedback } = require('../models/feedback');

// GET ALL GUESTS
router.get('/api/guests', (req, res) => {
    Guest.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// GET GUEST BY ID
router.get('/api/guest/:id', (req, res) => {
    Guest.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// ADD/REGISTER GUEST
router.post('/api/guest/add', (req, res) => {
    const guest = new Guest({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        address: req.body.address,
        contactNumber: req.body.contactNumber,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password
    });

    guest.save((err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'SUCCESSFULLY ADDED!', addGuest: data });
        } else {
            console.log(err);
        }
    });
});

// UPDATE GUEST DATA
router.put('/api/guest/update/:id', (req, res) => {
    const guest = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        address: req.body.address,
        contactNumber: req.body.contactNumber,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password
    };

    Guest.findByIdAndUpdate(req.params.id, { $set: guest }, { new: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'UPDATED SUCCESSFULLY!', updateGuest: data });
        } else {
            console.log(err);
        }
    });
});

// DELETE GUEST
router.delete('/api/guest/:id', (req, res) => {
    Guest.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'DELETED SUCCESSFULLY!', deleteGuest: data });
        } else {
            console.log(err);
        }
    });
});



router.get('/api/feedbacks', (req, res) => {
    Feedback.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/feedback/add', (req, res) => {
    const feedback = new Feedback({
        email: req.body.email,
        feedback: req.body.feedback
    });

    feedback.save((err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'SUCCESSFULLY ADDED!', addFeedback: data });
        } else {
            console.log(err);
        }
    });
});

router.delete('/api/feedback/:id', (req, res) => {
    Feedback.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'DELETED SUCCESSFULLY!', deleteFeedback: data });
        } else {
            console.log(err);
        }
    });
});

// GET ALL RESERVATIONS
router.get('/api/reservations', (req, res) => {
    Reservation.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// GET RESERVATION BY ID
router.get('/api/reservation/:id', (req, res) => {
    Reservation.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// ADD RESERVATION
router.post('/api/reservation/add', (req, res) => {
    const reservation = new Reservation({
        guestName: req.body.guestName,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        roomType: req.body.roomType
    });

    reservation.save((err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'SUCCESSFULLY ADDED!', addReservation: data });
        } else {
            console.log(err);
        }
    });
});

// UPDATE RESERVATION
router.put('/api/reservation/update/:id', (req, res) => {
    const reservation = {
        guestName: req.body.guestName,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        roomType: req.body.roomType
    };

    Reservation.findByIdAndUpdate(req.params.id, { $set: reservation }, { new: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'UPDATED SUCCESSFULLY!', updateReservation: data });
        } else {
            console.log(err);
        }
    });
});

// DELETE RESERVATION
router.delete('/api/reservation/:id', (req, res) => {
    Reservation.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'DELETED SUCCESSFULLY!', deleteReservation: data });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;