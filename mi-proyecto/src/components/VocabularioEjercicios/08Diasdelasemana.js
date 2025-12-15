import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: What day is it today?',
      'Woman: Today is Monday.',
      'Man: What day is tomorrow?',
      'Woman: Tomorrow is Tuesday.',
      'Man: What about yesterday?',
      'Woman: Yesterday was Sunday.'
    ],
    spanish: [
      'Hombre: ¿Qué día es hoy?',
      'Mujer: Hoy es lunes.',
      'Hombre: ¿Qué día es mañana?',
      'Mujer: Mañana es martes.',
      'Hombre: ¿Y ayer?',
      'Mujer: Ayer fue domingo.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-08/A1-08-1.mp3',
    exercises: [
      { english: 'Today is ______. (Hoy es lunes.)', spanish: 'Monday' },
      { english: 'Tomorrow is ______. (Mañana es martes.)', spanish: 'Tuesday' },
      { english: 'Yesterday was ______. (Ayer fue domingo.)', spanish: 'Sunday' }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: When is the party?',
      'Woman: The party is on Friday.',
      'Man: What about the meeting?',
      'Woman: The meeting is on Wednesday.',
      'Man: And the game?',
      'Woman: The game is on Saturday.'
    ],
    spanish: [
      'Hombre: ¿Cuándo es la fiesta?',
      'Mujer: La fiesta es el viernes.',
      'Hombre: ¿Y la reunión?',
      'Mujer: La reunión es el miércoles.',
      'Hombre: ¿Y el partido?',
      'Mujer: El partido es el sábado.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-08/A1-08-2.mp3',
    exercises: [
      { english: 'The party is on ______. (La fiesta es el viernes.)', spanish: 'Friday' },
      { english: 'The meeting is on ______. (La reunión es el miércoles.)', spanish: 'Wednesday' },
      { english: 'The game is on ______. (El partido es el sábado.)', spanish: 'Saturday' }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Do you work on weekends?',
      'Woman: No, I work on weekdays.',
      'Man: So you work from Monday to Friday?',
      'Woman: Yes, that’s right.',
      'Man: What do you do on weekends?',
      'Woman: I relax on Saturday and Sunday.'
    ],
    spanish: [
      'Hombre: ¿Trabajas los fines de semana?',
      'Mujer: No, trabajo los días de semana.',
      'Hombre: ¿Así que trabajas de lunes a viernes?',
      'Mujer: Sí, así es.',
      'Hombre: ¿Qué haces los fines de semana?',
      'Mujer: Descanso el sábado y el domingo.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-08/A1-08-3.mp3',
    exercises: [
      { english: 'I work on ______. (Trabajo los días de semana.)', spanish: 'weekdays' },
      { english: 'I relax on ______ and ______. (Descanso el sábado y el domingo.)', spanish: 'Saturday, Sunday' }
    ]
  }
];

const DiasDeLaSemana = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (convId, exerciseIndex, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [`${convId}-${exerciseIndex}`]: value
    }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetAnswers = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Días de la Semana</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás los días de la semana en inglés.</h4>
        <div className='audio-item'>
          <audio controls>
            <source src={`/Audio/SoundGrammar/A1-Audio/A1-08/A1-08-all.mp3`} type='audio/mp3' />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className='conversations-container'>
        {conversations.map((conv) => (
          <div key={conv.id} className="conversation-container">
            <h2>{conv.title}</h2>
            <div className="audio-column">
              <audio controls>
                <source src={conv.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="text-column">
              <h3>English</h3>
              {conv.english.map((line, i) => <p key={i}>{line}</p>)}
            </div>
            <div className="text-column">
              <h3>Spanish</h3>
              {conv.spanish.map((line, i) => <p key={i}>{line}</p>)}
            </div>
            {conv.exercises && (
              <div className="exercises-column">
                <h3>Exercises</h3>
                {conv.exercises.map((exercise, i) => {
                  const [part1, part2] = exercise.english.split('______');
                  const exerciseId = `${conv.id}-${i}`;
                  const isCorrect = showResults && userAnswers[exerciseId]?.trim().toLowerCase() === exercise.spanish.toLowerCase();

                  return (
                    <div key={i} className="exercise">
                      <p>
                        {part1}
                        <input
                          type="text"
                          value={userAnswers[exerciseId] || ''}
                          onChange={(e) => handleInputChange(conv.id, i, e.target.value)}
                          className={showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}
                        />
                        {part2}
                      </p>
                      {showResults && !isCorrect && <p className="correct-answer">Respuesta correcta: {exercise.spanish}</p>}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
        <div className="action-buttons">
          <button onClick={checkAnswers}>Comprobar respuestas</button>
          <button onClick={resetAnswers}>Intentar de nuevo</button>
        </div>
      </div>
    </div>
  );
};

export default DiasDeLaSemana;