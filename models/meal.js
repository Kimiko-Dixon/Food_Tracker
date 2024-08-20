const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Meal extends Model{}

Meal.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        date:{
            type: DataTypes.DATEONLY,
            allowNull:false
        },
        meal_time:{
            type: DataTypes.STRING,
            allowNull:false
        },
        person_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'person',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName:'meal'

    }
)

module.exports = Meal