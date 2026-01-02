import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Are you hot?',
      'Woman: Yes, I am. Is the air conditioning on?',
      'Man: No, it’s not. It’s off.',
      'Woman: Is jazz music OK?',
      'Man: Yes, I like jazz.',
      'Woman: Me too. I am a big fan of jazz music.'
    ],
    spanish: [
      'Hombre: ¿Tienes calor?',
      'Mujer: Sí, tengo. ¿Está encendido el aire acondicionado?',
      'Hombre: No, no lo está. Está apagado.',
      'Mujer: ¿Está bien la música jazz?',
      'Hombre: Sí, me gusta el jazz.',
      'Mujer: A mí también. Soy una gran fan de la música jazz.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-1-Are-you.mp3',
    exercises: [
        { english: "Are ______ hot?", spanish: "(¿Tienes calor?)", correct: "you" },
        { english: "Is ______ air conditioning on?", spanish: "(¿Está encendido el aire acondicionado?)", correct: "the" },
        { english: "No, it’s ______.", spanish: "(No, está apagado.)", correct: "off" },
        { english: "Is ______ music OK?", spanish: "(¿Está bien la música jazz?)", correct: "jazz" },
        { english: "Yes, I ______ jazz.", spanish: "(Sí, me gusta el jazz.)", correct: "like" },
        { english: "I am a big ______ of jazz music.", spanish: "(Soy una gran fan de la música jazz.)", correct: "fan" }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Are you from Spain?',
      'Woman: No, I am not. I am from Mexico.',
      'Man: Oh, so you are Mexican.',
      'Woman: Yes, I am. Are you from the U.S.?',
      'Man: Yes, I am American.',
      'Woman: Nice to meet you.'
    ],
    spanish: [
      'Hombre: ¿Eres de España?',
      'Mujer: No, no lo soy. Soy de México.',
      'Hombre: Oh, entonces eres mexicana.',
      'Mujer: Sí, lo soy. ¿Eres de los Estados Unidos?',
      'Hombre: Sí, soy estadounidense.',
      'Mujer: Encantada de conocerte.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-2-Are-you.mp3',
    exercises: [
        { english: "Are you from ______?", spanish: "(¿Eres de España?)", correct: "Spain" },
        { english: "I am from ______.", spanish: "(Soy de México.)", correct: "Mexico" },
        { english: "so you are ______.", spanish: "(entonces eres mexicana.)", correct: "Mexican" },
        { english: "Are you from the ______?", spanish: "(¿Eres de los Estados Unidos?)", correct: "U.S." },
        { english: "I am ______.", spanish: "(soy estadounidense.)", correct: "American" }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Are you a student?',
      'Woman: Yes, I am. I study business.',
      'Man: Oh, are you a business major?',
      'Woman: Yes, that’s right. Are you a student too?',
      'Man: Yes, but I am a music major.',
      'Woman: Oh, cool. Are you in a band?',
      'Man: I am. I am the singer.'
    ],
    spanish: [
      'Hombre: ¿Eres estudiante?',
      'Mujer: Sí, lo soy. Estudio negocios.',
      'Hombre: Oh, ¿eres estudiante de negocios?',
      'Mujer: Sí, así es. ¿Tú también eres estudiante?',
      'Hombre: Sí, pero soy estudiante de música.',
      'Mujer: Oh, genial. ¿Estás en una banda?',
      'Hombre: Lo estoy. Soy el cantante.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-3-Are-you.mp3',
    exercises: [
        { english: "Are you a ______?", spanish: "(¿Eres estudiante?)", correct: "student" },
        { english: "I study ______.", spanish: "(Estudio negocios.)", correct: "business" },
        { english: "Are you a ______ major?", spanish: "(¿eres estudiante de negocios?)", correct: "business" },
        { english: "I am a ______ major.", spanish: "(soy estudiante de música.)", correct: "music" },
        { english: "Are you in a ______?", spanish: "(¿Estás en una banda?)", correct: "band" },
        { english: "I am the ______.", spanish: "(Soy el cantante.)", correct: "singer" }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Are you ready for the test?',
      'Woman: No, I am not. I am so nervous.',
      'Man: Are you serious? You are always ready for tests.',
      'Woman: Not this time. I am not prepared.',
      'Man: Don’t worry. You will be fine.',
      'Woman: Are you ready?',
      'Man: Yes, I am. I am ready to go.'
    ],
    spanish: [
      'Hombre: ¿Estás lista para el examen?',
      'Mujer: No, no lo estoy. Estoy muy nerviosa.',
      'Hombre: ¿Hablas en serio? Siempre estás lista para los exámenes.',
      'Mujer: No esta vez. No estoy preparada.',
      'Hombre: No te preocupes. Estarás bien.',
      'Mujer: ¿Estás listo?',
      'Hombre: Sí, lo estoy. Estoy listo para empezar.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-4-Are-you.mp3',
    exercises: [
        { english: "Are you ready for the ______?", spanish: "(¿Estás lista para el examen?)", correct: "test" },
        { english: "I am so ______.", spanish: "(Estoy muy nerviosa.)", correct: "nervous" },
        { english: "Are you ______?", spanish: "(¿Hablas en serio?)", correct: "serious" },
        { english: "You are always ______ for tests.", spanish: "(Siempre estás lista para los exámenes.)", correct: "ready" },
        { english: "I am not ______.", spanish: "(No estoy preparada.)", correct: "prepared" },
        { english: "Are you ______?", spanish: "(¿Estás listo?)", correct: "ready" }
    ]
  }
];

const A1_24 = () => {
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
        <h2 className='introduccion-title'>Are you...?</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar la pregunta "Are you...?" para preguntar sobre el estado o la identidad de alguien.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones comunes donde se utiliza esta estructura.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-Are-you.mp3`}
              type='audio/mp3'
            />
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
                    const isCorrect = showResults && userAnswers[exerciseId]?.trim().toLowerCase() === exercise.correct.toLowerCase();

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
                        <p><em>{exercise.spanish}</em></p>
                        {showResults && !isCorrect && <p className="correct-answer">Respuesta correcta: {exercise.correct}</p>}
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

export default A1_24;