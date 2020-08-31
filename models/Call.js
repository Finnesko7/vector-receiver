const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const Call = sequelize.define('call', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        notNull: true
    },
    phoneFrom: {
        type: DataTypes.STRING,
        length: 50,
        notNull: true
    },
    phoneTo: {
        type: DataTypes.STRING,
        length: 50,
        notNull: true
    },
    recordLink: {
        type: DataTypes.STRING,
        notNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        notNull: false,
        defaultValue: null
    },
    processed: DataTypes.BOOLEAN
}, {
    paranoid: false,
    timestamps: false
})

module.exports = Call;