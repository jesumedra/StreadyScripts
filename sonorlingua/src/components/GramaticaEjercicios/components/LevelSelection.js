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
          Nivel 1 – Básico
        </button>

        <button
          className="level-button level-2"
          onClick={() => onStartQuiz(2)}
        >
          Nivel 2 – Profesiones
        </button>

        <button
          className="level-button level-3"
          onClick={() => onStartQuiz(3)}
        >
          Nivel 3 – Grammar Challenge
        </button>
      </div>

      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>
    </div>
  );
}
