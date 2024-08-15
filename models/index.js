const Day = require('./day')
const Food = require('./food')
const Person = require('./person')
const Meal = require('./meal')
const FoodInMeal = require('./foodInMeal')
const MealsInDay = require('./mealsInDay')

Meal.belongsToMany(Food,{
    through:FoodInMeal,
    foreignKey:'meal_id'
})
Food.belongsToMany(Meal,{
    through:FoodInMeal,
    foreignKey:'food_id'
})

Meal.belongsToMany(Day,{
    through:MealsInDay,
    foreignKey:'meal_id'
})
Day.belongsToMany(Meal,{
    through:MealsInDay,
    foreignKey:'day_id'
})

Person.belongsToMany(MealsInDay,{
    foreignKey: 'daily_cal_intake'
})

MealsInDay.hasOne(Person,{
    foreignKey: 'daily_cal_intake'
})

module.exports = {Day,Food,Person,Meal,MealsInDay,FoodInMeal}