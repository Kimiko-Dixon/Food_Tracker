const router = require('express').Router()
const {
    Meal,
    Portion,
    Food,
    PortionInMeal,
    PortionInCustomMeal,
    CustomMeal,
    Users,
} = require('../../models')

/* router.post('/portionInCustomMeal', async (req, res) => {
    try {
      const allPortions = req.body.selectedIds.map(id => {
        
        return {
          portion_id:id,
          custom_meal_id:req.body.customMealId
          }
        
      })
    //bulk create
      const portionInCustomMeal = await PortionInCustomMeal.bulkCreate({
        allPortions
      })
      /* const portionInCustomMeal = await PortionInCustomMeal.create({
        ...req.body,
      });
      res.status(200).json(portionInCustomMeal);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.post('/createCustomMeal', async (req, res) => {
    try {
      const customMeal = await CustomMeal.create({
        ...req.body,
        person_id: req.session.id,
      });
      res.render('meals',customMeal)
      // res.status(200).json(customMeal);
    } catch (err) {
      res.status(400).json(err);
    }
}); */

//Find or create breakfast,lunch, and dinner meals for the current day
router.post('/createMeals', async (req, res) => {
    try {
        const createBreakfast = await Meal.findOrCreate({
            where: {
                meal_time: 'Breakfast',
                userCred_id: req.session.userInfo.id,
                date: req.body.date,
            },
            defaults: {},
            include: [{ model: Portion }],
        })
        const createLunch = await Meal.findOrCreate({
            where: {
                meal_time: 'Lunch',
                userCred_id: req.session.userInfo.id,
                date: req.body.date,
            },
            defaults: {},
            include: [{ model: Portion }],
        })
        const createDinner = await Meal.findOrCreate({
            where: {
                meal_time: 'Dinner',
                userCred_id: req.session.userInfo.id,
                date: req.body.date,
            },
            defaults: {},
            include: [{ model: Portion }],
        })

        res.status(200).json(createBreakfast, createLunch, createDinner)
    } catch {
        res.status(500).json('failed to create meals')
    }
})

//Save meal id for when adding food to the meal selected
router.post('/saveMealId', async (req, res) => {
    try {
        req.session.meal = req.body.mealId
        res.status(200).json()
    } catch {
        res.status(500).json('failed to save meal Id')
    }
})

/* router.post('/search', async (req, res) => {
  try{
    const searchedFood = await Food.findOne({
      where:{
        name:req.body.searchTerm
      }
    })
    res.status(200).json(searchedFood)
  }
  catch{
    res.status(500).json('failed to search for food')
  }
}) */

//Create serving size portion for the selected food
router.post('/standard', async (req, res) => {
    try {
        //find food by id
        const food = await Food.findOne({
            where: {
                id: req.body.id,
            },
        })
        //create a portion that has the same values
        const portion = await Portion.create({
            portion: food.serving_size,
            protein: food.protein,
            carbs: food.carbs,
            fat: food.fat,
            calories: food.calories,
            food_id: req.body.id,
        })
        //create the relationship between the meal and the portion
        const addToMeal = await PortionInMeal.create({
            portion_id: portion.id,
            meal_id: req.session.meal,
        })

        res.status(200).json(food, portion, addToMeal)
    } catch {
        res.status(500).json('failed to create portion')
    }
})

module.exports = router
