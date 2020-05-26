'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(  // or updateColumn
      'Tracks',
      'artist_id',
      {
        type: Sequelize.DataTypes.INTEGER,  // reference the type of parent table
        references: {
          model: 'Artists', // name of Target table
          key: 'id', // key in Target table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tracks', 'artist_id')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
