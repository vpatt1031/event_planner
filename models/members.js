// eslint-disable-next-line no-undef
module.exports = function(sequelize, DataTypes) {
  var Members = sequelize.define("Members", {
      name: {
          type: DataTypes.STRING,
          description: DataTypes.TEXT,
          allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
        allowNull: false
      }
  })

  return Members
}
  