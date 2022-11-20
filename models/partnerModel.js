
// 'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define("partners", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING
    },
    pengalaman: {
      type: DataTypes.STRING,
    },
    pendidikan: {
      type: DataTypes.STRING,
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
    },
    asal_kota: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
    deskripsi: { type: DataTypes.STRING }

  }, {
    tableName: 'partners'
  })

  return Partner
};

