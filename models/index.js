// const Food = require('./food')
const Person = require('./person')
const Meal = require('./meal')
const PortionInMeal = require('./portionInMeal')
const Portion = require('./portion')
const CustomMeal = require('./customMeal')
const PortionInCustomMeal = require('./portionInCustomMeal')

Meal.belongsToMany(Portion,{
    through:PortionInMeal,
    foreignKey:'meal_id'
})
Portion.belongsToMany(Meal,{
    through:PortionInMeal,
    foreignKey:'portion_id'
})

CustomMeal.belongsToMany(Portion,{
    through:PortionInCustomMeal,
    foreignKey:'custom_meal_id'
})
Portion.belongsToMany(CustomMeal,{
    through:PortionInCustomMeal,
    foreignKey:'portion_id'
})

Person.hasMany(Meal,{
    foreignKey: 'person_id'
})

Meal.belongsTo(Person,{
    foreignKey: 'person_id'
})

Person.hasMany(CustomMeal,{
    foreignKey: 'person_id'
})

CustomMeal.belongsTo(Person,{
    foreignKey: 'person_id'
})

/* Food.hasMany(Portion,{
    foreignKey:'portion_id'
})

Portion.belongsTo(Food,{
    foreignKey:'portion_id'
}) */

module.exports = {/*Food,*/Person,Meal,Portion,PortionInMeal,CustomMeal,PortionInCustomMeal}