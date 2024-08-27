const Sequelize = require('sequelize')
require('dotenv').config()

//Connection with database
let sequelize

//For deployed application
if (process.env.DB_URL) {
    sequelize = new Sequelize(process.env.DB_URL)
}
//For local use
else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
        }
    )
}

module.exports = sequelize
