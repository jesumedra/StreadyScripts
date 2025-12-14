import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-1-Be-Yes-No-Questions-Hot.mp3',
    english: [
      "Man: Are you hot?",
      "Woman: Yes, I am very hot.",
      "Man: Is the air conditioning on?",
      "Woman: No, it's off.",
      "Man: Can I turn it on?",
      "Woman: Yes, please. And can you turn on the radio too?",
      "Man: Of course. Is jazz music OK?",
      "Woman: Yes, I love jazz music."
    ],
    spanish: [
      "Hombre: ¿Tienes calor?",
      "Mujer: Sí, tengo mucho calor.",
      "Hombre: ¿Está encendido el aire acondicionado?",
      "Mujer: No, está apagado.",
      "Hombre: ¿Puedo encenderlo?",
      "Mujer: Sí, por favor. ¿Y puedes encender la radio también?",
      "Hombre: Por supuesto. ¿Está bien la música jazz?",
      "Mujer: Sí, me encanta la música jazz."
    ],
    exercises: [
      { id: '1-1', text: '___ you hot?', correct: 'Are', spanish: '¿Tienes calor?' },
      { id: '1-2', text: '___ the air conditioning on?', correct: 'Is', spanish: '¿Está encendido el aire acondicionado?' },
      { id: '1-3', text: "No, it's ___.", correct: 'off', spanish: 'No, está apagado.' },
      { id: '1-4', text: '___ jazz music OK?', correct: 'Is', spanish: '¿Está bien la música jazz?' },
      { id: '1-5', text: 'Yes, I ___ very hot.', correct: 'am', spanish: 'Sí, tengo mucho calor.' }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-2-Be-Yes-No-Questions-House.mp3',
    english: [
        "Man: Is your house big?",
        "Woman: Yes, it's quite big.",
        "Man: Is it new?",
        "Woman: No, it's very old.",
        "Man: Is it nice?",
        "Woman: Not really. It's cold in the winter.",
        "Man: Oh no! That's not good."
    ],
    spanish: [
        "Hombre: ¿Tu casa es grande?",
        "Mujer: Sí, es bastante grande.",
        "Hombre: ¿Es nuevo?",
        "Mujer: No, es muy antigua.",
        "Hombre: ¿Está bien?",
        "Mujer: No realmente. Hace frío en invierno.",
        "Hombre: ¡Oh, no! Eso no es bueno."
    ],
    exercises: [
        { id: '2-1', text: '___ it new?', correct: 'Is', spanish: '¿Es nuevo?' },
        { id: '2-2', text: '___ your house big?', correct: 'Is', spanish: '¿Tu casa es grande?' },
        { id: '2-3', text: "No, it's very ___.", correct: 'old', spanish: 'No, es muy antigua.' },
        { id: '2-4', text: "It's ___ in the winter.", correct: 'cold', spanish: 'Hace frío en invierno.' }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-3-Be-Yes-No-Questions-Clothes.mp3',
    english: [
        "Man: I like your shoes. Are they new?",
        "Woman: Yes, they are.",
        "Man: Are they expensive?",
        "Woman: No, they are very cheap.",
        "Man: Are they comfortable?",
        "Woman: Yes, they are very comfortable.",
        "Man: Are they from the discount shoe store?",
        "Woman: Yes! How did you guess?"
    ],
    spanish: [
        "Hombre: Me gustan tus zapatos. ¿Son nuevos?",
        "Mujer: Sí, lo son.",
        "Hombre: ¿Son caros?",
        "Mujer: No, son muy baratas.",
        "Hombre: ¿Son cómodos?",
        "Mujer: Sí, son muy cómodos.",
        "Hombre: ¿Son de la zapatería de descuento?",
        "Mujer: ¡Sí! ¿Cómo lo has adivinado?"
    ],
    exercises: [
        { id: '3-1', text: '___ they new?', correct: 'Are', spanish: '¿Son nuevos?' },
        { id: '3-2', text: '___ they expensive?', correct: 'Are', spanish: '¿Son caros?' },
        { id: '3-3', text: '___ they comfortable?', correct: 'Are', spanish: '¿Son cómodos?' },
        { id: '3-4', text: 'Yes, they ___.', correct: 'are', spanish: 'Sí, lo son.' },
        { id: '3-5', text: 'No, they are very ___.', correct: 'cheap', spanish: 'No, son muy baratas.' },
        { id: '3-6', text: 'Yes, they are very ___.', correct: 'comfortable', spanish: 'Sí, son muy cómodos.' }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-4-Be-Yes-No-Questions-Hungry.mp3',
    english: [
        "Man: Are you hungry?",
        "Woman: Yes, I'm very hungry.",
        "Man: Do you want pizza?",
        "Woman: Yes, let's get some.",
        "Man: Is the pizza place still open?",
        "Woman: Yes, it's open until 10.",
        "Man: What time is it now?",
        "Woman: Eight. It's open for two more hours.",
        "Man: Great! I'm starving."
    ],
    spanish: [
        "Hombre: ¿Tienes hambre?",
        "Mujer: Sí, tengo mucha hambre.",
        "Hombre: ¿Quieres pizza?",
        "Mujer: Sí, vamos a por algo.",
        "Hombre: ¿La pizzería sigue abierta?",
        "Mujer: Sí, está abierto hasta las 10.",
        "Hombre: ¿Qué hora es ahora?",
        "Mujer: Ocho. Está abierto dos horas más.",
        "Hombre: ¡Genial! Me muero de hambre."
    ],
    exercises: [
        { id: '4-1', text: '___ you hungry?', correct: 'Are', spanish: '¿Tienes hambre?' },
        { id: '4-2', text: 'I ___ very hungry.', correct: 'am', spanish: 'Tengo mucha hambre.' },
        { id: '4-3', text: '___ the pizza place still open?', correct: 'Is', spanish: '¿La pizzería sigue abierta?' },
        { id: '4-4', text: 'It ___ open for two more hours.', correct: 'is', spanish: 'Está abierto dos horas más.' },
        { id: '4-5', text: "Yes, I'm very ___.", correct: 'hungry', spanish: 'Sí, tengo mucha hambre.' },
        { id: '4-6', text: "Yes, it's open until ___.", correct: '10', spanish: 'Sí, está abierto hasta las 10.' },
        { id: '4-7', text: "Great! I'm ___.", correct: 'starving', spanish: '¡Genial! Me muero de hambre.' }
    ]
  },
];

const A1_02_SeSinPreguntas = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (exerciseId, value) => {
    setUserAnswers({
      ...userAnswers,
      [exerciseId]: value,
    });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetAnswers = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <div className='container-vocabulario'>
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Preguntas de Sí/No con el Verbo "To Be"</h2>
        <h4 className='introduccion-subtitle'>En este ejercicio aprenderemos a usar el verbo "To Be" para formar preguntas de sí o no.</h4>
        <h4 className='introduccion-subtitle'>Estas preguntas son esenciales para confirmar información.</h4>
        <div className='audio-item'>
            <audio controls>
              <source
                src={`/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-Be-Yes-No-Questions.mp3`}
                type='audio/mp3'
              />
              Your browser does not support the audio tag.
            </audio>
        </div>
      </div>

      <div className='conversations-container'>
        {conversations.map((conv) => (
          <div key={conv.id} className='conversation-container'>
            <h2>{conv.title}</h2>
            <div className='audio-column'>
                <audio controls>
                    <source src={conv.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="text-column">
                <h3>English</h3>
                {conv.english.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="text-column">
                <h3>Spanish</h3>
                {conv.spanish.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className='exercises-container' style={{ marginTop: '20px', flexBasis: '100%' }}>
              <h3 style={{ fontSize: '1.2em', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>Ejercicios</h3>
              {conv.exercises.map((exercise) => {
                const parts = exercise.text.split('___');
                const userAnswer = userAnswers[exercise.id] || '';
                const isCorrect = showResults && userAnswer.trim().toLowerCase() === exercise.correct.toLowerCase();

                return (
                  <div key={exercise.id} className='exercise-item' style={{ margin: '15px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                      <span>{parts[0]}</span>
                      <input
                        type='text'
                        value={userAnswer}
                        onChange={(e) => handleInputChange(exercise.id, e.target.value)}
                        style={{
                            margin: '0 5px',
                            border: showResults ? (isCorrect ? '2px solid green' : '2px solid red') : '1px solid #ccc'
                        }}
                        disabled={showResults}
                      />
                      <span>{parts[1]}</span>
                      {showResults && !isCorrect && <span style={{ color: 'red', marginLeft: '10px' }}>Respuesta correcta: {exercise.correct}</span>}
                    </div>
                    <div style={{ marginLeft: '5px', fontStyle: 'italic', color: '#555' }}>({exercise.spanish})</div>
                  </div>
                );
              })}
              <div style={{ marginTop: '20px' }}>
                <button onClick={checkAnswers} style={{ marginRight: '10px', padding: '10px 15px', fontSize: '0.9em' }}>Comprobar respuestas</button>
                <button onClick={resetAnswers} style={{ padding: '10px 15px', fontSize: '0.9em' }}>Reiniciar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default A1_02_SeSinPreguntas;