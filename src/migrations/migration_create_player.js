'use strict';
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('players', {
         playerID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         email: { type: Sequelize.STRING, allowNull: false },
         password: { type: Sequelize.STRING, allowNull: false },
         name: { type: Sequelize.STRING, allowNull: false },
         point: { type: Sequelize.INTEGER, allowNull: true },
         createdAt: { allowNull: false, type: Sequelize.DATE },
         updatedAt: { allowNull: false, type: Sequelize.DATE },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('players');
   },
};
