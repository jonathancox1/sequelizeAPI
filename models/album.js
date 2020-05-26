'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    album_name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.belongsTo(models.Artist, { foreignKey: 'artist_id' });
    Album.hasMany(models.Track, { foreignKey: 'album_id' });
  };
  return Album;
};