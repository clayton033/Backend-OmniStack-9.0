const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({

    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }

});

//criando o model BOOKING
module.exports = mongoose.model('Booking', BookingSchema);