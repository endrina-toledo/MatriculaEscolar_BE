// 'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
let config = require(__dirname + '/../config/config.js')[env];
const db = {};

const databases =  Object.keys(config.database)

for(let i=0; i<databases.length; i++){
  let database = databases[i]
  db[database]= new Sequelize(
    dbPath.database,
    dbPath.username,
    dbPath.password,
    dbPath
  )
}
fs.readdirSync(__dirname+'/rest')
.filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
.forEach(file => {
  var model =  db.rest.import(path.join(__dirname+'/rest',file));
  db[model.name]=model;
});


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;


// (async () => {
//   await sequelize.sync({force:false});
// })();
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;


