import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: What do you do on the weekend?',
      'Woman: I usually stay home, but sometimes I go out.',
      'Man: Oh, where do you go?',
      'Woman: Sometimes I go to the beach. Sometimes, I go to the park.',
      'Man: I often go there, too. Do you ever go to the lake?',
      'Woman: No, very rarely. It is too far from my house.'
    ],
    spanish: [
      'Hombre: ¿Qué haces el fin de semana?',
      'Mujer: Normalmente me quedo en casa, pero a veces salgo.',
      'Hombre: Oh, ¿a dónde vas?',
      'Mujer: A veces voy a la playa. A veces, voy al parque.',
      'Hombre: Yo también voy a menudo allí. ¿Alguna vez vas al lago?',
      'Mujer: No, muy raramente. Está demasiado lejos de mi casa.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-1-Adverbs-Frequency.mp3',
    exercises: [
        { english: "I ______ stay home", spanish: "(Normalmente me quedo en casa)", correct: "usually" },
        { english: "______ I go out.", spanish: "(a veces salgo.)", correct: "Sometimes" },
        { english: "I ______ go there, too.", spanish: "(Yo también voy a menudo allí.)", correct: "often" },
        { english: "No, very ______.", spanish: "(No, muy raramente.)", correct: "rarely" }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: What do you usually have for dinner?',
      'Woman: I try to eat healthy, so I usually cook vegetables.',
      'Man: Really? What kind of stuff do you make?',
      'Woman: Sometimes, I make soups. Sometimes, I make stir-fry.',
      'Man: Stir-fry! That’s not very healthy.',
      'Woman: I know, but I don\\\'t eat it often.'
    ],
    spanish: [
      'Hombre: ¿Qué sueles cenar?',
      'Mujer: Intento comer sano, así que suelo cocinar verduras.',
      'Hombre: ¿En serio? ¿Qué tipo de cosas haces?',
      'Mujer: A veces, hago sopas. A veces, hago salteados.',
      'Hombre: ¡Salteado! Eso no es muy saludable.',
      'Mujer: Lo sé, pero no lo como a menudo.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-2-Adverbs-Frequency.mp3',
    exercises: [
        { english: "I ______ cook vegetables.", spanish: "(suelo cocinar verduras.)", correct: "usually" },
        { english: "______, I make soups.", spanish: "(A veces, hago sopas.)", correct: "Sometimes" },
        { english: "I don't eat it ______.", spanish: "(no lo como a menudo.)", correct: "often" }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Woman: Do you take the bus to work?',
      'Man: No, I never take the bus. I always drive.',
      'Woman: Yeah, it\\\'s so much easier to drive.',
      'Man: Do you drive to work?',
      'Woman: Actually, I rarely drive. I usually walk to work. I live near the office.',
      'Man: Lucky you!'
    ],
    spanish: [
      'Mujer: ¿Tomas el autobús para ir al trabajo?',
      'Hombre: No, nunca tomo el autobús. Siempre conduzco.',
      'Mujer: Sí, es mucho más fácil conducir.',
      'Hombre: ¿Vas en coche al trabajo?',
      'Mujer: En realidad, rara vez conduzco. Suelo ir andando al trabajo. Vivo cerca de la oficina.',
      'Hombre: ¡Qué suerte!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-3-Adverbs-Frequency-Commute.mp3',
    exercises: [
        { english: "I ______ take the bus.", spanish: "(nunca tomo el autobús.)", correct: "never" },
        { english: "I ______ drive.", spanish: "(Siempre conduzco.)", correct: "always" },
        { english: "I ______ drive.", spanish: "(rara vez conduzco.)", correct: "rarely" },
        { english: "I ______ walk to work.", spanish: "(Suelo ir andando al trabajo.)", correct: "usually" }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Do you ever go to the movies?',
      'Woman: I rarely do. It is too expensive. Do you?',
      'Man: No, not often. I usually rent DVDs.',
      'Woman: Really? I never do that. I usually stream movies.',
      'Man: Nice. Do you have fast Internet?',
      'Woman: Yeah, usually it is fast, but sometimes it’s slow.'
    ],
    spanish: [
      'Hombre: ¿Alguna vez vas al cine?',
      'Mujer: Rara vez lo hago. Es demasiado caro. ¿Y tú?',
      'Hombre: No, no a menudo. Suelo alquilar DVDs.',
      'Mujer: ¿En serio? Nunca hago eso. Suelo ver películas en streaming.',
      'Hombre: Genial. ¿Tienes Internet rápido?',
      'Mujer: Sí, normalmente es rápido, pero a veces es lento.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-4-Adverbs-Frequency-Movie.mp3',
    exercises: [
        { english: "I ______ do.", spanish: "(Rara vez lo hago.)", correct: "rarely" },
        { english: "No, not ______.", spanish: "(No, no a menudo.)", correct: "often" },
        { english: "I ______ rent DVDs.", spanish: "(Suelo alquilar DVDs.)", correct: "usually" },
        { english: "I ______ do that.", spanish: "(Nunca hago eso.)", correct: "never" },
        { english: "I ______ stream movies.", spanish: "(Suelo ver películas en streaming.)", correct: "usually" },
        { english: "______ it is fast, but ______ it’s slow.", spanish: "(normalmente es rápido, pero a veces es lento.)", correct: "usually/sometimes" }
    ]
  }
];

const A1_20 = () => {
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
        <h2 className='introduccion-title'>Adverbios de Frecuencia</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar adverbios de frecuencia para describir con qué frecuencia haces las cosas.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre tus hábitos y rutinas.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-Adverbs-Frequency.mp3`}
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
                    const parts = exercise.english.split('______');
                    const exerciseId = `${conv.id}-${i}`;
                    const isCorrect = showResults && userAnswers[exerciseId]?.trim().toLowerCase() === exercise.correct.toLowerCase();

                    return (
                        <div key={i} className="exercise">
                        <p>
                            {parts[0]}
                            <input
                            type="text"
                            value={userAnswers[exerciseId] || ''}
                            onChange={(e) => handleInputChange(conv.id, i, e.target.value)}
                            className={showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}
                            />
                            {parts.length > 1 && parts[1]}
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

export default A1_20;