import React, { useState } from "react";

// Componentes
import ProgressBar from "../ProgressBar";
import AudioPlayer from "../AudioPlayer";
import FeedbackEmoji from "../FeedbackEmoji";

// Datos
import grammarLevel3Data from "./grammarLevel3Data";

// Estilos
import "./styles/GrammarLevel3.css";

export default function GrammarLevel3({ onExit }) {

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const [playCorrect, setPlayCorrect] = useState(false);
  const [playIncorrect, setPlayIncorrect] = useState(false);

  // 📊 ESTADÍSTICAS
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  const data = reviewMode ? wrongQuestions : grammarLevel3Data;
  const total = data.length;

  if (total === 0) {
    return (
      <div className="grammar-level-3">
        <p>No hay ejercicios disponibles.</p>
        <button onClick={onExit}>← Volver</button>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="grammar-level-3 results">
        <h2>📊 Estadísticas del Nivel 3</h2>

        <p>Total de preguntas: <strong>{grammarLevel3Data.length}</strong></p>
        <p>Correctas: <strong>{correctCount}</strong></p>
        <p>Incorrectas: <strong>{grammarLevel3Data.length - correctCount}</strong></p>

        <div className="results-buttons">
          <button className="action-btn" onClick={onExit}>
            ▶ Siguiente nivel
          </button>

          <button
            className="action-btn secondary"
            onClick={() => window.location.reload()}
          >
            🔄 Reiniciar nivel
          </button>

          {wrongQuestions.length > 0 && (
            <button
              className="action-btn warning"
              onClick={() => {
                setReviewMode(true);
                setIndex(0);
                setShowResults(false);
              }}
            >
              🔁 Contestar errores
            </button>
          )}
        </div>
      </div>
    );
  }

  const question = data[index];
  const progress = Math.round((index / total) * 100);

  const handleSelect = (i) => {
    if (!showFeedback) setSelected(i);
  };

  const handleCheck = () => {
    if (selected === null || showFeedback) return;

    const correct = selected === question.correct;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setCorrectCount(prev => prev + 1);
      setPlayCorrect(true);
    } else {
      setWrongQuestions(prev => [...prev, question]);
      setPlayIncorrect(true);
    }

    setTimeout(() => {
      setPlayCorrect(false);
      setPlayIncorrect(false);
    }, 1000);
  };

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    setIsCorrect(false);

    if (index + 1 < total) {
      setIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="grammar-level-3">

      <button className="exit-btn" onClick={onExit}>
        ← Salir
      </button>

      <h2>🟣 Nivel 3 – Grammar Challenge</h2>

      <ProgressBar
        progress={progress}
        totalQuestions={total}
        currentQuestion={index + 1}
      />

      <AudioPlayer
        playCorrect={playCorrect}
        playIncorrect={playIncorrect}
      />

      <FeedbackEmoji
        isCorrect={isCorrect}
        show={showFeedback}
      />

      <p className="sentence">{question.sentence}</p>

      <div className="options">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={`option-btn
              ${selected === i ? "selected" : ""}
              ${showFeedback && i === question.correct ? "correct" : ""}
              ${showFeedback && selected === i && i !== question.correct ? "wrong" : ""}
            `}
            onClick={() => handleSelect(i)}
            disabled={showFeedback}
          >
            {opt}
          </button>
        ))}
      </div>

      {showFeedback && (
        <p className="explanation">
          💡 {question.explanation}
        </p>
      )}

      <button
        className="action-btn"
        disabled={selected === null}
        onClick={showFeedback ? handleNext : handleCheck}
      >
        {showFeedback ? "Siguiente" : "Comprobar"}
      </button>

    </div>
  );
}
