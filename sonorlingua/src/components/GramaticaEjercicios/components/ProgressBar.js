// src/components/ProgressBar.js - DEBUG
import React from 'react';
import '../styles/ProgressBar.css';

export default function ProgressBar({ progress = 0, score = 0, totalQuestions = 0 }) {
  console.log('ProgressBar recibió:', { progress, score, totalQuestions });
  
  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-text">
          {Math.round(progress)}% completado
        </span>
        <span className="progress-counter">
          {score}/{totalQuestions} correctas
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}