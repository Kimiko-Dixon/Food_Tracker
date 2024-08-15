const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class FoodInMeal extends Model{}

FoodInMeal.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        food_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'food',
                key:'id'
            }
        },
        meal_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'meal',
                key:'id'
            }
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName:'food_in_meal'

    }
)

module.exports = FoodInMeal