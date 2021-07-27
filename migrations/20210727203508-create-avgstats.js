'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('avgstats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerId: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      min: {
        type: Sequelize.STRING
      },
      gp: {
        type: Sequelize.INTEGER
      },
      fgm: {
        type: Sequelize.FLOAT
      },
      fga: {
        type: Sequelize.FLOAT
      },
      fg3m: {
        type: Sequelize.FLOAT
      },
      fg3a: {
        type: Sequelize.FLOAT
      },
      ftm: {
        type: Sequelize.FLOAT
      },
      fta: {
        type: Sequelize.FLOAT
      },
      oreb: {
        type: Sequelize.FLOAT
      },
      dreb: {
        type: Sequelize.FLOAT
      },
      reb: {
        type: Sequelize.FLOAT
      },
      ast: {
        type: Sequelize.FLOAT
      },
      stl: {
        type: Sequelize.FLOAT
      },
      blk: {
        type: Sequelize.FLOAT
      },
      tov: {
        type: Sequelize.FLOAT
      },
      pf: {
        type: Sequelize.FLOAT
      },
      pts: {
        type: Sequelize.FLOAT
      },
      fg_pct: {
        type: Sequelize.FLOAT
      },
      fg3_pct: {
        type: Sequelize.FLOAT
      },
      ft_pct: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('avgstats');
  }
};