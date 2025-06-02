'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Laptop',
        price: 1200,
        description: 'High-end laptop',
        providerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Smartphone',
        price: 800,
        description: 'Latest model smartphone',
        providerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monitor',
        price: 300,
        description: '24-inch Full HD monitor',
        providerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Teclado Mecánico',
        price: 150,
        description: 'Teclado mecánico retroiluminado',
        providerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};