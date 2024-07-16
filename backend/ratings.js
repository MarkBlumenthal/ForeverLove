// backend/ratings.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'ratings.json');

let ratings = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Save ratings to file
const saveRatings = () => {
  fs.writeFileSync(filePath, JSON.stringify(ratings, null, 2));
};

// Get ratings for a category
const getRatings = (category) => {
  return ratings[category] || null;
};

// Add a heart to an item in a category
const addRating = (category, id) => {
  if (ratings[category] && ratings[category][id]) {
    ratings[category][id].hearts += 1;
    saveRatings();
    return ratings[category][id].hearts;
  }
  return null;
};

module.exports = { getRatings, addRating };


  