const axios = require('axios');

// controllers/SOSController.js
const SOS = require('../models/SOS');

// Controller function to submit SOS
const submitSOS = async (req, res) => {
    try {
        // Assuming req.body contains other SOS submission data
        const { animalName, description, latitude, longitude, image } = req.body;

        // Make a POST request to /upload to upload the image
        const uploadResponse = await axios.post('http://localhost:3000/upload', { image }, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
            }
        });

        // Assuming the response contains the imageUrl
        const { imageUrl } = uploadResponse.data;

        // Save the SOS submission to the database with the imageUrl
        const newSOS = new SOS({ imageUrl, animalName, description, latitude, longitude, status: 'help wanted' });
        await newSOS.save();
        
        res.status(201).json({ success: true, message: 'SOS submission saved successfully.', imageUrl });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


// Controller function to update SOS status
const updateSOSStatus = async (req, res) => {
    try {
        const sosId = req.params.id;
        await SOS.findByIdAndUpdate(sosId, { status: 'done' });
        res.status(200).json({ success: true, message: 'SOS status updated successfully.' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Controller function to get all SOS submissions
const getAllSOS = async (req, res) => {
    try {
        const allSOS = await SOS.find();
        res.status(200).json({ success: true, data: allSOS });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { submitSOS, updateSOSStatus, getAllSOS };
