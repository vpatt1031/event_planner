export default function(sequelize, DataTypes) {
  var Donut = sequelize.define("Donut", {
      name: {
          type: DataTypes.STRING,
          description: DataTypes.TEXT,
          allowNull: false
      }
  })

  return Donut
}
  