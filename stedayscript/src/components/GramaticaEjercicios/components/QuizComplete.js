// src/components/QuizComplete.js
import React from 'react';
import Header from './Header';
import '../styles/QuizComplete.css';

export default function QuizComplete({ 
  score, 
  totalQuestions, 
  failedQuestions = 0, 
  isReviewMode = false,
  onRestart, 
  onReviewFailed,
  // 💡 Nuevo prop para iniciar el Nivel 2 (Juego de Profesiones)
  onStartLevel2 
}) {
  const accuracy = Math.round((score / totalQuestions) * 100);

  // ... (Funciones getTitle y getMessage se mantienen igual)
  const getTitle = () => {
    if (isReviewMode) {
      return '¡Repaso Completado!';
    }
    if (score === totalQuestions) return '¡Perfecto! 🏆';
    return '¡Quiz Completado!';
  };

  const getMessage = () => {
    if (isReviewMode) {
      return 'Has mejorado en las preguntas difíciles.';
    }
    if (score === totalQuestions) {
      return '¡Increíble! Acertaste todas las preguntas.';
    }
    if (failedQuestions > 0) {
      return `Tienes ${failedQuestions} pregunta(s) para repasar.`;
    }
    return '¡Buen trabajo! Sigue practicando.';
  };

  return (
    <div className="quiz-complete">
      <Header />
      
      <div className="complete-content">
        <div className="complete-icon">
          {isReviewMode ? '🎯' : 
            score === totalQuestions ? '🏆' : 
            accuracy >= 80 ? '🌟' : '👍'}
        </div>
        
        <h1 className="complete-title">{getTitle()}</h1>
        
        <div className="complete-stats">
          {/* ... (Tarjeta de estadísticas) */}
          <div className="stat-card">
            <div className="stat-value">{score}/{totalQuestions}</div>
            <div className="stat-label">Respuestas correctas</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{accuracy}%</div>
            <div className="stat-label">Precisión</div>
          </div>
          {!isReviewMode && failedQuestions > 0 && (
            <div className="stat-card warning">
              <div className="stat-value">{failedQuestions}</div>
              <div className="stat-label">Para repasar</div>
            </div>
          )}
        </div>
        
        <p className="complete-message">{getMessage()}</p>
        
        <div className="action-buttons">
          
          {/* 💡 AÑADIDO: Botón Nivel 2 */}
          {!isReviewMode && onStartLevel2 && (
            <button 
              className="level2-btn"
              onClick={onStartLevel2}
              style={{
                // Estilos para que se vea como en la imagen, pero con otro color
                padding: '12px 25px',
                fontSize: '16px',
                backgroundColor: '#007bff', // Color para distinguirlo
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginRight: '10px' // Separación del siguiente botón
              }}
            >
              🚀 Nivel 2
            </button>
          )}

          {/* Botón para repasar preguntas fallidas (solo en modo normal y si hay errores) */}
          {!isReviewMode && failedQuestions > 0 && onReviewFailed && (
            <button 
              className="review-btn"
              onClick={onReviewFailed}
            >
              🔄 Repasar preguntas fallidas ({failedQuestions})
            </button>
          )}
          
          {/* Botón principal */}
          <button 
            className="restart-btn"
            onClick={onRestart}
          >
            {isReviewMode ? '🎮 Volver al inicio' : '🔄 Nuevo quiz'}
          </button>
        </div>
      </div>
    </div>
  );
}