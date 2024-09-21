const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user');

const Address = sequelize.define('Address', {
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false  // Disable createdAt and updatedAt
});

User.hasMany(Address);
Address.belongsTo(User);

module.exports = Address;
