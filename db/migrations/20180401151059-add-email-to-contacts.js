'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
     'Contacts',
     'email',
    Sequelize.STRING
   );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Contacts',
      'email'
    );
  }
};
