import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Where is the hotel?',
      'Woman: It is downtown. It is near the park.',
      'Man: Is it near the museum?',
      'Woman: Yes, the museum is across from the hotel in the park.',
      'Man: That is a good location.',
      'Woman: Yes, and the mall is near by, too.'
    ],
    spanish: [
      'Hombre: ¿Dónde está el hotel?',
      'Mujer: Está en el centro. Está cerca del parque.',
      'Hombre: ¿Está cerca del museo?',
      'Mujer: Sí, el museo está enfrente del hotel en el parque.',
      'Hombre: Esa es una buena ubicación.',
      'Mujer: Sí, y el centro comercial también está cerca.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-1-Prepositions.mp3',
    exercises: [
        { english: "It is ______ the park.", spanish: "(Está cerca del parque.)", correct: "near" },
        { english: "the museum is ______ from the hotel", spanish: "(el museo está enfrente del hotel)", correct: "across" },
        { english: "the mall is ______ by, too.", spanish: "(el centro comercial también está cerca.)", correct: "near" }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Where do you live?',
      'Woman: I live in the east side of town.',
      'Man: Are you near the university?',
      'Woman: Yes, it is not far away.',
      'Man: Are you near the beach?',
      'Woman: Yes, I live on the beach actually.'
    ],
    spanish: [
      'Hombre: ¿Dónde vives?',
      'Mujer: Vivo en el lado este de la ciudad.',
      'Hombre: ¿Estás cerca de la universidad?',
      'Mujer: Sí, no está muy lejos.',
      'Hombre: ¿Estás cerca de la playa?',
      'Mujer: Sí, de hecho vivo en la playa.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-2-Prepositions.mp3',
    exercises: [
        { english: "I live in the ______ side of town.", spanish: "(Vivo en el lado este de la ciudad.)", correct: "east" },
        { english: "it is not far ______.", spanish: "(no está muy lejos.)", correct: "away" },
        { english: "I live ______ the beach actually.", spanish: "(de hecho vivo en la playa.)", correct: "on" }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Where is the mall?',
      'Woman: It is next to the train station.',
      'Man: Where is the cafe?',
      'Woman: It is across from the train station.',
      'Man: And where is the nearest gym?',
      'Woman: There is one in the mall on the second floor.'
    ],
    spanish: [
      'Hombre: ¿Dónde está el centro comercial?',
      'Mujer: Está al lado de la estación de tren.',
      'Hombre: ¿Dónde está la cafetería?',
      'Mujer: Está enfrente de la estación de tren.',
      'Hombre: ¿Y dónde está el gimnasio más cercano?',
      'Mujer: Hay uno en el centro comercial en el segundo piso.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-3-Prepositions.mp3',
    exercises: [
        { english: "It is ______ to the train station.", spanish: "(Está al lado de la estación de tren.)", correct: "next" },
        { english: "It is ______ from the train station.", spanish: "(Está enfrente de la estación de tren.)", correct: "across" },
        { english: "There is one in the mall on the ______ floor.", spanish: "(Hay uno en el centro comercial en el segundo piso.)", correct: "second" }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Does your town have a language school?',
      'Woman: Yes, there is one on A Street.',
      'Man: Where on A Street?',
      'Woman: It is between the bank and the post office.',
      'Man: Oh, that is close.',
      'Woman: Yes, it is only five minutes away.'
    ],
    spanish: [
      'Hombre: ¿Hay una escuela de idiomas en tu ciudad?',
      'Mujer: Sí, hay una en la calle A.',
      'Hombre: ¿En qué parte de la calle A?',
      'Mujer: Está entre el banco y la oficina de correos.',
      'Hombre: Oh, eso está cerca.',
      'Mujer: Sí, está a solo cinco minutos.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-4-Prepositions.mp3',
    exercises: [
        { english: "there is one ______ A Street.", spanish: "(hay una en la calle A.)", correct: "on" },
        { english: "It is ______ the bank and the post office.", spanish: "(Está entre el banco y la oficina de correos.)", correct: "between" },
        { english: "it is only five minutes ______.", spanish: "(está a solo cinco minutos.)", correct: "away" }
    ]
  }
];

const A1_16 = () => {
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
        <h2 className='introduccion-title'>Preposiciones de Lugar</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar preposiciones de lugar para describir la ubicación de personas y cosas.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre cómo dar y pedir direcciones.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-Prepositions.mp3`}
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

export default A1_16;