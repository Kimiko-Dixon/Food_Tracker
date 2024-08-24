const sequelize = require("../config/connection");
const portionSeeds = require("./portion");
const peopleSeeds = require("./person");
const mealSeeds = require("./meal");
const portionInMealSeeds = require("./portionInMeal");
const customMealSeeds = require("./customMeal");
const portionInCustomMeal = require("./portionInCustomMeal");

const seed = async () => {
  await sequelize.sync({ force: true });
  await portionSeeds();
  process.exit(0);
};

seed();