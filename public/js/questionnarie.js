const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express
const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize Sequelize for PostgreSQL
const sequelize = new Sequelize('postgres://username:password@localhost:3001/questionnaire_db');

// Define the User model
const User = sequelize.define('User', {
  height: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sync with the database
sequelize.sync()
  .then(() => console.log('Database & tables created!'))
  .catch(err => console.error('Failed to sync database:', err));

// Handle form submission
app.post('/submit', async (req, res) => {
  try {
    const { height, weight, age, gender } = req.body;
    const newUser = await User.create({ height, weight, age, gender });
    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});