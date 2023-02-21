'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dog.hasMany(models.Feeding, {
        foreignKey: 'dogId',
        as: 'feedings'
      })
      
    }
  }
  Dog.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};