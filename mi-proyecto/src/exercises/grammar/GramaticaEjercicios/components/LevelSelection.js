import React from "react";
import "../styles/LevelSelection.css";

export default function LevelSelection({ onStartQuiz, onBack }) {
  return (
    <div className="level-selection-screen">
      <h2>Selecciona el Nivel de Gramática</h2>

      <div className="button-container">
        <button
          className="level-button level-1"
          onClick={() => onStartQuiz(1)}
        >
          Nivel 1
        </button>

        <button
          className="level-button level-2"
          onClick={() => onStartQuiz(2)}
        >
          Nivel 2
        </button>

        <button
          className="level-button level-3"
          onClick={() => onStartQuiz(3)}
        >
          Nivel 3
        </button>
        <button className="level-button level-4"
          onClick={() => onStartQuiz(4)}>
          Nivel 4
        </button>
        <button className="level-button level-5"
          onClick={() => onStartQuiz(5)}>
          Nivel 5
        </button>
        <button className="level-button level-6"
          onClick={() => onStartQuiz(6)}>
          Nivel 6
        </button>
      </div>

      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>
    </div>
  );
}
