'use strict';
module.exports = (sequelize, DataTypes) => {
  const kost = sequelize.define('kost', {
    title: DataTypes.STRING,
    address: DataTypes.TEXT,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM,
      values: ['PUTRA', 'PUTRI', 'CAMPUR']
    },
    long: DataTypes.STRING(10),
    wide: DataTypes.STRING(10),
    totalRoom: DataTypes.INTEGER,
    emptyRoom: DataTypes.INTEGER,
    price: DataTypes.BIGINT,
    facilities: DataTypes.TEXT,
    bathroom: {
      type: DataTypes.ENUM,
      values: ['LUAR', 'DALAM']
    },
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    image3: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  kost.associate = function(models) {
    // associations can be defined here
  };
  return kost;
};