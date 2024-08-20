const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class PortionInCustomMeal extends Model{}

PortionInCustomMeal.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        portion_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'portion',
                key:'id'
            }
        },
        custom_meal_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'custom_meal',
                key:'id'
            }
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName:'portion_in_custom_meal'

    }
)

module.exports = PortionInCustomMeal