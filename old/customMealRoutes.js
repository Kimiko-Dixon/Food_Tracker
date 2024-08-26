const router = require("express").Router();
const { CustomMeal } = require("../models");

router.post("/", async (req, res) => {
  try {
    const customMeal = await CustomMeal.create({
      ...req.body,
      person_id: req.session.person_id,
    });
    res.status(200).json(customMeal);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
