const Sequelize = require('sequelize');

const sequelize = new Sequelize('project1', 'root', '0987654321', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
