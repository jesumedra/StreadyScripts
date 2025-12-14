// src/App.js  (GrammarApp)

import React, { useState } from 'react';
import './App.css';

// Niveles
import DuolingoQuiz from './components/DuolingoQuiz';
import ProfessionsGame from './components/Nivel2/components/ProfessionsGame';
import GrammarLevel3 from './components/Nivel3/GrammarLevel3';

// Menú
import LevelSelection from './components/LevelSelection';

function App() {

  const [screen, setScreen] = useState("menu");
  const [questionsToReview, setQuestionsToReview] = useState([]);

  // ===============================
  // 🎯 CONTROL DE NIVELES
  // ===============================

  const handleStartQuiz = (level) => {
    if (level === 1) setScreen("level1");
    if (level === 2) setScreen("level2");
    if (level === 3) setScreen("level3");
  };

  const handleExitLevel = () => {
    setScreen("menu");
    setQuestionsToReview([]);
  };

  // ===============================
  // 🔁 REPASO NIVEL 1
  // ===============================

  const handleStartReview = (failedQuestionIds) => {
    setQuestionsToReview(failedQuestionIds);
    setScreen("review");
  };

  // ===============================
  // 🟢 NIVEL 2  ✅ ÚNICO CAMBIO
  // ===============================

  if (screen === "level2") {
    return (
      <div className="App">
        <ProfessionsGame
          onExit={handleExitLevel}
          onNextLevel={() => setScreen("level3")} // 👈 SOLO ESTO
        />
      </div>
    );
  }

  // ===============================
  // 🔵 NIVEL 1
  // ===============================

  if (screen === "level1") {
    return (
      <div className="App">
        <DuolingoQuiz
          onReviewFailed={handleStartReview}
          onFinishQuiz={() => setScreen("level2")}
        />
      </div>
    );
  }

  // ===============================
  // 🟣 NIVEL 3 – GRAMÁTICA
  // ===============================

  if (screen === "level3") {
    return (
      <div className="App">
        <GrammarLevel3 onExit={handleExitLevel} />
      </div>
    );
  }

  // ===============================
  // 🧠 REPASO
  // ===============================

  if (screen === "review") {
    return (
      <div className="App">
        <DuolingoQuiz
          reviewMode={true}
          questionsToReview={questionsToReview}
          onBackToNormal={handleExitLevel}
        />
      </div>
    );
  }

  // ===============================
  // 🏠 MENÚ DE NIVELES
  // ===============================

  return (
    <div className="App">
      <LevelSelection
        onStartQuiz={handleStartQuiz}
        onBack={handleExitLevel}
      />
    </div>
  );
}

export default App;
