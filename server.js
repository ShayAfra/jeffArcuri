const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const cors = require('cors');
const MONGO_URI = process.env.MONGO_URI;

const app = express();
const PORT = 8181;

// Right after you initialize your express app:
app.use(cors());


mongoose.connect(MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB:", err));

app.get('/', (req, res) => {
   res.send('Hello, Comedian!');
});

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
