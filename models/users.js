'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    usu_id:{
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usu_email: {
      type:DataTypes.STRING,
      allowNull: false,
    }, 
    usu_password: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    usu_first_name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    usu_last_name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    usu_avatar: {
      type:DataTypes.STRING
    }
    ,
    usu_status: {
      type:DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};