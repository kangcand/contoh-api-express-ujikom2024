'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {

    static associate(models) {
      Produk.belongsTo(models.Kategori, { foreignKey: 'id_kategori' });
    }
  }
  Produk.init({
    nama_produk: DataTypes.STRING,
    slug: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    deskripsi: DataTypes.TEXT,
    foto: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    id_kategori: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};