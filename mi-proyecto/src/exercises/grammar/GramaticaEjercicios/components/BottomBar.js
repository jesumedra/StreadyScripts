import React from 'react';
import '../styles/BottomBar.css';

export default function BottomBar({ 
  selected, 
  showResult, 
  isCorrect, 
  onCheck, 
  correctAnswer 
}) {
  return (
    <div className="bottom-bar">
      {showResult && (
        <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
          <p className="result-title">
            {isCorrect ? '¡Correcto! ✅' : 'Incorrecto ❌'}
          </p>
          {!isCorrect && (
            <p className="result-detail">
              {/* <strong>Respuesta correcta:</strong> {correctAnswer} */}
            </p>
          )}
        </div>
      )}
      
      <div className="bottom-controls">
        <button className="audio-btn">
          <span>🔊</span>
        </button>
        
        <button 
          onClick={onCheck}
          disabled={selected === null}
          className={`check-btn ${
            selected === null 
              ? 'disabled' 
              : showResult && isCorrect
              ? 'correct-state'
              : showResult && !isCorrect
              ? 'incorrect-state'
              : 'active'
          }`}
        >
          {showResult ? (isCorrect ? 'Continuar' : 'Intentar de nuevo') : 'Verificar'}
        </button>
      </div>
    </div>
  );
}