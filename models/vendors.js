/* eslint-disable no-undef */
module.exports = function(sequelize, DataTypes) {
    var Vendors = sequelize.define("Vendors", {
        name: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: true
        }
    })
  
    return Vendors
  }