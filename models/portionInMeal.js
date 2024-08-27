const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')

class PortionInMeal extends Model {}

PortionInMeal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        portion_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'portion',
                key: 'id',
            },
        },
        meal_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'meal',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'portion_in_meal',
    }
)

module.exports = PortionInMeal
