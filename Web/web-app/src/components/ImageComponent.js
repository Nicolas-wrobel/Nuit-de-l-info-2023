import React from 'react';
import "../assets/styles/imageComponent.css"

const ImageComponent = ({ path, description, onClick }) => {
  return (
    <div className="image-container" onClick={onClick}>
      <img src={path} alt={description} className="image" />
    </div>
  );
};

export default ImageComponent;
