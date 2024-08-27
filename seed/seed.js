const sequelize = require('../config/connection')
const foodSeeds = require('./foods')

//Seed the database
const seed = async () => {
    await sequelize.sync({ force: true })
    await foodSeeds()
    process.exit(0)
}

seed()
