// backend/models/user.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Import the Sequelize instance

// Define the User model
const User = sequelize.define('User', {
      name: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      address: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      phone: {
            type: DataTypes.STRING,
            allowNull: false,
      },
});

module.exports = User;
