const Sequelize = require('sequelize')
const sequelize = require('../config/config')


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
    }
})
User.sync()
module.exports = User