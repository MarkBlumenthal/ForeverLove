// frontend/src/components/Home.jsx
// import React from 'react';
// import './Home.css'; // Ensure the CSS file is imported

// const Home = () => {
//   return (
//     <div className="home">
//       <div className="header-container">
//         <h1>Aviv Blumenthal</h1>
//       </div>
//       <div className="description-container">
//         <p>Step into my world</p>
//       </div>
//     </div>
//   );
// };

// export default Home;





import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure the CSS file is imported

const Home = () => {
  return (
    <div className="home">
      <div className="header-container">
        <h1>Aviv Blumenthal</h1>
      </div>
      <div className="description-container">
        <p>Step into my world</p>
      </div>
      <div className="nav-buttons">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/art" className="nav-link">
           Art
        </Link>
        <Link to="/sculptures" className="nav-link">
          Sculptures
        </Link>
        <Link to="/jewelry" className="nav-link">
          Jewelry
        </Link>
        <Link to="/plants" className="nav-link">
          Plants
        </Link>
      </div>
    </div>
  );
};

export default Home;

