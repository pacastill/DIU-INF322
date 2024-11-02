import React from 'react';

import '../stylesheets/caratulas/style.scss';

const Caratula = ({ title, location, capacity, description, imageUrl }) => {
  return (
    <div className="card-container">
      {/* Header */}
      <div className="card-header">
        <div className="card-avatar">A</div>
        <span className="card-title">{location}</span>
        <button className="card-menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h.01M12 12h.01M18 12h.01" />
          </svg>
        </button>
      </div>

    {/* Image Section */}
      <div className="card-image-placeholder">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="card-image" />
        ) : (
          <svg className="shape-icon" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="12 2, 17 9, 7 9" />
            <rect x="3" y="12" width="7" height="7" />
            <circle cx="17" cy="16" r="3.5" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 className="card-task-title">{title}</h3>
        <p className="card-status">{capacity}</p>
        <p className="card-description">{description}</p>
      </div>

      {/* Action Button */}
      <button className="card-button">Ver más</button>
    </div>
  );
};


export default Caratula;