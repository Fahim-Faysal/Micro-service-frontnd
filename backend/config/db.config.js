// backend/config/db.config.js
require('dotenv').config(); // Load environment variables from .env file

const Sequelize = require('sequelize');

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(
      process.env.DB_NAME, // Database name
      process.env.DB_USER, // Database user
      process.env.DB_PASSWORD, // Database password
      {
            host: process.env.DB_HOST, // Database host
            port: process.env.DB_PORT || 3306, // Database port, default to 3306
            dialect: 'mysql', // Database dialect
            logging: false, // Disable logging; set true for SQL logging
      }
);

// Test the database connection
sequelize
      .authenticate()
      .then(() => {
            console.log('Connection to the database has been established successfully.');
      })
      .catch((error) => {
            console.error('Unable to connect to the database:', error);
      });

module.exports = sequelize;
