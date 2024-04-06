// models/SOS.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sosSchema = new Schema({
    imageURL: {
        type: String,
        required: true
    },
    animalName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'help wanted'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SOS', sosSchema);
