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
        name:{
            type:DataTypes.STRING,
            allowNull:false,
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