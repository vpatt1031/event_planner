// eslint-disable-next-line no-undef
module.exports = function(sequelize, DataTypes) {
    var Roles = sequelize.define("Roles", {
        name: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: false
        }
    })
  
    return Roles
  }