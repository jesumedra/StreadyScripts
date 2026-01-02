import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Do you know him?',
      'Woman: Yes, I know him. He is my neighbor.',
      'Man: Does he know you?',
      'Woman: Yes, he knows me.',
      'Man: Do you like him?',
      'Woman: Yes, I like him a lot.'
    ],
    spanish: [
      'Hombre: ¿Lo conoces?',
      'Mujer: Sí, lo conozco. Es mi vecino.',
      'Hombre: ¿Él te conoce?',
      'Mujer: Sí, él me conoce.',
      'Hombre: ¿Te agrada?',
      'Mujer: Sí, me agrada mucho.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-10/A1-10-1.mp3',
    exercises: [
      { english: 'Do you know ______? (¿Lo conoces?)', spanish: 'him' },
      { english: 'Yes, I know ______. (Sí, lo conozco.)', spanish: 'him' },
      { english: 'Does he know ______? (¿Él te conoce?)', spanish: 'you' },
      { english: 'Yes, he knows ______. (Sí, él me conoce.)', spanish: 'me' },
      { english: 'Do you like ______? (¿Te agrada?)', spanish: 'him' },
      { english: 'Yes, I like ______ a lot. (Sí, me agrada mucho.)', spanish: 'him' }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Do you see them?',
      'Woman: No, I don’t see them. Where are they?',
      'Man: They are over there. Can you see them now?',
      'Woman: Oh, yes. I see them. They see us too.',
      'Man: Great. Let’s go talk to them.'
    ],
    spanish: [
      'Hombre: ¿Los ves?',
      'Mujer: No, no los veo. ¿Dónde están?',
      'Hombre: Están por allá. ¿Puedes verlos ahora?',
      'Mujer: Oh, sí. Los veo. Ellos también nos ven.',
      'Hombre: Genial. Vamos a hablar con ellos.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-10/A1-10-2.mp3',
    exercises: [
      { english: 'Do you see ______? (¿Los ves?)', spanish: 'them' },
      { english: 'No, I don’t see ______. (No, no los veo.)', spanish: 'them' },
      { english: 'Can you see ______ now? (¿Puedes verlos ahora?)', spanish: 'them' },
      { english: 'I see ______. (Los veo.)', spanish: 'them' },
      { english: 'They see ______ too. (Ellos también nos ven.)', spanish: 'us' },
      { english: 'Let’s go talk to ______. (Vamos a hablar con ellos.)', spanish: 'them' }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: She likes you.',
      'Woman: Really? I like her too.',
      'Man: You should ask her out.',
      'Woman: I will. I’ll call her tomorrow.',
      'Man: You have her number?',
      'Woman: Yes, she gave it to me.'
    ],
    spanish: [
      'Hombre: Le gustas.',
      'Mujer: ¿En serio? Ella también me gusta.',
      'Hombre: Deberías invitarla a salir.',
      'Mujer: Lo haré. La llamaré mañana.',
      'Hombre: ¿Tienes su número?',
      'Mujer: Sí, ella me lo dio.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-10/A1-10-3.mp3',
    exercises: [
      { english: 'She likes ______. (Le gustas.)', spanish: 'you' },
      { english: 'I like ______ too. (Ella también me gusta.)', spanish: 'her' },
      { english: 'You should ask ______ out. (Deberías invitarla a salir.)', spanish: 'her' },
      { english: 'I’ll call ______ tomorrow. (La llamaré mañana.)', spanish: 'her' },
      { english: 'You have ______ number? (¿Tienes su número?)', spanish: 'her' },
      { english: 'she gave it to ______. (ella me lo dio.)', spanish: 'me' }
    ]
  }
];

const PronombresObjeto = () => {
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
        <h2 className='introduccion-title'>Pronombres de Objeto</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar los pronombres de objeto en inglés.</h4>
        <div className='audio-item'>
          <audio controls>
            <source src={`/Audio/SoundGrammar/A1-Audio/A1-10/A1-10-all.mp3`} type='audio/mp3' />
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

export default PronombresObjeto;