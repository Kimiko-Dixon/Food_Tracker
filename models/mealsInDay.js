const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class MealsInDay extends Model{}

MealsInDay.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        meal_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'meal',
                key:'id'
            }
        },
        day_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'day',
                key:'id'
            }
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName:'meals_in_day'

    }
)

module.exports = MealsInDay