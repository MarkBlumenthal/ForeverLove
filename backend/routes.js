// backend/routes.js
const express = require('express');
const router = express.Router();
const { getRatings, addRating } = require('./ratings');

router.get('/ratings/:category', (req, res) => {
  const category = req.params.category;
  const ratings = getRatings(category);
  if (ratings) {
    res.json(ratings);
  } else {
    res.status(404).send('Category not found');
  }
});

router.post('/rate/:category/:id', (req, res) => {
  const category = req.params.category;
  const id = parseInt(req.params.id, 10);
  const hearts = addRating(category, id);
  if (hearts !== null) {
    res.json({ success: true, hearts });
  } else {
    res.status(404).send('Item not found');
  }
});

module.exports = router;

