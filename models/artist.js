'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    artist_name: DataTypes.STRING
  }, {});
  Artist.associate = function (models) {
    // associations can be defined here
    Artist.hasMany(models.Album, { foreignKey: 'artist_id' });
  };
  return Artist;
};