const { Food } = require("../models");

const foods = [
  {
    name: "oats",
    protein: 5,
    carbs: 27,
    fat: 2.5,
    calories: 150,
    serving_size:40,
    serving_unit:'g'
  },
  {
    name: "fat free failife milk",
    protein: 13,
    carbs: 6,
    fat: 0,
    calories: 80,
    serving_size:240,
    serving_unit:'g'
  },
  {
    name: "date sugar",
    protein: 0,
    carbs: 4,
    fat: 0,
    calories: 16,
    serving_size:4,
    serving_unit:'g'
  },
  {
    name: "frozen blueberries",
    protein: 0.6,
    carbs: 17,
    fat: 1,
    calories: 77,
    serving_size:140,
    serving_unit:'g'
  },
  {
    name: "extra large egg",
    protein: 7,
    carbs: 0,
    fat: 5,
    calories: 73,
    serving_size:1,
    serving_unit:'egg'
  },
];

const foodSeeds = () => Food.bulkCreate(foods);

module.exports = foodSeeds;
