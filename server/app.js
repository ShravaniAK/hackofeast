// const cookieParser = require("cookie-parser");
const cors = require("cors");
const { default: helmet } = require("helmet");
const { Logger } = require("logger");
const morgan = require("morgan");

const express = require('express')
const app = express()

const mongoose = require("mongoose");
const connectWithDB = require("./config/dbConfig");
const server = require("http").createServer(app);

const { configureMulterStorage } = require('./middlewares/Multer_imageurl');

// Configure multer storage for file uploads
const upload = configureMulterStorage();

// Route to handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  // Check if file is present in the request
  if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  // File upload successful, send response with file details
  const imageUrl = req.file.path;
  res.status(200).json({ success: true, imageUrl });
});

// const connectDB = require('./db/connect')
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productsRouter = require('./routes/product')
const SOSRoutes = require('./routes/SOS');

// const notFoundMiddleware = require('./middleware/not-found');
// const errorMiddleware = require('./middleware/error-handler');

//middleware
// app.use(express.json()); //setting up express.json middleware: we're not going to use it in this program, but still writing this inorder to remember the general syntax

app.use(
    cors({
        origin: [
            "http://127.0.0.1:3000",
            "http://localhost:3000",
            'http://localhost:5173',
            'https://hackofeast.onrender.com',
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(helmet());
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
app.use(morgan('dev'));

// Use routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/product', productsRouter);
app.use('/sos', SOSRoutes);

// app.use('/order', orderRoutes);


//products route
// app.use('/api/v1/products', productsRouter);

// app.use(notFoundMiddleware);
// app.use(errorMiddleware);

const PORT = 3000;


// const start = async () => {
//     try{
//         await connectDB(process.env.MONGO_URI); //connectDB
//         app.listen(port, console.log(`Server is listening to port ${port}...`));
//     } catch (error) {
//         console.log(error);
//     }
// }

async function startServer() {
    try {
      // DB configuration
      await connectWithDB(
        "mongodb+srv://Mau2DB:formPWDisRJ@nodeexpressprojects.z7cbivc.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects"
      );
  
      server.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Error - " + error.message);
  
      await mongoose.connection.close();
      console.log("Database connection closed");
      console.log("Server is shutting down");
      process.exit();
    }
}
    startServer();

