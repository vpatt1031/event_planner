/* eslint-disable no-undef */
module.exports = function(sequelize, DataTypes) {
    var ScheduledEvents = sequelize.define("Scheduled Events", {
        name: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: true
        }, 
        description: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: true
        },
        vendors: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: true
        }
    })
  
    return ScheduledEvents
  }