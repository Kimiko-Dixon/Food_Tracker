const sequelize = require("../config/connection");
const foodSeeds = require("./foods");

const seed = async () => {
  await sequelize.sync({ force: true });
  await foodSeeds();
  process.exit(0);
};

seed();