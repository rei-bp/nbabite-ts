'use strict';
import {
  Model
} from 'sequelize'

interface avgStatsAttributes {
  playerId: string,
  year: number,
  min: string,
  gp: number,
  fgm: number,
  fga: number,
  fg3m: number,
  fg3a: number,
  ftm: number,
  fta: number,
  oreb: number,
  dreb: number,
  reb: number,
  ast: number,
  stl: number,
  blk: number,
  tov: number,
  pf: number,
  pts: number,
  fg_pct: number,
  fg3_pct: number,
  ft_pct: number
}


module.exports = (sequelize: any, DataTypes: any) => {
  class avgstats extends Model <avgStatsAttributes>
  implements avgStatsAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     playerId: string
     year: number
     min: string
     gp: number
     fgm: number
     fga: number
     fg3m: number
     fg3a: number
     ftm: number
     fta: number
     oreb: number
     dreb: number
     reb: number
     ast: number
     stl: number
     blk: number
     tov: number
     pf: number
     pts: number
     fg_pct: number
     fg3_pct: number
     ft_pct: number
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

