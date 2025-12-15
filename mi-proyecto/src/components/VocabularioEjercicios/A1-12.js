import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: What time is it?',
      'Woman: It’s ten o’clock.',
      'Man: Is it ten in the morning or at night?',
      'Woman: It’s ten in the morning.',
      'Man: What about now?',
      'Woman: Now it’s ten thirty.'
    ],
    spanish: [
      'Hombre: ¿Qué hora es?',
      'Mujer: Son las diez en punto.',
      'Hombre: ¿Son las diez de la mañana o de la noche?',
      'Mujer: Son las diez de la mañana.',
      'Hombre: ¿Y ahora?',
      'Mujer: Ahora son las diez y media.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-12/A1-12-1.mp3',
    exercises: [
      { english: 'It’s ______ o’clock. (Son las diez en punto.)', spanish: 'ten' },
      { english: 'It’s ten in the ______. (Son las diez de la mañana.)', spanish: 'morning' },
      { english: 'Now it’s ten ______. (Ahora son las diez y media.)', spanish: 'thirty' }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: When is the meeting?',
      'Woman: The meeting is at two fifteen.',
      'Man: Two fifteen or two fifty?',
      'Woman: Two fifteen.',
      'Man: And what time is the lunch?',
      'Woman: The lunch is at twelve forty-five.'
    ],
    spanish: [
      'Hombre: ¿Cuándo es la reunión?',
      'Mujer: La reunión es a las dos y cuarto.',
      'Hombre: ¿Dos y cuarto o dos y cincuenta?',
      'Mujer: Dos y cuarto.',
      'Hombre: ¿Y a qué hora es el almuerzo?',
      'Mujer: El almuerzo es a las doce y cuarenta y cinco.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-12/A1-12-2.mp3',
    exercises: [
      { english: 'The meeting is at two ______. (La reunión es a las dos y cuarto.)', spanish: 'fifteen' },
      { english: 'The lunch is at twelve ______. (El almuerzo es a las doce y cuarenta y cinco.)', spanish: 'forty-five' }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: What time do you go to bed?',
      'Woman: I go to bed at eleven PM.',
      'Man: Do you wake up early?',
      'Woman: Yes, I wake up at six AM.',
      'Man: That’s early.',
      'Woman: I know. I’m always tired.'
    ],
    spanish: [
      'Hombre: ¿A qué hora te acuestas?',
      'Mujer: Me acuesto a las once de la noche.',
      'Hombre: ¿Te levantas temprano?',
      'Mujer: Sí, me levanto a las seis de la mañana.',
      'Hombre: Eso es temprano.',
      'Mujer: Lo sé. Siempre estoy cansada.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-12/A1-12-3.mp3',
    exercises: [
      { english: 'I go to bed at ______ PM. (Me acuesto a las once de la noche.)', spanish: 'eleven' },
      { english: 'I wake up at ______ AM. (Me levanto a las seis de la mañana.)', spanish: 'six' }
    ]
  }
];

const Time = () => {
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
        <h2 className='introduccion-title'>La Hora</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a decir la hora en inglés.</h4>
        <div className='audio-item'>
          <audio controls>
            <source src={`/Audio/SoundGrammar/A1-Audio/A1-12/A1-12-all.mp3`} type='audio/mp3' />
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

export default Time;