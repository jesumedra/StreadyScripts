import React, { useState } from "react";

// Componentes
import ProgressBar from "../ProgressBar";
import AudioPlayer from "../AudioPlayer";
import FeedbackEmoji from "../FeedbackEmoji";
import LevelComplete from "../Nivel2/components/LevelComplete";

// Datos
import grammarLevel3Data from "./grammarLevel3Data";

// Estilos
import "./styles/GrammarLevel3.css";

export default function GrammarLevel3({ onExit, onNextLevel }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [playCorrect, setPlayCorrect] = useState(false);
  const [playIncorrect, setPlayIncorrect] = useState(false);

  // Estadísticas
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

  // ✅ Pantalla final usando LevelComplete
  if (showResults) {
    const errors = data.length - correctCount;
    return (
      <LevelComplete
        title={reviewMode ? "🔁 Reintentar Errores" : "📚 Nivel 3 Completado"}
        score={correctCount}
        total={data.length}
        errors={errors}
        onNextLevel={onNextLevel}
        onRestart={() => {
          // Reinicia todo el nivel
          setIndex(0);
          setSelected(null);
          setShowFeedback(false);
          setIsCorrect(false);
          setCorrectCount(0);
          setWrongQuestions([]);
          setReviewMode(false);
          setShowResults(false);
        }}
        onRetryErrors={errors > 0 && !reviewMode ? () => {
          setReviewMode(true);
          setIndex(0);
          setSelected(null);
          setShowFeedback(false);
          setIsCorrect(false);
          setShowResults(false);
          setCorrectCount(0); // opcional, reinicia conteo para esta sesión de errores
        } : null}
      />
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
