const router = require("express").Router();
const { Food } = require("../models");

router.get("/foods", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect("/login);");
      return;
    }

    // Get all foods and JOIN with user data
    const foodData = await Food.findAll({});

    // Serialize data so the template can read it
    const foods = foodData.map((food) => food.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      foods,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/questionnaire", async (req, res) => {
  res.render("questionnaire");
});

router.get("/", async (req, res) => {
  res.render("homepage");
});

// router.get('/login', async (req, res) => {
//   res.render('login')
// })

module.exports = router;
