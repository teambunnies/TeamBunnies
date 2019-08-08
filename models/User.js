const Sequelize = require('sequelize')
const sequelize = require('../config/config')
var bcrypt = require("bcryptjs");


const User = sequelize.define('user', {
    userId:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },firstName:{
        type: Sequelize.STRING
    },lastName:{
        type: Sequelize.STRING
    },email:{
        type: Sequelize.STRING
    },password:{
        type: Sequelize.STRING
    },originCountry:{
        type: Sequelize.STRING
    },myhash: {
        type: Sequelize.STRING
    },mysalt: {
        type: Sequelize.STRING},
})

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  retur
User.sync()
module.exports = User