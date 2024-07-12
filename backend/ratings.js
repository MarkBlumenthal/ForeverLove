// backend/ratings.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'ratings.json');

let ratings = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Initialize ratings if not already initialized
const initializeRatings = () => {
  if (ratings.art.length === 0) {
    for (let i = 0; i < 10; i++) {
      ratings.art.push({ id: i, hearts: 0 });
      ratings.sculptures.push({ id: i, hearts: 0 });
      ratings.jewelry.push({ id: i, hearts: 0 });
      ratings.plants.push({ id: i, hearts: 0 });
    }
    saveRatings();
  }
};

const saveRatings = () => {
  fs.writeFileSync(filePath, JSON.stringify(ratings, null, 2));
};

initializeRatings();

const getRatings = (category) => {
  return ratings[category] || null;
};

const addRating = (category, id) => {
  const item = ratings[category]?.find((item) => item.id === id);
  if (item) {
    item.hearts += 1;
    saveRatings();
    return item.hearts;
  }
  return null;
};

module.exports = { getRatings, addRating };

  