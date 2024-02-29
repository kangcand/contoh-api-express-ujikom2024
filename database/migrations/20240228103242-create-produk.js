'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_produk: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.INTEGER
      },
      deskripsi: {
        type: Sequelize.TEXT
      },
      foto: {
        type: Sequelize.STRING
      },
      stok: {
        type: Sequelize.INTEGER
      },
      id_kategori: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kategoris',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produks');
  }
};