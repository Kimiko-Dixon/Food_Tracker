const { CustomMeal } = require("../models");

const meals = [
  {
    name: "oatmeal and eggs",
    person_id: 1,
  },
  {
    name: "oatmeal and egg",
    person_id: 2,
  },
  {
    name: "oatmeal and eggs",
    person_id: 3,
  },
  {
    name: 'random foods 1',
    person_id: 4,
  },
  {
    name: 'random foods 2',
    person_id: 1,
  },
];

const customMealSeeds = () => CustomMeal.bulkCreate(meals);

module.exports = customMealSeeds;
