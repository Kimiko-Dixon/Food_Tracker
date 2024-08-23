const router = require('express').Router();
const { Meal,Portion,Food,PortionInMeal,PortionInCustomMeal,CustomMeal } = require('../../models');

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


router.post('/createMeal', async (req, res) => {
  try{
    const meals = await Meal.bulkCreate(
      {
        meal_time:'Breakfast',
        person_id:req.session.userInfo.id
      },
      {
        meal_time:'Lunch',
        person_id:req.session.userInfo.id
      },
      {
        meal_time:'Dinner',
        person_id:req.session.userInfo.id
      }
    )

    res.status(500).json(meals)
  } 
  catch{
    res.status(500).json('failed to create meals')
  } 
  
})

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
      meal_id:req.session.portion_id
    })

    res.status(200).json(mealPortion)
  }
  catch{
    res.status(500).json('failed to add portion to meal')
  }
    
})

module.exports = router;

