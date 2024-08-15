const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Day extends Model{}

Day.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        date:{
            type:DataTypes.DATEONLY
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName:'day'

    }
)

module.exports = Day