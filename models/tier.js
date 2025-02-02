'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tier.init({
    raidName: DataTypes.STRING,
    expansion: DataTypes.STRING,
    bossCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tier',
    tableName: 'tiers'
  });
  return Tier;
};