/* eslint-disable no-undef */
module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
        title: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: false
        }, 
        description: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: false
        },
        vendors: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: false
        }
    })
  
    return Events
  }