// routes/SOSRoutes.js
const router = require('express').Router();
const SOSController = require('../controllers/SOS');

// Route to submit SOS
router.post('/submit', SOSController.submitSOS);

// Route to update SOS status
router.put('/update/:id', SOSController.updateSOSStatus);

// Route to get all SOS submissions
router.get('/getAll', SOSController.getAllSOS);

module.exports = router;
