const {DataTypes} = require('sequelize');
const {openSequelizeConnection} = require('../db/connection');

const Actor = openSequelizeConnection.define("Actor",{
    name: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rating: {
        type: DataTypes.INTEGER
    }
},
{timestamps: false});

module.exports = Actor;