// frontend/src/components/Item.jsx
// import React, { useState, useEffect } from 'react';
// import ItemCarousel from './ItemCarousel';
// import './Item.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import ImageModal from './Modal';

// const Item = ({ category, id, description }) => {
//   const [hearts, setHearts] = useState(0);
//   const [showDescription, setShowDescription] = useState(false);
//   const [isBouncing, setIsBouncing] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [imageSrc, setImageSrc] = useState('');

//   useEffect(() => {
//     axios.get(`http://localhost:3001/ratings/${category}`)
//       .then(response => {
//         const itemRating = response.data.find(item => item.id === id);
//         if (itemRating) {
//           setHearts(itemRating.hearts);
//         }
//       })
//       .catch(error => console.error('Error fetching ratings:', error));
//   }, [category, id]);

//   const handleRate = () => {
//     setIsBouncing(true);
//     setTimeout(() => setIsBouncing(false), 500);

//     axios.post(`http://localhost:3001/rate/${category}/${id}`)
//       .then(response => {
//         if (response.data.success) {
//           setHearts(response.data.hearts);
//         }
//       })
//       .catch(error => console.error('Error updating rating:', error));
//   };

//   const toggleDescription = () => {
//     setShowDescription(!showDescription);
//   };

//   const images = [
//     `/images/${category}/${id}_1.jpg`,
//     `/images/${category}/${id}_2.jpg`,
//     `/images/${category}/${id}_3.jpg`,
//   ];

//   const handleImageClick = (src) => {
//     setImageSrc(src);
//     setShowModal(true);
//   };

//   const handleClose = () => setShowModal(false);

//   useEffect(() => {
//     console.log('Image URLs:', images);
//   }, [images]);

//   return (
//     <div className="item-container">
//       <div className="item">
//         <ItemCarousel images={images} onImageClick={handleImageClick} />
//       </div>
//       <div className="rating-container">
//         <p onClick={handleRate} style={{ cursor: 'pointer', color: 'black' }}>
//           {hearts} <FontAwesomeIcon 
//             icon={faHeart} 
//             style={{ color: 'red' }} 
//             className={isBouncing ? 'bounce' : ''} 
//           />
//         </p>
//       </div>
//       <div className="description-toggle">
//         <button onClick={toggleDescription}>
//           Description <FontAwesomeIcon icon={faChevronDown} />
//         </button>
//         {showDescription && (
//           <div className="description">
//             <p>{description}</p>
//           </div>
//         )}
//       </div>
//       <ImageModal show={showModal} handleClose={handleClose} imageSrc={imageSrc} />
//     </div>
//   );
// };

// export default Item;











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCarousel from './ItemCarousel';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ImageModal from './Modal';

const Item = ({ category, id, description }) => {
  const [hearts, setHearts] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    axios.get(`${backendUrl}/ratings/${category}`)
      .then(response => {
        console.log('Ratings response:', response.data); // Add logging to check response
        if (Array.isArray(response.data)) {
          const itemRating = response.data.find(item => item.id === id);
          if (itemRating) {
            setHearts(itemRating.hearts);
          }
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => console.error('Error fetching ratings:', error));
  }, [category, id, backendUrl]);

  const handleRate = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);

    axios.post(`${backendUrl}/rate/${category}/${id}`)
      .then(response => {
        console.log('Rate response:', response.data); // Add logging to check response
        if (response.data.success) {
          setHearts(response.data.hearts);
        } else {
          console.error('Rate response not successful:', response.data);
        }
      })
      .catch(error => console.error('Error updating rating:', error));
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const images = [
    `/images/${category}/${id}_1.jpg`,
    `/images/${category}/${id}_2.jpg`,
    `/images/${category}/${id}_3.jpg`,
  ];

  const handleImageClick = (src) => {
    setImageSrc(src);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    console.log('Image URLs:', images);
  }, [images]);

  return (
    <div className="item-container">
      <div className="item">
        <ItemCarousel images={images} onImageClick={handleImageClick} />
      </div>
      <div className="rating-container">
        <p onClick={handleRate} style={{ cursor: 'pointer', color: 'black' }}>
          {hearts} <FontAwesomeIcon 
            icon={faHeart} 
            style={{ color: 'red' }} 
            className={isBouncing ? 'bounce' : ''} 
          />
        </p>
      </div>
      <div className="description-toggle">
        <button onClick={toggleDescription}>
          Description <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {showDescription && (
          <div className="description">
            <p>{description}</p>
          </div>
        )}
      </div>
      <ImageModal show={showModal} handleClose={handleClose} imageSrc={imageSrc} />
    </div>
  );
};

export default Item;



