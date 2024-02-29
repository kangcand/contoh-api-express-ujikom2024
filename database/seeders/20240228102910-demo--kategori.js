'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kategoris', [
      { nama: 'Elektronik', slug: 'elektronik' },
      { nama: 'Fashion', slug: 'fashion' },
      // tambahkan kategori lainnya
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategoris', null, {});
  }
};
