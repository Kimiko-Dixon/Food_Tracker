const router = require('express').Router();
const { PortionInCustomMeal,CustomMeal } = require('../../models');

router.post('/portionInCustomMeal', async (req, res) => {
    try {

    //bulk create
      const portionInCustomMeal = await PortionInCustomMeal.create({
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
        person_id: req.session.person_id,
      });
      res.status(200).json(customMeal);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.post('/createMeal', async (req, res) => {
    
})

  //create portion
  router.post('/portion', async (req, res) => {

  })

/*   //create
  router.post('/portion', async (req, res) => {
    
  }) */

  //adding the portion to the meal
  router.post('/portionInMeal', async (req, res) => {
    
  })

  //remove portion from meal
  /* router.delete('/portionInMeal', async (req, res) => {
    
  }) */

  /* //delete portion
  router.delete('/portion', async (req, res) => {
    
  }) */