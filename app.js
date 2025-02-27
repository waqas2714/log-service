const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect("mongodb+srv://waqasali00123:baQ4pFoRpSOEmLS2@cluster0.1c8za.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('🟢 Connected to MongoDB'))
.catch(err => console.error('🔴 MongoDB connection error:', err));

app.use('/api/log', require('./routes/api.route'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
