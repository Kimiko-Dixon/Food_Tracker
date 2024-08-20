const {PortionInCustomMeal} = require('../models')

const portionInCustomMeal = [
    {
        portion_id:1,
        custom_meal_id:1
    },
    {
        portion_id:2,
        custom_meal_id:1
    },
    {
        portion_id:3,
        custom_meal_id:1
    },
    {
        portion_id:4,
        custom_meal_id:1
    },
    {
        portion_id:6,
        custom_meal_id:1
    },
    {
        portion_id:1,
        custom_meal_id:5
    },
    {
        portion_id:2,
        custom_meal_id:5
    },
    {
        portion_id:3,
        custom_meal_id:5
    },
    {
        portion_id:4,
        custom_meal_id:5
    },
    {
        portion_id:6,
        custom_meal_id:5
    },
    {
        portion_id:1,
        custom_meal_id:2
    },
    {
        portion_id:2,
        custom_meal_id:2
    },
    {
        portion_id:3,
        custom_meal_id:2
    },
    {
        portion_id:4,
        custom_meal_id:2
    },
    {
        portion_id:5,
        custom_meal_id:2
    },
    {
        portion_id:1,
        custom_meal_id:3
    },
    {
        portion_id:2,
        custom_meal_id:3
    },
    {
        portion_id:3,
        custom_meal_id:3
    },
    {
        portion_id:4,
        custom_meal_id:3
    },
    {
        portion_id:6,
        custom_meal_id:3
    },
    {
        portion_id:1,
        custom_meal_id:4
    },
    {
        portion_id:2,
        custom_meal_id:4
    },
    {
        portion_id:3,
        custom_meal_id:4
    },
    {
        portion_id:4,
        custom_meal_id:4
    },
    {
        portion_id:5,
        custom_meal_id:4
    },
]

const portionInMealCustomSeeds = () => PortionInCustomMeal.bulkCreate(portionInCustomMeal)

module.exports = portionInMealCustomSeeds