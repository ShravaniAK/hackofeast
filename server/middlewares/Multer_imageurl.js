const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Function to configure multer storage for file uploads
const configureMulterStorage = () => {
    // Check if the 'uploads' directory exists, and create it if it doesn't
    const uploadsDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir);
    }

    // Configure multer storage
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadsDir); // Specify the directory where uploaded files should be stored
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname); // Specify the file name for uploaded files
        }
    });

    // Create and return multer instance with configured storage
    return multer({ storage: storage });
};

module.exports = {
    configureMulterStorage
};
