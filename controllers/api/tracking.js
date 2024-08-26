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


router.post('/createMeals', async (req, res) => {
  try{

    const createBreakfast = await Meal.findOrCreate({
      where:{
        meal_time:'Breakfast',
        userCred_id:req.session.userInfo.id,
        date:req.body.date
      },
      defaults:{},
      include:[{model:Portion}]
    })
    const createLunch = await Meal.findOrCreate({
      where:{
        meal_time:'Lunch',
        userCred_id:req.session.userInfo.id,
        date:req.body.date
      },
      defaults:{},
      include:[{model:Portion}]
    })
    const createDinner = await Meal.findOrCreate({
      where:{
        meal_time:'Dinner',
        userCred_id:req.session.userInfo.id,
        date:req.body.date
      },
      defaults:{},
      include:[{model:Portion}]
    })

    /* const createMeals = await Meal.bulkCreate(
      {
        meal_time:'Breakfast',
        userCred_id:req.session.userInfo.id,
        date:req.body.date
      },
      {
        meal_time:'Lunch',
        userCred_id:req.session.userInfo.id,
        date:req.body.date
      },
      {
        meal_time:'Dinner',
        userCred_id:req.session.userInfo.id,
        date:req.body.date
      }
    ) */
      
  /* const isMeal = await Meal.findOrCreate({
    where:{
      meal_time:req.body.mealTime,
      userCred_id:req.session.userInfo.id,
      date:req.body.date
    },
    defaults:{},
    include:[{model:Portion}]
  }) */
  res.status(200).json(createBreakfast,createLunch,createDinner)

  /*console.log(isMeal)
  console.log(isMeal.dataValuess.id)
  const meal = isMeal.get({plain:true})
  console.log(meal.id)
   req.session.save(() => {
    req.session.meal = meal.id
    res.status(200).json(meal)
  }) */
    
  } 
  catch{
    res.status(500).json('failed to create meals')
  } 
  
})

router.post('/saveMealId', async (req, res) => {
  
  try{
    
      req.session.meal = req.body.mealId
      res.status(200).json()
  }
  catch{
    res.status(500).json('failed to save meal Id')
  }
  
})

// router.post('/createMeal', async (req, res) => {
    
// })

  //create portion
 // router.post('/portion', async (req, res) => {

 // })


// do /:id for foods,foodinfo, meals pages on homeRoutes
//create portion
router.post('/standard', async (req, res) => {
  try{

    const food = await Food.findOne({
      where:{
        id:req.body.id
      }
    })
    const portion = await Portion.create(
      /* {
        include:[{model:Meal}]
      }, */
      {
        portion:food.serving_size, 
        protein:food.protein,
        carbs:food.carbs,
        fat:food.fat,
        calories:food.calories,
        food_id:req.body.id
      }
    )
    const addToMeal = await PortionInMeal.create({
      portion_id:portion.id,
      meal_id:req.session.meal
    })
    // req.session.meal_id = req.params.id
    // req.session.portion_id = portion.id
    res.status(200).json(food,portion,addToMeal)
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

