const router = require("express").Router();
const { Food,Portion,Meal, Users, UserCreds } = require("../models");
const withAuth = require('../utils/auth.js');

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
//otherwise, render the 'login' template
  res.render('login');
});

router.get("/foods",withAuth, async (req, res) => {
  try {
    // if (!req.session.loggedIn) {
    //   res.redirect("/login);");
    //   return;
    // }

    // Get all foods and JOIN with user data
    const foodData = await Food.findAll({});

    // Serialize data so the template can read it
    const foods = foodData.map((food) => food.get({ plain: true }));

    console.log(foods)
    // Pass serialized data and session flag into template
    res.render("foods", {
      foods/* ,
      logged_in: req.session.logged_in, */
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/questionnaire", withAuth,async (req, res) => {
  res.render("questionnaire");
});
router.get("/",withAuth, async (req, res) => {
  let calsTracked = 0
  let proteinTracked = 0
  let carbsTracked = 0
  let fatTracked = 0
  const date = new Date().toJSON().slice(0,10)
    
  /* const isBreakfast = await Meal.findOrCreate({
    where:{
      meal_time:'Breakfast',
      userCred_id:req.session.userInfo.id,
      date:date
    },
    defaults:{},
    include:[{model:Portion}]
  })
  const isLunch = await Meal.findOrCreate({
    where:{
      meal_time:'Lunch',
      userCred_id:req.session.userInfo.id,
      date:date
    },
    defaults:{},
    include:[{model:Portion}]
  })
  const isDinner = await Meal.findOrCreate({
    where:{
      meal_time:'Dinner',
      userCred_id:req.session.userInfo.id,
      date:date
    },
    defaults:{},
    include:[{model:Portion}]
  })
  console.log(isBreakfast,isLunch,isDinner) */
  const isBreakfast = await Meal.findOne({
    include:[{model:Portion}],
    where:{
      userCred_id:req.session.userInfo.id,
      date:date,
      meal_time:'Breakfast'
    }
  })
  const isLunch = await Meal.findOne({
    include:[{model:Portion}],
    where:{
      userCred_id:req.session.userInfo.id,
      date:date,
      meal_time:'Lunch'
    }
  })
  const isDinner = await Meal.findOne({
    include:[{model:Portion}],
    where:{
      userCred_id:req.session.userInfo.id,
      date:date,
      meal_time:'Dinner'
    }
  })
  /* let meals=[]
  if(!loggedPortions){
    meals = await Meal.bulkCreate(
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
  }
  else{
    meals = loggedPortions.map(p => p.get({plain:true}))
  } */
  // const meals = loggedPortions.map(p => p.get({plain:true}))
  
  const foodStats = await Users.findOne({
    where:{
      creds_id:req.session.userInfo.id
    },
    include:[{model:UserCreds}]
  })
  
    const breakfast = isBreakfast.get({plain:true})
    breakfast.portions.forEach(async portion=>{
      calsTracked += parseInt(portion.calories)
      proteinTracked += parseInt(portion.protein)
      carbsTracked += parseInt(portion.carbs)
      fatTracked += parseInt(portion.fat)
      const foodPortion = await Food.findOne({
        where:{
          id:portion.food_id
        }
      })

      portion.food = foodPortion.get({plain:true})
  })
  
  const lunch = isLunch.get({plain:true})
    lunch.portions.forEach(async portion=>{
      calsTracked += parseInt(portion.calories)
      proteinTracked += parseInt(portion.protein)
      carbsTracked += parseInt(portion.carbs)
      fatTracked += parseInt(portion.fat)
      const foodPortion = await Food.findOne({
        where:{
          id:portion.food_id
        }
      })

      portion.food = foodPortion.get({plain:true})
    })

  
    const dinner = isDinner.get({plain:true})
    dinner.portions.forEach(async portion=>{
      calsTracked += parseInt(portion.calories)
      proteinTracked += parseInt(portion.protein)
      carbsTracked += parseInt(portion.carbs)
      fatTracked += parseInt(portion.fat)
      const foodPortion = await Food.findOne({
        where:{
          id:portion.food_id
        }
      })

      portion.food = foodPortion.get({plain:true})
    })
  
  
  const calsAndMacs = foodStats.get({plain:true})

  console.log(breakfast,lunch,dinner)

  /* meals.forEach(meal=>{
    meal.forEach(portion => {
      calsTracked += portion.calories
      proteinTracked += portion.protein
      carbsTracked += portion.carbs
      fatTracked += portion.fat
    })
  }) */
  const calsLeft = calsAndMacs.calorie_goal - calsTracked

  res.render("homepage",{
    breakfast:breakfast,
    lunch:lunch,
    dinner:dinner,
    username: req.session.userInfo.username,
    calorieGoal:calsAndMacs.calorie_goal,
    calsTracked:calsTracked,
    calsLeft:calsLeft,
    proteinTracked:proteinTracked,
    carbsTracked:carbsTracked,
    fatTracked:fatTracked,
    proteinGoal:calsAndMacs.protien_goal,
    carbGoal:calsAndMacs.carb_goal,
    fatGoal:calsAndMacs.fat_goal
  });
});

// router.get('/login', async (req, res) => {
//   res.render('login')
// })

module.exports = router;
