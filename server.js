const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const session = require("express-session");
const Store = require("connect-session-sequelize")(session.Store);

const sequelize = require("./config/connection");
const {
  /*Food,*/ Person,
  Meal,
  Portion,
  PortionInMeal,
  CustomMeal,
  PortionInCustomMeal,
} = require("./models");
// const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "testing",
  cookies: {},
  resave: false,
  saveUninitialized: true,
  storage: new Store({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = handlebars.create({});
app.engine("hanlebars", hbs.engine);
app.set("view engine", "handelbars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(routes)

//for testing db
/* app.get("/portion", async (req, res) => {
  try {
    const getPortion = await Portion.findAll({
      include: [{ model: Meal },{ model: CustomMeal }],
    });
    res.status(200).json(getPortion);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

app.get("/person", async (req, res) => {
  try {
    const getperson = await Person.findAll({
      include: [{ model: Meal }],
    });
    res.status(200).json(getperson);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/meal", async (req, res) => {
  try {
    const getMeal = await Meal.findAll({
      include: [{ model: Portion }, { model: Person }],
    });
    res.status(200).json(getMeal);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/meal/:id", async (req, res) => {
  try {
    const getMeal = await Meal.findByPk({
      where: {
        id: req.params.id,
      },
      include: [{ model: Portion }, { model: Person }],
    });
    res.status(200).json(getMeal);
  } catch (err) {
    res.status(500).json(err);
  }
});
 */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
});
