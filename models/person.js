const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Person extends Model{}

Person.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        weight:{
            type: DataTypes.INTEGER,
        },
        calorie_goal:{
            type: DataTypes.INTEGER
        },
        weight_goal:{
            type: DataTypes.INTEGER
        },
        daily_cal_intake:{
            type: DataTypes.INTEGER,
            references:{
                model:'meals_in_day',
                key:'id'
            }
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName:'person'

    }
)

module.exports = Person