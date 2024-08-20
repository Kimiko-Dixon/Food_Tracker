const { Portion } = require("../models");

const foodsPortions = [
  {
    food_name: "oats",
    portion: 40,
    protein: 5,
    carbs: 27,
    fat: 2.5,
    calories: 150,
  },
  {
    food_name: "fat free failife milk",
    portion: 240,
    protein: 13,
    carbs: 6,
    fat: 0,
    calories: 80,
  },
  {
    food_name: "date sugar",
    portion: 4,
    protein: 0,
    carbs: 4,
    fat: 0,
    calories: 16,
  },
  {
    food_name: "frozen blueberries",
    portion: 140,
    protein: 0.6,
    carbs: 17,
    fat: 1,
    calories: 77,
  },
  {
    food_name: "extra large egg",
    portion: 1,
    protein: 7,
    carbs: 0,
    fat: 5,
    calories: 73,
  },
  {
    food_name: "extra large egg",
    portion: 2,
    protein: 7,
    carbs: 0,
    fat: 5,
    calories: 73,
  },
];

const portionSeeds = () => Portion.bulkCreate(foodsPortions);

module.exports = portionSeeds;
