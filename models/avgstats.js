'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avgstats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  avgstats.init({
    playerId: DataTypes.STRING,
    year: DataTypes.INTEGER,
    min: DataTypes.STRING,
    gp: DataTypes.INTEGER,
    fgm: DataTypes.FLOAT,
    fga: DataTypes.FLOAT,
    fg3m: DataTypes.FLOAT,
    fg3a: DataTypes.FLOAT,
    ftm: DataTypes.FLOAT,
    fta: DataTypes.FLOAT,
    oreb: DataTypes.FLOAT,
    dreb: DataTypes.FLOAT,
    reb: DataTypes.FLOAT,
    ast: DataTypes.FLOAT,
    stl: DataTypes.FLOAT,
    blk: DataTypes.FLOAT,
    tov: DataTypes.FLOAT,
    pf: DataTypes.FLOAT,
    pts: DataTypes.FLOAT,
    fg_pct: DataTypes.FLOAT,
    fg3_pct: DataTypes.FLOAT,
    ft_pct: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'avgstats',
  });
  return avgstats;
};