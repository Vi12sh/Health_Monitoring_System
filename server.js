const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const helmet = require('helmet'); // Import Helmet for security
const errorHandler = require('./middleware/errorHandler'); // Custom error handler

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(helmet()); // Use helmet for setting secure HTTP headers
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sensor', require('./routes/sensorRoutes'));

app.get('/', (req, res) => {
  res.send('Welcome to the Sensor Data API!');
});

// Error handling middleware (this should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
