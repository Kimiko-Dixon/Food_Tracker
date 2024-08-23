const router = require('express').Router();
const { PortionInCustomMeal } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const portionInCustomMeal = await PortionInCustomMeal.create({
        ...req.body,
      });
      res.status(200).json(portionInCustomMeal);
    } catch (err) {
      res.status(400).json(err);
    }
  });