'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produks', [
      { nama_produk: 'Produk 1', slug: 'produk-1', harga: 100, deskripsi: 'Deskripsi produk 1', foto: 'gambar1.jpg', stok: 50, id_kategori: 1 },
      { nama_produk: 'Produk 2', slug: 'produk-2', harga: 150, deskripsi: 'Deskripsi produk 2', foto: 'gambar2.jpg', stok: 30, id_kategori: 2 },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produks', null, {});
  }
};
