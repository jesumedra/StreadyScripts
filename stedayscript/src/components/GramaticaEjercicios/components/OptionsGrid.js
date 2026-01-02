// src/components/OptionsGrid.js - CORREGIDO
import React from 'react';
import OptionCard from './OptionCard';
import '../styles/OptionsGrid.css';

export default function OptionsGrid({ options, selected, onSelect }) {
  // Verificar que options exista y sea un array
  if (!options || !Array.isArray(options)) {
    return (
      <div className="options-grid">
        <div className="loading-message">Cargando opciones...</div>
      </div>
    );
  }

  return (
    <div className="options-grid">
      {options.map((option, index) => (
        <OptionCard
          key={option.id || index}
          option={option}
          isSelected={selected === index}
          onSelect={() => onSelect(index)} // ✅ CAMBIA AQUÍ: option.id → index
        />
      ))}
    </div>
  );
}