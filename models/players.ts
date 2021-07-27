'use strict';
import {
  Model
} from 'sequelize'

interface playerAttributes {
  firstName: string,
  lastName: string,
  playerId: number,
  team: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class players extends Model<playerAttributes> 
    implements playerAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    firstName: string
    lastName: string
    playerId: number
    team: string
    static associate(models: any) {
      // define association here
    }
  };
  players.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    playerId: DataTypes.INTEGER,
    team: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'players',
  });
  return players;
};