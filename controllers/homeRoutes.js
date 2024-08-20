const router = require('express').Router();
const { Food } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

   // create get for this 3rd-party-API https://developer.edamam.com/edamam-docs-nutrition-api


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

