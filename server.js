//Import packages
const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const session = require('express-session')
const Store = require('connect-session-sequelize')(session.Store)

//Import database connection and routes
const sequelize = require('./config/connection')
const routes = require('./controllers')

const app = express()
const PORT = process.env.PORT || 3001

//Create session
const sess = {
    secret: process.env.SECRET,
    cookies: {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
    },
    resave: false,
    saveUninitialized: true,
    storage: new Store({
        db: sequelize,
    }),
}

app.use(session(sess))

//Handlebars setup
const hbs = handlebars.create({})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
})
