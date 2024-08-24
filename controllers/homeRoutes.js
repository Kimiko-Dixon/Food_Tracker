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

    // Pass serialized data and session flag into template
    res.render("homepage", {
      foods,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/questionnaire", withAuth,async (req, res) => {
  res.render("questionnaire");
});

router.get("/",withAuth, async (req, res) => {
  const date = new Date().toJSON().slice(0,10)
  const loggedPortions = await Meal.findAll({
    include:[{model:Portion}],
    where:{
      userCred_id:req.session.userInfo.id,
      date:date
    }
  })
  let meals;
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
  }
  const foodStats = await Users.findOne({
    where:{
      creds_id:req.session.userInfo.id
    },
    include:[{model:UserCreds}]
  })
  const calsAndMacs = foodStats.get({plain:true})
  console.log(calsAndMacs)
  const calsTracked = 0
  const proteinTracked = 0
  const carbsTracked = 0
  const fatTracked = 0
  meals.forEach(meal=>{
    meal.forEach(portion => {
      calsTracked += portion.calories
      proteinTracked += portion.protein
      carbsTracked += portion.carbs
      fatTracked += portion.fat
    })
  })
  const calsLeft = calsAndMacs.calorie_goal - calsTracked

  res.render("homepage",{
    meals:meals,
    username: calsAndMacs.user_cred.username,
    calorieGoal:calsAndMacs.calorie_goal,
    calsTracked:calsTracked,
    calsLeft:calsLeft,
    proteinTracked:proteinTracked,
    carbsTracked:carbsTracked,
    fatTracked:fatTracked
  });
});

// router.get('/login', async (req, res) => {
//   res.render('login')
// })

module.exports = router;
