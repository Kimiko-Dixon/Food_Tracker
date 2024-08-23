const {Meal} = require('../models')

const meals = [
    {
        meal_time:'breakfast',
        date:'2024-08-18',
        person_id:1,
    },
    {
        meal_time:'breakfast',
        date:'2024-08-18',
        person_id:2,   
    },
    {
        meal_time:'breakfast',
        date:'2024-08-19',
        person_id:3,
    },
    {
        meal_time:'snack',
        date:'2024-08-1',
        person_id:4,
    },
    {
        meal_time:'breakfast',
        date:'2024-08-17',
        person_id:1,
    },
    {
        meal_time:'lunch',
        date:'2024-08-18',
        person_id:1,
    },
    {
        meal_time:'dinner',
        date:'2024-08-18',
        person_id:1,
    },
    
]

const mealSeeds = () => Meal.bulkCreate(meals)

module.exports = mealSeeds