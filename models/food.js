const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Food extends Model{}

Food.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        protein:{
            type: DataTypes.DECIMAL,
            allowNull:false
        },
        carbs:{
            type: DataTypes.DECIMAL,
            allowNull:false
        },
        fat:{
            type: DataTypes.DECIMAL,
            allowNull:false
        },
        calories:{
            type: DataTypes.DECIMAL,
            allowNull:false
        },
        serving_size:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        serving_unit:{
            type:DataTypes.STRING(15)
        }

    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName:'food',
    }
)

module.exports = Food