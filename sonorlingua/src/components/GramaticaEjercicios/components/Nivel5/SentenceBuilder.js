// src/components/Nivel5/SentenceBuilder.js
import React, { useState, useEffect } from "react";
import exercises from "./wordsData";
import AudioPlayer from "../AudioPlayer";
import FeedbackEmoji from "../FeedbackEmoji";
import LevelComplete from "../Nivel2/components/LevelComplete"; // <-- importamos el nuevo componente
import "./styles/SentenceBuilder.css";

export default function SentenceBuilder({ onExit, onNextLevel }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [errors, setErrors] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [playCorrect, setPlayCorrect] = useState(false);
  const [playIncorrect, setPlayIncorrect] = useState(false);

  useEffect(() => {
    const shuffled = [...exercises[currentIndex].words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
  }, [currentIndex]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("dragIndex", index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("dragIndex");
    if (dragIndex === "") return;

    const newWords = [...words];
    [newWords[dragIndex], newWords[dropIndex]] = [newWords[dropIndex], newWords[dragIndex]];
    setWords(newWords);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleCheck = () => {
    const sentenceConstructed = words.join(" ");
    if (sentenceConstructed === exercises[currentIndex].sentence) {
      setScore(score + 1);
      setFeedback(true);
      setPlayCorrect(true);
    } else {
      setErrors(errors + 1);
      setFeedback(false);
      setPlayIncorrect(true);
    }

    setTimeout(() => {
      setFeedback(null);
      setPlayCorrect(false);
      setPlayIncorrect(false);

      if (currentIndex + 1 < exercises.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCompleted(true);
      }
    }, 800);
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setScore(0);
    setErrors(0);
    setCompleted(false);
  };

  const handleRetryErrors = () => {
    // reiniciar solo los ejercicios incorrectos
    setCurrentIndex(0);
    setErrors(0);
    setCompleted(false);
  };

  const progress = ((currentIndex) / exercises.length) * 100;

  if (completed) {
    return (
      <LevelComplete
        title="🎉 Nivel Completado 🎉"
        score={score}
        total={exercises.length}
        errors={errors}
        onNextLevel={onNextLevel}
        onRestart={handleRetry}
        onRetryErrors={errors > 0 ? handleRetryErrors : null}
      />
    );
  }

  return (
    <div className="sentence-builder-container">
      <AudioPlayer playCorrect={playCorrect} playIncorrect={playIncorrect} />
      <FeedbackEmoji show={feedback !== null} isCorrect={feedback} />

      <h2>Ordena la oración correctamente</h2>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="sentence">
        {words.map((word, index) => (
          <span
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
            className="draggable-word"
          >
            {word}
          </span>
        ))}
      </div>

      <div className="controls">
        <button className="action-btn" onClick={handleCheck}>✔️ Comprobar</button>
      </div>
    </div>
  );
}
