import React from 'react';
import '../styles/OptionCard.css';

export default function OptionCard({ option, isSelected, onSelect }) {
  if (!option) {
    return (
      <div className="option-card option-blue disabled">
        <div className="option-text">Cargando...</div>
      </div>
    );
  }

  const getColorClass = () => {
    if (!option.id) return 'option-blue';
    
    switch(option.id) {
      case 1: return 'option-blue';
      case 2: return 'option-orange';
      case 3: return 'option-blue';
      case 4: return 'option-light-blue';
      default: return 'option-blue';
    }
  };

  return (
    <div
      onClick={onSelect}
      className={`option-card ${getColorClass()} ${isSelected ? 'selected' : ''}`}
    >
      <div className="option-image-container">
        <img 
          src={option.image} 
          alt={option.text} 
          className="option-image" 
        />
        <div className="option-overlay"></div>
      </div>
      
      <div className="option-text">{option.text}</div>
    </div>
  );
}