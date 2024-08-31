// backend/server.js

const express = require('express');
const cors = require('cors');
const User = require('./models/user.model'); // Import your User model

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

app.use(cors({
      origin: 'http://localhost:3000', // Your frontend's origin
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));



app.get('/users', async (req, res) => {
      try {
            const users = await User.findAll(); // Assuming User is your Sequelize model
            res.status(200).json(users);
      } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ message: 'Failed to fetch users' });
      }
});

// POST /users route
app.post('/users', async (req, res) => {
      try {
            const { name, address, phone } = req.body;
            if (!name || !address || !phone) {
                  return res.status(400).json({ message: 'All fields are required' });
            }
            const user = await User.create({ name, address, phone });
            res.status(201).json(user);
      } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ message: 'Failed to create user', error: error.message });
      }
});




app.listen(3001, () => {
      console.log('Backend server is running on http://localhost:3001');
});
