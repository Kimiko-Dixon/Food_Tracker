/* const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Food extends Model{
    calculateCals(protien,carbs,fat){
        const proteinCals = protien * 4
        const carbCals = carbs * 4
        const fatCals = fat * 9

        return (proteinCals + carbCals + fatCals)
    }
}

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
        hooks:{
            beforeCreate: (foodData) => {
                const proteinCals = foodData.protien * 4
                const carbCals = foodData.carbs * 4
                const fatCals = foodData.fat * 9
                foodData.calories = proteinCals + carbCals + fatCals
                return foodData
            },
            beforeBulkCreate: (foodData) => {
                const proteinCals = foodData.protien * 4
                const carbCals = foodData.carbs * 4
                const fatCals = foodData.fat * 9
                foodData.calories = proteinCals + carbCals + fatCals
                return foodData
            }
        }
    }
)

module.exports = Food */