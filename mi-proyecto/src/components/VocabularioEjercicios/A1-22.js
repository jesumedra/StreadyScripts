import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: How was the movie?',
      'Woman: It was really good.',
      'Man: Was it scary?',
      'Woman: Yes, it was really scary.',
      'Man: Nice. Was it crowded?',
      'Woman: No, it wasn’t. There weren’t many people there, surprisingly.'
    ],
    spanish: [
      'Hombre: ¿Qué tal la película?',
      'Mujer: Estuvo muy buena.',
      'Hombre: ¿Daba miedo?',
      'Mujer: Sí, daba mucho miedo.',
      'Hombre: Genial. ¿Estaba lleno?',
      'Mujer: No, no lo estaba. No había mucha gente allí, sorprendentemente.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-1-Was-Were.mp3',
    exercises: [
        { english: "It ______ really good.", spanish: "(Estuvo muy buena.)", correct: "was" },
        { english: "______ it scary?", spanish: "(¿Daba miedo?)", correct: "Was" },
        { english: "Yes, it ______ really scary.", spanish: "(Sí, daba mucho miedo.)", correct: "was" },
        { english: "______ it crowded?", spanish: "(¿Estaba lleno?)", correct: "Was" },
        { english: "No, it ______.", spanish: "(No, no lo estaba.)", correct: "wasn't" },
        { english: "There ______ many people there", spanish: "(No había mucha gente allí)", correct: "weren't" }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Where were you last night?',
      'Woman: I was at work.',
      'Man: Really? I was at your shop. You weren’t there.',
      'Woman: No, I was in the back working.',
      'Man: You were?',
      'Woman: Really! I was there.'
    ],
    spanish: [
      'Hombre: ¿Dónde estuviste anoche?',
      'Mujer: Estaba en el trabajo.',
      'Hombre: ¿En serio? Estuve en tu tienda. No estabas allí.',
      'Mujer: No, estaba en la parte de atrás trabajando.',
      'Hombre: ¿Lo estabas?',
      'Mujer: ¡De verdad! Estaba allí.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-2-Was-Were.mp3',
    exercises: [
        { english: "Where ______ you last night?", spanish: "(¿Dónde estuviste anoche?)", correct: "were" },
        { english: "I ______ at work.", spanish: "(Estaba en el trabajo.)", correct: "was" },
        { english: "You ______ there.", spanish: "(No estabas allí.)", correct: "weren't" },
        { english: "I ______ in the back working.", spanish: "(estaba en la parte de atrás trabajando.)", correct: "was" },
        { english: "You ______?", spanish: "(¿Lo estabas?)", correct: "were" },
        { english: "I ______ there.", spanish: "(Estaba allí.)", correct: "was" }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: How was the test?',
      'Woman: It was really hard.',
      'Man: How long was it?',
      'Woman: There were about 20 problems.',
      'Man: Yeah? What was your score?',
      'Woman: Let’s just say, it wasn’t great, but it wasn’t bad either.'
    ],
    spanish: [
      'Hombre: ¿Qué tal el examen?',
      'Mujer: Fue muy difícil.',
      'Hombre: ¿Cómo de largo era?',
      'Mujer: Había unos 20 problemas.',
      'Hombre: ¿Sí? ¿Cuál fue tu puntuación?',
      'Mujer: Digamos que no fue genial, pero tampoco estuvo mal.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-3-Was-Were.mp3',
    exercises: [
        { english: "It ______ really hard.", spanish: "(Fue muy difícil.)", correct: "was" },
        { english: "How long ______ it?", spanish: "(¿Cómo de largo era?)", correct: "was" },
        { english: "There ______ about 20 problems.", spanish: "(Había unos 20 problemas.)", correct: "were" },
        { english: "it ______ great", spanish: "(no fue genial)", correct: "wasn't" },
        { english: "it ______ bad either.", spanish: "(tampoco estuvo mal.)", correct: "wasn't" }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Do you know who was at the party?',
      'Woman: Jason was there. So was Sue.',
      'Man: Oh, were Tom and Katie there?',
      'Woman: No, they weren’t there, but their son was.',
      'Man: Oh, I see. So, was it fun?',
      'Woman: Yeah, it was a fun evening.'
    ],
    spanish: [
      'Hombre: ¿Sabes quién estuvo en la fiesta?',
      'Mujer: Jason estaba allí. También Sue.',
      'Hombre: Oh, ¿estuvieron Tom y Katie allí?',
      'Mujer: No, no estuvieron allí, pero su hijo sí.',
      'Hombre: Oh, ya veo. Entonces, ¿fue divertido?',
      'Mujer: Sí, fue una noche divertida.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-4-Was-Were.mp3',
    exercises: [
        { english: "Jason ______ there.", spanish: "(Jason estaba allí.)", correct: "was" },
        { english: "So ______ Sue.", spanish: "(También Sue.)", correct: "was" },
        { english: "______ Tom and Katie there?", spanish: "(¿estuvieron Tom y Katie allí?)", correct: "Were" },
        { english: "No, they ______ there", spanish: "(No, no estuvieron allí)", correct: "weren't" },
        { english: "but their son ______.", spanish: "(pero su hijo sí.)", correct: "was" },
        { english: "______ it fun?", spanish: "(¿fue divertido?)", correct: "Was" },
        { english: "Yeah, it ______ a fun evening.", spanish: "(Sí, fue una noche divertida.)", correct: "was" }
    ]
  }
];

const A1_22 = () => {
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
        <h2 className='introduccion-title'>Was / Were</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar "was" y "were" para hablar del pasado.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre experiencias pasadas, como ver una película, estar en un lugar o hacer un examen.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-Was-Were.mp3`}
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

export default A1_22;