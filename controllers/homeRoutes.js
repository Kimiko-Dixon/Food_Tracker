const router = require('express').Router();
const { Food } = require('../models');

//import middleware
const withAuth = require('./api/auth');

router.get('/foods', async (req, res) => {
  try {

    if (!req.session.loggedIn) {
      res.redirect('/login);');
      return

    }

    // Get all foods and JOIN with user data
    const foodData = await Food.findAll({
    
    });

    // Serialize data so the template can read it
    const foods = foodData.map((food) => food.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      foods, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/foodInfo', async (req, res) => {
  //render the food info page
})

router.get('/', async (req, res) => {
  res.render('homepage');
})

router.get('/login', async (req, res) => {
  //render the login
})

router.get('/meals', async (req, res) => {
  //render the meals page
})

router.get('/', async (req, res) => {
  //render the questionnare page
})
//page to add name for custom meal
router.get('/createCustomMeal', async (req, res) => {
    
});

module.exports = router;