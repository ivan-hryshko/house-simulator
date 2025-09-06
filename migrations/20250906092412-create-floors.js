'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("floors", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      houseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'houses',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("floors");
  }
};
