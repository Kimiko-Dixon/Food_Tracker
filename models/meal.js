const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')

class Meal extends Model {}

Meal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        meal_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userCred_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user_creds',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'meal',
    }
)

module.exports = Meal
