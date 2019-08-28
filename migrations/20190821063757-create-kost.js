'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('kosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      latitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      longitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['PUTRA', 'PUTRI', 'CAMPUR']
      },
      long: {
        allowNull: false,
        type: Sequelize.STRING
      },
      wide: {
        allowNull: false,
        type: Sequelize.STRING
      },
      totalRoom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      emptyRoom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      facilities: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      bathroom: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['LUAR', 'DALAM']
      },
      image1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image2: {
        type: Sequelize.STRING
      },
      image3: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('kosts');
  }
};