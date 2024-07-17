// frontend/src/components/Modal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageModal = ({ show, handleClose, imageSrc }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <img src={imageSrc} alt="Large view" style={{ width: '100%' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={handleClose} 
          style={{ backgroundColor: 'rgb(250, 140, 158)', borderColor: 'rgb(250, 140, 158)' }} // Customize button color
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;

