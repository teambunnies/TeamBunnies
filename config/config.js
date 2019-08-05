const Sequelize = require('sequelize')

var sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PW,
{
  
      "host": process.env.MYSQL_HOST,
      "port": 3306,
      "dialect": "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
  
  });
  
  module.exports = sequelize