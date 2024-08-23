const router = require('express').Router();
// const customMealRoutes = require('./customMealRoutes');
// const foodRoutes = require('./foodRoutes');
// const mealRoutes = require('./mealRoutes');
const personRoutes = require('./personRoutes');
const trackingRoute  = require('./tracking')
// const portionInCustomMealRoutes = require('./portionInCustomMealRoutes');
// const portionInMealRoutes = require('./portionInMealRoutes');
// const portionRoutes = require('./portionRoutes');

// router.use('/customMeal', customMealRoutes);
// router.use('/food', foodRoutes);
// router.use('/meal', mealRoutes);
router.use('/tracking', trackingRoute);
router.use('/person', personRoutes);
// router.use('/portionInCustomMeal', portionInCustomMealRoutes);
// router.use('/portionInMeal', portionInCustomMealRoutes);
// router.use('/portion', portionRoutes);

module.exports = router;
