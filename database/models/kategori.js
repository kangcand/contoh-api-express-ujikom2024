'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {

    static associate(models) {
      Kategori.hasMany(models.Produk, { foreignKey: 'id_kategori' });
    }
  }
  Kategori.init({
    nama: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kategori',
  });
  return Kategori;
};