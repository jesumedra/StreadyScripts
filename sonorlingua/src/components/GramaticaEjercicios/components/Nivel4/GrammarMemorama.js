import React, { useState, useEffect } from "react";
import AudioPlayer from "../AudioPlayer";
import FeedbackEmoji from "../FeedbackEmoji";
import LevelComplete from "../Nivel2/components/LevelComplete"; // Importamos el componente existente

import "./styles/Memorama.css"; // CSS aparte

// Datos de ejemplo
const allProfessions = [
  { name: "Firefighter", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDUVkI10tqXRvMAwQbRDUFVLXBTUoCtgEsQ&s" },
  { name: "Doctor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafEREv1WIwA_jCqK9BbDPZcs8WnhQWHeSGA&s" },
  { name: "Teacher", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0A_jI_kbPzPH17Uh9XZD8wwvCT9Ot6aK1ZQ&s" },
  { name: "Chef", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tJA6Nl4a0SOOtkJreTpBXzvaegmYaEhySA&s" },
  { name: "Police", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMiiGXL-BIHoWNeG_CYWyxxI-DI-0v8Fd-A&s" },
  { name: "Farmer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMYuwH90__mIoSgQKOsmJWd_aBOmR3utRDA&s" }
];

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

export default function GrammarMemorama({ onExit, onNextLevel }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [playCorrect, setPlayCorrect] = useState(false);
  const [playIncorrect, setPlayIncorrect] = useState(false);
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [errors, setErrors] = useState(0);

  const totalPairs = 5; // 5 pares → 10 cartas

  useEffect(() => {
    startGame();
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    let timer;
    if (startTime && !levelCompleted) {
      timer = setInterval(() => {
        setTimeTaken(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTime, levelCompleted]);

  const createCards = () => {
    const selected = shuffle(allProfessions).slice(0, totalPairs);
    let newCards = [];
    selected.forEach((p) => {
      newCards.push({ type: "image", value: p.img, match: p.name, id: crypto.randomUUID() });
      newCards.push({ type: "text", value: p.name, match: p.name, id: crypto.randomUUID() });
    });
    return shuffle(newCards);
  };

  const startGame = () => {
    setCards(createCards());
    setFlipped([]);
    setMatched([]);
    setScore(0);
    setErrors(0);
    setLevelCompleted(false);
    setFeedback(null);
    setStartTime(Date.now());
    setTimeTaken(0);
  };

  const flipCard = (index) => {
    if (flipped.includes(index) || flipped.length === 2 || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [i1, i2] = newFlipped;
      const c1 = cards[i1], c2 = cards[i2];

      if (c1.match === c2.match && c1.type !== c2.type) {
        // acierto
        const newMatched = [...matched, i1, i2];
        setMatched(newMatched);
        setScore(score + 1); // 1 punto por par encontrado (como en la imagen)
        setFeedback(true);
        setPlayCorrect(true);
        speak(c1.match);
        setTimeout(() => setFeedback(null), 800);

        if (newMatched.length === cards.length) {
          setTimeout(() => {
            setLevelCompleted(true);
          }, 1000);
        }
      } else {
        // error
        setErrors(prev => prev + 1);
        setFeedback(false);
        setPlayIncorrect(true);
        setTimeout(() => setFeedback(null), 800);
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    speechSynthesis.speak(utter);
  };

  // Barra de progreso
  const progress = cards.length > 0 ? (matched.length / cards.length) * 100 : 0;

  if (levelCompleted) {
    return (
      <LevelComplete
        title="¡Memorama Completado!"
        score={score}
        total={totalPairs}
        errors={0}
        onNextLevel={onNextLevel}
        onRestart={startGame}
        // NO pasamos onRetryErrors o pasamos null para que no muestre el botón
        onRetryErrors={null}
        
      />
    );
  }

  return (
    <div className="memorama-container">
      <AudioPlayer playCorrect={playCorrect} playIncorrect={playIncorrect} />
      <FeedbackEmoji show={feedback !== null} isCorrect={feedback} />

      <h1>🌈 Professions Memory Game 🎨</h1>

      <div className="score">Puntuación: {score}</div>
      <div className="timer">⏱️ Tiempo: {timeTaken}s</div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="gameBoard" style={{ gridTemplateColumns: `repeat(5, 150px)` }}>
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`card ${flipped.includes(i) || matched.includes(i) ? "flipped" : ""}`}
            onClick={() => flipCard(i)}
          >
            {flipped.includes(i) || matched.includes(i) ? (
              card.type === "image" ? <img src={card.value} alt={card.match} /> : <span>{card.value}</span>
            ) : null}
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={startGame}>🔄 Reiniciar Juego</button>
    </div>
  );
}