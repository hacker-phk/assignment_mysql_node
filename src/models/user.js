const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false  // Disable createdAt and updatedAt
});

module.exports = User;
