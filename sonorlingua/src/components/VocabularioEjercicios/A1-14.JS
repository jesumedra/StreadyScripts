import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: When is your birthday?',
      'Woman: It is October 18th.',
      'Man: My birthday is in October, too.',
      'Woman: When is it?',
      'Man: It is October 21st.',
      'Woman: My sister\'s birthday is in May. It is May 5th.',
      'Man: My brother\'s birthday is May 11th.'
    ],
    spanish: [
      'Hombre: ¿Cuándo es tu cumpleaños?',
      'Mujer: Es el 18 de octubre.',
      'Hombre: Mi cumpleaños también es en octubre.',
      'Mujer: ¿Cuándo es?',
      'Hombre: Es el 21 de octubre.',
      'Mujer: El cumpleaños de mi hermana es en mayo. Es el 5 de mayo.',
      'Hombre: El cumpleaños de mi hermano es el 11 de mayo.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-1-Ordinals-Birthday.mp3',
    exercises: [
        { english: "It is October ______.", spanish: "(Es el 18 de octubre.)", correct: "18th" },
        { english: "It is May ______.", spanish: "(Es el 5 de mayo.)", correct: "5th" },
        { english: "My sister's birthday is in ______.", spanish: "(El cumpleaños de mi hermana es en mayo.)", correct: "May" },
        { english: "May ______.", spanish: "(El 11 de mayo.)", correct: "11th" }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: When is your vacation?',
      'Woman: It is from the 8th to the 12th.',
      'Man: Nice. My vacation is from the 9th to the 15th.',
      'Woman: So you work on the 13th?',
      'Man: No, I start work on the 16th.',
      'Woman: Me too.'
    ],
    spanish: [
      'Hombre: ¿Cuándo son tus vacaciones?',
      'Mujer: Son del 8 al 12.',
      'Hombre: Genial. Mis vacaciones son del 9 al 15.',
      'Mujer: ¿Así que trabajas el 13?',
      'Hombre: No, empiezo a trabajar el 16.',
      'Mujer: Yo también.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-2-Ordinals-Vacation.mp3',
    exercises: [
        { english: "It is from the 8th to the ______.", spanish: "(Son del 8 al 12.)", correct: "12th" },
        { english: "It is from the 9th to the ______.", spanish: "(Son del 9 al 15.)", correct: "15th" },
        { english: "I work on the ______.", spanish: "(Yo trabajo el 13.)", correct: "13th" },
        { english: "I start work on the ______.", spanish: "(Empiezo a trabajar el 16.)", correct: "16th" }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Where are the books?',
      'Woman: The books are on the fifth floor.',
      'Man: Where are the sporting goods?',
      'Woman: Sporting goods are on the third floor.',
      'Man: What about the other floors?',
      'Woman: They are on the first, second, fourth and sixth floors.'
    ],
    spanish: [
      'Hombre: ¿Dónde están los libros?',
      'Mujer: Los libros están en el quinto piso.',
      'Hombre: ¿Dónde están los artículos deportivos?',
      'Mujer: Los artículos deportivos están en el tercer piso.',
      'Hombre: ¿Y los otros pisos?',
      'Mujer: Están en el primer, segundo, cuarto y sexto piso.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-3-Ordinals-Store.mp3',
    exercises: [
        { english: "The books are on the ______ floor.", spanish: "(Los libros están en el quinto piso.)", correct: "fifth" },
        { english: "Sporting goods are on the ______ floor.", spanish: "(Los artículos deportivos están en el tercer piso.)", correct: "third" },
        { english: "They are on the first, second, fourth and ______ floors.", spanish: "(Están en el primer, segundo, cuarto y sexto piso.)", correct: "sixth" }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: What period do you have English?',
      'Woman: I have English first period.',
      'Man: Me too. What about second period?',
      'Woman: I have math. What about you?',
      'Man: I have science.',
      'Woman: I have art class third period, too!'
    ],
    spanish: [
      'Hombre: ¿En qué hora tienes inglés?',
      'Mujer: Tengo inglés en la primera hora.',
      'Hombre: Yo también. ¿Y en la segunda hora?',
      'Mujer: Tengo matemáticas. ¿Y tú?',
      'Hombre: Tengo ciencias.',
      'Mujer: ¡Yo también tengo clase de arte en la tercera hora!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-4-Ordinals-Classes.mp3',
    exercises: [
        { english: "I have math ______ period.", spanish: "(Tengo matemáticas en la primera hora.)", correct: "first" },
        { english: "What about ______ period?", spanish: "(¿Y en la segunda hora?)", correct: "second" },
        { english: "I have art class ______ period, too!", spanish: "(¡Yo también tengo clase de arte en la tercera hora!)", correct: "third" }
    ]
  }
];

const A1_14 = () => {
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
        <h2 className='introduccion-title'>Números Ordinales</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar los números ordinales para hablar de fechas y orden.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre cumpleaños, vacaciones, pisos de un edificio y horarios de clase.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-Ordinals.mp3`}
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

export default A1_14;