// frontend/src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home';
// import MyArt from './components/MyArt';
// import MySculptures from './components/MySculptures';
// import MyJewelry from './components/MyJewelry';
// import MyPlants from './components/MyPlants';

// const App = () => {
//   return (
//     <Router>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         {/* <Link className="navbar-brand" to="/">Forever-Love</Link> */}
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/art">My Art</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/sculptures">My Sculptures</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/jewelry">My Jewelry</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/plants">My Plants</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <div className="container mt-3">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/art" element={<MyArt />} />
//           <Route path="/sculptures" element={<MySculptures />} />
//           <Route path="/jewelry" element={<MyJewelry />} />
//           <Route path="/plants" element={<MyPlants />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;







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

