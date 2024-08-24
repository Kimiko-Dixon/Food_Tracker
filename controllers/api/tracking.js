const router = require('express').Router();
const fitnessCalculator = require('fitness-calculator')
const { Meal,Portion,Food,PortionInMeal,PortionInCustomMeal,CustomMeal,Users} = require('../../models');

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


/* router.post('/createMeal', async (req, res) => {
  try{
    const isMeals = await Meal.findAll({
      where:{
        userCred_id:req.session.userInfo.id,
        date:today
      }
    })

    if(!isMeals){
      const meals = await Meal.bulkCreate(
        {
          meal_time:'Breakfast',
          userCred_id:req.session.userInfo.id
        },
        {
          meal_time:'Lunch',
          userCred_id:req.session.userInfo.id
        },
        {
          meal_time:'Dinner',
          userCred_id:req.session.userInfo.id
        }
      )
      res.status(200).json(meals)
      return
    }

    res.status(200).json(isMeals)
    
  } 
  catch{
    res.status(500).json('failed to create meals')
  } 
  
}) */

// router.post('/createMeal', async (req, res) => {
    
// })

  //create portion
 // router.post('/portion', async (req, res) => {

 // })


// do /:id for foods,foodinfo, meals pages on homeRoutes
//create portion
router.post('/:id/portion', async (req, res) => {
  try{
    const portion = await Portion.create(
      /* {
        include:[{model:Meal}]
      }, */
      {
        portion:req.body.portion, 
        protein:req.body.protein,
        carbs:req.body.carbs,
        fat:req.body.fat,
        calories:req.body.calories,
        food_id:req.body.food_id
      }
    )
    // req.session.meal_id = req.params.id
    req.session.portion_id = portion.id
    res.status(200).json(portion)
  }
  catch{
    res.status(500).json('failed to create portion')
  }
})

  //adding the portion to the meal

router.post('/:id/portionInMeal', async (req, res) => {
  try{
    const mealPortion = PortionInMeal.create({
      portion_id:req.params.id/* req.session.meal_id */,
      meal_id:/* req.session.portion_id */'?'
    })

    res.status(200).json(mealPortion)
  }
  catch{
    res.status(500).json('failed to add portion to meal')
  }
    
})

router.post('/questionnaire', async (req, res) => {
  try{
    /* const bmrstats = {
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
      woman: req.body.isWoman,
    };
    const bmr = nutrition.bmr(bmrstats)
    const calorieGoal = nutrition.dailyCalories({
      bmr: bmr,
      exerciseType: req.body.exerciseIntensity,
    }); */
    /* const calorieResults = fitnessCalculator.calorieNeeds(req.body.gender,req.body.age,req.body.height,req.body.weight,req.body.exerciseIntensity)
    const calorieGoal = calorieResults.balance */
  
    const userStats = await Users.create({
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
      gender: req.body.gender,
      exercise_intensity:req.body.exerciseIntensity,
      calorie_goal:req.body.calorieGoal,
      protien_goal:req.body.protienGoal,
      carb_goal: req.body.carbGoal,
      fat_goal:req.body.fatGoal,
      creds_id:req.session.userInfo.id
    })

    res.status(200).json(userStats)
  }
  catch{
    res.status(500).json('failed to create Users')
  }
  
})

module.exports = router;

