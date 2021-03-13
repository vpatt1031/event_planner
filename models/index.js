'use strict';

import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';
var basename  = _basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js')[env];
var db        = {};

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL, {});
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    var model = require(join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;