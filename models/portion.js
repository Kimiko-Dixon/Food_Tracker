const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Portion extends Model{}

Portion.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        food_name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        portion:{
            type:DataTypes.INTEGER,
            defaultValue: 1
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
/*         food_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'food',
                key: 'id'
            }
        } */
        
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName:'portion'

    }
)

module.exports = Portion