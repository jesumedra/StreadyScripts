// src/App.js (GrammarApp)
// Componente raíz de la aplicación.
// Controla la navegación entre niveles, menú principal y modo repaso.

import React, { useState } from 'react';
import './App.css';

// ===============================
// 📦 IMPORTACIÓN DE NIVELES
// ===============================

// Nivel 1 – Quiz estilo Duolingo
import DuolingoQuiz from './components/DuolingoQuiz';

// Nivel 2 – Juego de profesiones
import ProfessionsGame from './components/Nivel2/components/ProfessionsGame';

// Nivel 3 – Gramática
import GrammarLevel3 from './components/Nivel3/GrammarLevel3';

// Nivel 4 – Memorama gramatical
import GrammarMemorama from './components/Nivel4/GrammarMemorama';

// Nivel 5 – Constructor de oraciones
import SentenceBuilder from './components/Nivel5/SentenceBuilder';

// Nivel 6 – Asociación de palabras por categoría
import WordMatching from './components/Nivel6/WordMatching';

// ===============================
// 📋 MENÚ DE SELECCIÓN DE NIVELES
// ===============================
import LevelSelection from './components/LevelSelection';

function App() {

  /* -------------------------------------------------
   * ESTADOS GLOBALES DE NAVEGACIÓN
   * ------------------------------------------------- */

  // Controla qué pantalla o nivel se muestra
  const [screen, setScreen] = useState("menu");

  // Guarda los IDs de preguntas falladas (para repaso del nivel 1)
  const [questionsToReview, setQuestionsToReview] = useState([]);

  /* -------------------------------------------------
   * 🎯 CONTROL DE NIVELES
   * ------------------------------------------------- */

  /**
   * Inicia un nivel según el número seleccionado en el menú
   */
  const handleStartQuiz = (level) => {
    if (level === 1) setScreen("level1");
    if (level === 2) setScreen("level2");
    if (level === 3) setScreen("level3");
    if (level === 4) setScreen("level4");
    if (level === 5) setScreen("level5");
    if (level === 6) setScreen("level6");
  };

  /**
   * Sale del nivel actual y regresa al menú principal
   * Limpia también los datos de repaso
   */
  const handleExitLevel = () => {
    setScreen("menu");
    setQuestionsToReview([]);
  };

  /* -------------------------------------------------
   * 🔁 REPASO DEL NIVEL 1
   * ------------------------------------------------- */

  /**
   * Inicia el modo repaso del nivel 1
   * Recibe los IDs de las preguntas falladas
   */
  const handleStartReview = (failedQuestionIds) => {
    setQuestionsToReview(failedQuestionIds);
    setScreen("review");
  };

  /* -------------------------------------------------
   * 🟢 NIVEL 2 – PROFESIONES
   * -------------------------------------------------
   * Este nivel define explícitamente el avance al nivel 3
   */

  if (screen === "level2") {
    return (
      <div className="App">
        <ProfessionsGame
          onExit={handleExitLevel}           // Regresar al menú
          onNextLevel={() => setScreen("level3")} // Avanzar al nivel 3
        />
      </div>
    );
  }

  /* -------------------------------------------------
   * 🔵 NIVEL 1 – QUIZ PRINCIPAL
   * ------------------------------------------------- */

  if (screen === "level1") {
    return (
      <div className="App">
        <DuolingoQuiz
          onReviewFailed={handleStartReview} // Iniciar repaso
          onFinishQuiz={() => setScreen("level2")} // Avanzar al nivel 2
        />
      </div>
    );
  }

  /* -------------------------------------------------
   * 🟣 NIVEL 3 – GRAMÁTICA
   * ------------------------------------------------- */

  if (screen === "level3") {
    return (
      <div className="App">
        <GrammarLevel3 onExit={handleExitLevel} />
      </div>
    );
  }

  /* -------------------------------------------------
   * 🟣 NIVEL 4 – MEMORAMA GRAMATICAL
   * ------------------------------------------------- */

  if (screen === "level4") {
    return (
      <div className="App">
        <GrammarMemorama
          onExit={handleExitLevel}
          onNextLevel={() => alert('¡Completaste todos los niveles!')}
        />
      </div>
    );
  }

  /* -------------------------------------------------
   * 🟣 NIVEL 5 – CONSTRUCTOR DE ORACIONES
   * ------------------------------------------------- */

  if (screen === "level5") {
    return (
      <div className="App">
        <SentenceBuilder
          onExit={handleExitLevel}
          onNextLevel={() => alert('¡Completaste todos los niveles!')}
        />
      </div>
    );
  }

  /* -------------------------------------------------
   * 🟣 NIVEL 6 – PALABRAS Y CATEGORÍAS
   * ------------------------------------------------- */

  if (screen === "level6") {
    return (
      <div className="App">
        <WordMatching
          onExit={handleExitLevel}
          onNextLevel={() => alert('¡Completaste todos los niveles!')}
        />
      </div>
    );
  }

  /* -------------------------------------------------
   * 🧠 MODO REPASO (NIVEL 1)
   * ------------------------------------------------- */

  if (screen === "review") {
    return (
      <div className="App">
        <DuolingoQuiz
          reviewMode={true}                   // Activa modo repaso
          questionsToReview={questionsToReview}
          onBackToNormal={handleExitLevel}    // Regresar al menú
        />
      </div>
    );
  }

  /* -------------------------------------------------
   * 🏠 MENÚ PRINCIPAL
   * ------------------------------------------------- */

  return (
    <div className="App">
      <LevelSelection
        onStartQuiz={handleStartQuiz} // Selección de nivel
        onBack={handleExitLevel}
      />
    </div>
  );
}

export default App;
