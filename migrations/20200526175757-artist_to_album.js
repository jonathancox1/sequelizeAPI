'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(  // or updateColumn
      'Albums',
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
    return queryInterface.removeColumn('Albums', 'artist_id')
  }
};
