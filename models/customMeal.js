const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class CustomMeal extends Model{}

CustomMeal.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
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
        modelName:'custom_meal'

    }
)

module.exports = CustomMeal