import React, { useState } from "react";
import exercises from "./wordsData";
import FeedbackEmoji from "../FeedbackEmoji";
import AudioPlayer from "../AudioPlayer";
import LevelComplete from "../Nivel2/components/LevelComplete";
import "./styles/WordMatching.css";

export default function WordMatching({ onExit, onNextLevel }) {
  const categories = ["Noun", "Verb", "Adjective", "Adverb"];
  const [matched, setMatched] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [playCorrect, setPlayCorrect] = useState(false);
  const [playIncorrect, setPlayIncorrect] = useState(false);

  const handleDragStart = (index) => setDraggedIndex(index);

  const handleDrop = (category) => {
    if (draggedIndex === null) return;

    const word = exercises[draggedIndex];
    if (word.category === category) {
      setMatched([...matched, draggedIndex]);
      setFeedback(true);
      setPlayCorrect(true);
    } else {
      setFeedback(false);
      setPlayIncorrect(true);
    }

    setDraggedIndex(null);
    setTimeout(() => setFeedback(null), 800);
    setTimeout(() => { setPlayCorrect(false); setPlayIncorrect(false); }, 800);
  };

  const completed = matched.length === exercises.length;

  const score = matched.length;
  const total = exercises.length;

  return (
    <div className="word-matching-container">
      <AudioPlayer playCorrect={playCorrect} playIncorrect={playIncorrect} />
      <FeedbackEmoji show={feedback !== null} isCorrect={feedback} />

      {!completed ? (
        <>
          <h2>Asocia cada palabra con su categoría gramatical</h2>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(score / total) * 100}%` }}></div>
          </div>

          <div className="words-container">
            {exercises.map((item, index) => (
              <span
                key={index}
                className={`word ${matched.includes(index) ? "matched" : ""}`}
                draggable={!matched.includes(index)}
                onDragStart={() => handleDragStart(index)}
              >
                {item.word}
              </span>
            ))}
          </div>

          <div className="categories-container">
            {categories.map((cat) => (
              <div
                key={cat}
                className="category"
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
        </>
      ) : (
        <LevelComplete
          title="🎉 Nivel Completado 🎉"
          score={score}
          total={total}
          errors={total - score}
          onNextLevel={onNextLevel}
          onRestart={() => window.location.reload()}
          onRetryErrors={() => {}}
        />
      )}

      <button className="exit-btn" onClick={onExit}>← Salir</button>
    </div>
  );
}
