const Food = require('./food')
const Users = require('./users')
const UserCreds = require('./userCreds')
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

Users.hasMany(Meal,{
    foreignKey: 'Users_id'
})

Meal.hasMany(Users,{
    foreignKey: 'Users_id'
})

Users.hasMany(CustomMeal,{
    foreignKey: 'Users_id'
})

CustomMeal.belongsTo(Users,{
    foreignKey: 'Users_id'
})

Food.hasMany(Portion,{
    foreignKey:'portion_id'
})

Portion.belongsTo(Food,{
    foreignKey:'portion_id'
})

UserCreds.hasOne(Users,{
    foreignKey:'creds_id'
})

Users.belongsTo(UserCreds,{
    foreignKey:'creds_id'
})

module.exports = {Food,Users,UserCreds,Meal,Portion,PortionInMeal,CustomMeal,PortionInCustomMeal}