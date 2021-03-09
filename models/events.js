module.exports = (sequelize, DataTypes) => {
    const event = sequelize.define('Event', {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN,
    });
    return event;
  };