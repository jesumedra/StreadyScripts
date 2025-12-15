// Importaciones principales de React
import React, { useState, useEffect } from 'react';

// Componentes visuales del quiz
import Header from './Header';
import ProgressBar from './ProgressBar';
import Question from './Question';
import OptionsGrid from './OptionsGrid';
import BottomBar from './BottomBar';
import QuizComplete from './QuizComplete';
import AudioPlayer from './AudioPlayer';
import FeedbackEmoji from './FeedbackEmoji';

// Datos del cuestionario
import { quizData } from './quizData';

// Estilos CSS
import '../styles/DuolingoQuiz.css';

/**
 * Componente principal del Quiz estilo Duolingo
 * @param reviewMode        Indica si el quiz inicia en modo repaso
 * @param questionsToReview IDs de preguntas a repasar
 * @param onFinishQuiz      Callback que se ejecuta al terminar el quiz (ej. iniciar nivel 2)
 */
export default function DuolingoQuiz({ 
  reviewMode = false, 
  questionsToReview = [], 
  onFinishQuiz
}) {

  /* -------------------- ESTADOS PRINCIPALES -------------------- */

  const [currentIndex, setCurrentIndex] = useState(0);     // Índice de la pregunta actual
  const [selected, setSelected] = useState(null);         // Opción seleccionada
  const [showResult, setShowResult] = useState(false);    // Mostrar resultado de la pregunta
  const [score, setScore] = useState(0);                  // Puntaje acumulado
  const [quizCompleted, setQuizCompleted] = useState(false); // Quiz finalizado

  /* -------------------- ESTADOS DE AUDIO Y FEEDBACK -------------------- */

  const [playCorrectAudio, setPlayCorrectAudio] = useState(false);
  const [playIncorrectAudio, setPlayIncorrectAudio] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false); // Mostrar emoji animado
  const [isFeedbackCorrect, setIsFeedbackCorrect] = useState(false);
  const [feedbackKey, setFeedbackKey] = useState(0);       // Forzar re-render del emoji

  /* -------------------- ESTADOS PARA MODO REPASO -------------------- */

  const [failedQuestions, setFailedQuestions] = useState([]); // IDs fallados
  const [errorCount, setErrorCount] = useState(0);            // Total de errores
  const [reviewQuestions, setReviewQuestions] = useState([]);// Preguntas a repasar
  const [isReviewMode, setIsReviewMode] = useState(reviewMode);

  /**
   * Decide qué preguntas usar:
   * - Si estamos en modo repaso, usa solo las falladas
   * - Si no, usa todo el quiz
   */
  const getQuestionsToUse = () => {
    if (isReviewMode && reviewQuestions.length > 0) {
      return reviewQuestions;
    }
    return quizData;
  };

  const questions = getQuestionsToUse();
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  // Progreso en porcentaje (máximo 100%)
  const progress = Math.min((score / totalQuestions) * 100, 100);

  // Verifica si la respuesta seleccionada es correcta
  const isCorrect =
    selected !== null && currentQuestion?.options[selected]?.correct;

  // Obtiene el texto de la respuesta correcta
  const correctAnswer =
    currentQuestion?.options?.find(o => o.correct)?.text || "";

  /**
   * useEffect para activar el modo repaso
   * Filtra las preguntas que deben revisarse según su ID
   */
  useEffect(() => {
    if (reviewMode && questionsToReview.length > 0) {
      const filteredQuestions = quizData.filter(q =>
        questionsToReview.includes(q.id)
      );
      setReviewQuestions(filteredQuestions);
      setIsReviewMode(true);
    }
  }, [reviewMode, questionsToReview]);

  /* -------------------- MANEJADORES DE EVENTOS -------------------- */

  // Seleccionar una opción (solo si no hay feedback activo)
  const handleSelect = (index) => {
    if (!showResult && !showFeedback) {
      setSelected(index);
    }
  };

  /**
   * Verifica la respuesta seleccionada
   * Controla audio, feedback, score y navegación
   */
  const handleCheck = () => {
    if (selected !== null && !showFeedback) {
      setShowResult(true);
      setIsFeedbackCorrect(isCorrect);
      setShowFeedback(true);
      setFeedbackKey(prev => prev + 1);

      if (isCorrect) {
        // Respuesta correcta
        setPlayCorrectAudio(true);
        setScore(prev => prev + 1);

        // Elimina la pregunta del repaso si estaba en ese modo
        if (isReviewMode && currentQuestion) {
          setReviewQuestions(prev =>
            prev.filter(q => q.id !== currentQuestion.id)
          );
        }

        // Avanza automáticamente
        setTimeout(() => {
          setShowFeedback(false);
          nextQuestion();
          setPlayCorrectAudio(false);
        }, 1500);

      } else {
        // Respuesta incorrecta
        setPlayIncorrectAudio(true);
        setErrorCount(prev => prev + 1);

        // Guarda la pregunta fallada
        if (!failedQuestions.includes(currentQuestion.id)) {
          setFailedQuestions(prev => [...prev, currentQuestion.id]);
        }

        // En modo normal avanza, en repaso obliga a repetir
        setTimeout(() => {
          setShowFeedback(false);
          if (!isReviewMode) nextQuestion();
          setPlayIncorrectAudio(false);
        }, 1500);
      }
    }
  };

  /**
   * Avanza a la siguiente pregunta o finaliza el quiz
   */
  const nextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(prev => prev + 1);
      setSelected(null);
      setShowResult(false);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  // Reintentar la misma pregunta
  const handleTryAgain = () => {
    setSelected(null);
    setShowResult(false);
    setShowFeedback(false);
  };

  // Continuar tras respuesta correcta
  const handleContinue = () => {
    setShowFeedback(false);
    nextQuestion();
  };

  /**
   * Reinicia el quiz completo
   */
  const handleRestart = () => {
    if (isReviewMode) {
      window.location.reload();
    } else {
      setCurrentIndex(0);
      setSelected(null);
      setShowResult(false);
      setScore(0);
      setQuizCompleted(false);
      setShowFeedback(false);
      setFeedbackKey(0);
      setFailedQuestions([]);
      setErrorCount(0);
      setIsReviewMode(false);
    }
  };

  /**
   * Inicia el modo repaso solo con preguntas falladas
   */
  const handleReviewFailed = () => {
    const filteredQuestions = quizData.filter(q =>
      failedQuestions.includes(q.id)
    );

    if (filteredQuestions.length > 0) {
      setReviewQuestions(filteredQuestions);
      setIsReviewMode(true);
      setCurrentIndex(0);
      setSelected(null);
      setShowResult(false);
      setScore(0);
      setQuizCompleted(false);
      setShowFeedback(false);
      setFailedQuestions([]);
    }
  };

  /* -------------------- RENDERIZADO CONDICIONAL -------------------- */

  // Pantalla final del quiz
  if (quizCompleted) {
    const showReviewButton = !isReviewMode && failedQuestions.length > 0;

    return (
      <QuizComplete
        score={score}
        totalQuestions={totalQuestions}
        failedQuestions={failedQuestions.length}
        isReviewMode={isReviewMode}
        onRestart={handleRestart}
        onReviewFailed={showReviewButton ? handleReviewFailed : undefined}
        onStartLevel2={onFinishQuiz}
      />
    );
  }

  // Pantalla de repaso completado
  if (isReviewMode && reviewQuestions.length === 0) {
    return (
      <div className="duolingo-quiz">
        <Header />
        <div className="review-complete">
          <h1>¡Repaso Completado!</h1>
          <button onClick={handleRestart}>Volver al inicio</button>
        </div>
      </div>
    );
  }

  /* -------------------- INTERFAZ PRINCIPAL -------------------- */

  return (
    <div className="duolingo-quiz">
      <AudioPlayer playCorrect={playCorrectAudio} playIncorrect={playIncorrectAudio} />
      <FeedbackEmoji key={feedbackKey} isCorrect={isFeedbackCorrect} show={showFeedback} />
      <Header />

      {isReviewMode && (
        <div className="review-mode-banner">
          Modo Repaso: {reviewQuestions.length} preguntas
        </div>
      )}

      <ProgressBar
        progress={progress}
        score={score}
        totalQuestions={totalQuestions}
        currentQuestion={currentIndex + 1}
        isReviewMode={isReviewMode}
      />

      <Question
        avatar={currentQuestion.avatar}
        questionText={currentQuestion.question}
      />

      <OptionsGrid
        options={currentQuestion.options}
        selected={selected}
        onSelect={handleSelect}
        showResult={showResult}
        correctAnswer={correctAnswer}
        disabled={showFeedback}
      />

      <BottomBar
        selected={selected !== null}
        showResult={showResult}
        isCorrect={isCorrect}
        onCheck={
          showResult
            ? isCorrect
              ? handleContinue
              : handleTryAgain
            : handleCheck
        }
        correctAnswer={correctAnswer}
        disabled={showFeedback}
        isReviewMode={isReviewMode}
      />
    </div>
  );
}
