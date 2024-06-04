// 配置Sequelize连接
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('anbao', 'root', '1210', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
