// frontend/src/components/Home.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
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
//       <div className="nav-buttons">
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//         <Link to="/art" className="nav-link">
//           Art
//         </Link>
//         <Link to="/sculptures" className="nav-link">
//           Sculptures
//         </Link>
//         <Link to="/jewelry" className="nav-link">
//           Jewelry
//         </Link>
//         <Link to="/plants" className="nav-link">
//           Plants
//         </Link>
//       </div>
//       <div className="about-section">
//         <img src="/Aviv.png" alt="Artist" className="artist-image" />
//         <div className="about-me">
//           <h2>About Me</h2>
//           <p>
//             This is the about me section where the artist can write something about themselves.<br></br>
//             It can be a few sentences or a longer paragraph, detailing their background,
//             their art,<br></br> and anything else they would like to share with visitors.
//           </p>
//           <p>
//             This is the about me section where the artist can write something about themselves.<br></br>
//             It can be a few sentences or a longer paragraph, detailing their background,
//             their art,<br></br> and anything else they would like to share with visitors.
//           </p>
//           <p>
//             This is the about me section where the artist can write something about themselves.<br></br>
//             It can be a few sentences or a longer paragraph, detailing their background,
//             their art,<br></br> and anything else they would like to share with visitors.
//           </p>
//           <p>
//             This is the about me section where the artist can write something about themselves.<br></br>
//             It can be a few sentences or a longer paragraph, detailing their background,
//             their art,<br></br> and anything else they would like to share with visitors.
//           </p>
//         </div>
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
      <div className="about-section">
        <img src="/Aviv.png" alt="Artist" className="artist-image" />
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            This is the about me section where the artist can write something about themselves.<br></br>
            It can be a few sentences or a longer paragraph, detailing their background,
            their art,<br></br> and anything else they would like to share with visitors.
          </p>
          <p>
            This is the about me section where the artist can write something about themselves.<br></br>
            It can be a few sentences or a longer paragraph, detailing their background,
            their art,<br></br> and anything else they would like to share with visitors.
          </p>
          <p>
            This is the about me section where the artist can write something about themselves.<br></br>
            It can be a few sentences or a longer paragraph, detailing their background,
            their art,<br></br> and anything else they would like to share with visitors.
          </p>
          <p>
            This is the about me section where the artist can write something about themselves.<br></br>
            It can be a few sentences or a longer paragraph, detailing their background,
            their art,<br></br> and anything else they would like to share with visitors.
          </p>
        </div>
      </div>
      <div className="gallery">
        <img src="/gallery image.jpg" alt="Gallery Image 1" className="gallery-image" />
        <img src="/gallery image.jpg" alt="Gallery Image 1" className="gallery-image" />
        <img src="/gallery image.jpg" alt="Gallery Image 1" className="gallery-image" />
        <img src="/gallery image.jpg" alt="Gallery Image 1" className="gallery-image" />
      </div>
    </div>
  );
};

export default Home;


