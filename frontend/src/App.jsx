// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MyArt from './components/MyArt';
import MySculptures from './components/MySculptures';
import MyJewelry from './components/MyJewelry';
import MyPlants from './components/MyPlants';

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<MyArt />} />
          <Route path="/sculptures" element={<MySculptures />} />
          <Route path="/jewelry" element={<MyJewelry />} />
          <Route path="/plants" element={<MyPlants />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

