import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProgressBar from './ProgressBar';
import Question from './Question';
import OptionsGrid from './OptionsGrid';
import BottomBar from './BottomBar';
import QuizComplete from './QuizComplete';
import AudioPlayer from './AudioPlayer';
import FeedbackEmoji from './FeedbackEmoji';
import { quizData } from './quizData';
import '../styles/DuolingoQuiz.css';

export default function DuolingoQuiz({ 
  reviewMode = false, 
  questionsToReview = [], 
  onFinishQuiz // Este prop ahora es handleStartLevel2 de App.js
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [playCorrectAudio, setPlayCorrectAudio] = useState(false);
  const [playIncorrectAudio, setPlayIncorrectAudio] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFeedbackCorrect, setIsFeedbackCorrect] = useState(false);
  const [feedbackKey, setFeedbackKey] = useState(0);

  const [failedQuestions, setFailedQuestions] = useState([]);
  const [errorCount, setErrorCount] = useState(0);
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [isReviewMode, setIsReviewMode] = useState(reviewMode);

  const getQuestionsToUse = () => {
    if (isReviewMode && reviewQuestions.length > 0) {
      return reviewQuestions;
    }
    return quizData;
  };

  const questions = getQuestionsToUse();
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  const progress = Math.min((score / totalQuestions) * 100, 100);

  const isCorrect =
    selected !== null && currentQuestion?.options[selected]?.correct;

  const correctAnswer =
    currentQuestion?.options?.find(o => o.correct)?.text || "";

  useEffect(() => {
    if (reviewMode && questionsToReview.length > 0) {
      const filteredQuestions = quizData.filter(q =>
        questionsToReview.includes(q.id)
      );
      setReviewQuestions(filteredQuestions);
      setIsReviewMode(true);
    }
  }, [reviewMode, questionsToReview]);

  const handleSelect = (index) => {
    if (!showResult && !showFeedback) {
      setSelected(index);
    }
  };

  const handleCheck = () => {
    if (selected !== null && !showFeedback) {
      setShowResult(true);
      setIsFeedbackCorrect(isCorrect);
      setShowFeedback(true);
      setFeedbackKey(prev => prev + 1);

      if (isCorrect) {
        setPlayCorrectAudio(true);
        setScore(prev => prev + 1);

        if (isReviewMode && currentQuestion) {
          setReviewQuestions(prev =>
            prev.filter(q => q.id !== currentQuestion.id)
          );
        }

        setTimeout(() => {
          setShowFeedback(false);
          nextQuestion();
          setPlayCorrectAudio(false);
        }, 1500);
      } else {
        setPlayIncorrectAudio(true);
        setErrorCount(prev => prev + 1);

        if (!failedQuestions.includes(currentQuestion.id)) {
          setFailedQuestions(prev => [...prev, currentQuestion.id]);
        }

        if (!isReviewMode) {
          setTimeout(() => {
            setShowFeedback(false);
            nextQuestion();
            setPlayIncorrectAudio(false);
          }, 1500);
        } else {
          setTimeout(() => {
            setShowFeedback(false);
            setPlayIncorrectAudio(false);
          }, 1500);
        }
      }
    }
  };

  // 🔥 CORRECCIÓN CLAVE: Solo establece quizCompleted en true. NO LLAMA a onFinishQuiz.
  const nextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(prev => prev + 1);
      setSelected(null);
      setShowResult(false);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
      // 💡 Eliminamos la llamada automática y el setTimeout aquí.
    }
  };

  const handleTryAgain = () => {
    setSelected(null);
    setShowResult(false);
    setShowFeedback(false);
  };

  const handleContinue = () => {
    setShowFeedback(false);
    nextQuestion();
  };

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
        // 💡 PASO CLAVE: Pasamos onFinishQuiz (handleStartLevel2) como el prop onStartLevel2
        onStartLevel2={onFinishQuiz} 
      />
    );
  }

  if (isReviewMode && reviewQuestions.length === 0) {
    return (
      <div className="duolingo-quiz">
        <Header />
        <div className="review-complete">
          <div className="complete-icon">🎯</div>
          <h1>¡Repaso Completado!</h1>
          <p>¡Excelente! Has dominado todas las preguntas difíciles.</p>
          <button className="restart-btn" onClick={handleRestart}>
            🎮 Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="duolingo-quiz">
      <AudioPlayer
        playCorrect={playCorrectAudio}
        playIncorrect={playIncorrectAudio}
      />

      <FeedbackEmoji
        key={feedbackKey}
        isCorrect={isFeedbackCorrect}
        show={showFeedback}
      />

      <Header />

      {isReviewMode && (
        <div className="review-mode-banner">
          🔄 Modo Repaso: {reviewQuestions.length} pregunta(s) por repasar
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