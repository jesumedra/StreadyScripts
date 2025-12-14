import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Woman: When is fall in America?',
      'Man: It is in September, October, November and December.',
      'Woman: Oh, how that is spring in New Zealand.',
      'Man: When is fall in New Zealand?',
      'Woman: It is in March, April, May and June!',
      'Man: Oh, cool!'
    ],
    spanish: [
      'Mujer: ¿Cuándo es el otoño en América?',
      'Hombre: Es en septiembre, octubre, noviembre y diciembre.',
      'Mujer: Oh, así que es primavera en Nueva Zelanda.',
      'Hombre: ¿Cuándo es el otoño en Nueva Zelanda?',
      'Mujer: ¡Es en marzo, abril, mayo y junio!',
      'Hombre: ¡Oh, genial!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-1-Months-Seasons.mp3',
    exercises: [
        {
            question: "When is fall in New Zealand?",
            options: ["September, October, November and December.", "March, April, May and June.", "June, July, August and September."],
            correctAnswer: "March, April, May and June."
        }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Woman: So, when is summer in America?',
      'Man: It is from June, July, August and September.',
      'Woman: June to September is winter in New Zealand.',
      'Man: So, when is summer?',
      'Woman: Summer is December, January, February and March.',
      'Man: I want to go to New Zealand then.',
      'Woman: Please come!'
    ],
    spanish: [
      'Mujer: Entonces, ¿cuándo es el verano en América?',
      'Hombre: Es desde junio, julio, agosto y septiembre.',
      'Mujer: De junio a septiembre es invierno en Nueva Zelanda.',
      'Hombre: Entonces, ¿cuándo es el verano?',
      'Mujer: El verano es en diciembre, enero, febrero y marzo.',
      'Hombre: Quiero ir a Nueva Zelanda entonces.',
      'Mujer: ¡Por favor, ven!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-2-Months-Seasons.mp3',
    exercises: [
        {
            question: "When is summer in New Zealand?",
            options: ["June to September", "December, January, February and March", "March, April, May and June"],
            correctAnswer: "December, January, February and March"
        }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Woman: What is your favorite month?',
      'Man: My favorite month is July.',
      'Woman: Why do you like July?',
      'Man: Because the weather is hot, and it is my birthday!',
      'Woman: Nice! My favorite month is February.',
      'Man: Why? Do you have a birthday in February?',
      'Woman: No, but I have no school!',
      'Man: Good reason!'
    ],
    spanish: [
      'Mujer: ¿Cuál es tu mes favorito?',
      'Hombre: Mi mes favorito es julio.',
      'Mujer: ¿Por qué te gusta julio?',
      'Hombre: ¡Porque el clima es caluroso y es mi cumpleaños!',
      'Mujer: ¡Genial! Mi mes favorito es febrero.',
      'Hombre: ¿Por qué? ¿Cumples años en febrero?',
      'Mujer: ¡No, pero no tengo clases!',
      'Hombre: ¡Buena razón!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-3-Months-Birthday.mp3',
    exercises: [
        {
            question: "Why is February the woman's favorite month?",
            options: ["It's her birthday.", "The weather is nice.", "She has no school."],
            correctAnswer: "She has no school."
        }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Woman: In your country, what month is hot?',
      'Man: July is very hot.',
      'Woman: What month is cold?',
      'Man: January is very cold.',
      'Woman: What month gets lots rain.',
      'Man: March. It is very wet in March.',
      'Woman: What month is cool?',
      'Man: Both April and October have cool weather'
    ],
    spanish: [
      'Mujer: En tu país, ¿qué mes es caluroso?',
      'Hombre: Julio es muy caluroso.',
      'Mujer: ¿Qué mes es frío?',
      'Hombre: Enero es muy frío.',
      'Mujer: ¿En qué mes llueve mucho?',
      'Hombre: Marzo. Es muy húmedo en marzo.',
      'Mujer: ¿Qué mes es fresco?',
      'Hombre: Tanto abril como octubre tienen un clima fresco.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-4-Months-Weather.mp3',
    exercises: [
        {
            question: "Which month gets lots of rain?",
            options: ["July", "January", "March"],
            correctAnswer: "March"
        }
    ]
  }
];

const A1_13 = () => {
    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState({});

    const handleAnswerChange = (convId, exerciseIndex, answer) => {
        setUserAnswers(prev => ({
            ...prev,
            [`${convId}-${exerciseIndex}`]: answer
        }));
    };

    const checkAnswers = (convId) => {
        const conversation = conversations.find(c => c.id === convId);
        if (!conversation) return;

        const newResults = {};
        conversation.exercises.forEach((exercise, index) => {
            const userAnswer = userAnswers[`${convId}-${index}`];
            newResults[`${convId}-${index}`] = userAnswer === exercise.correctAnswer;
        });
        setResults(prev => ({ ...prev, ...newResults }));
    };

  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Meses y Estaciones</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a hablar sobre los meses y las estaciones del año.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre el clima, los cumpleaños y las diferencias estacionales entre países.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-Months.mp3`}
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
            <div className="exercises-column">
                <h3>Ejercicios</h3>
                {conv.exercises.map((exercise, index) => (
                    <div key={index} className="exercise">
                        <p>{exercise.question}</p>
                        <div className="options">
                            {exercise.options.map((option, i) => (
                                <div key={i} className="option">
                                    <input
                                        type="radio"
                                        id={`${conv.id}-${index}-${i}`}
                                        name={`exercise-${conv.id}-${index}`}
                                        value={option}
                                        onChange={() => handleAnswerChange(conv.id, index, option)}
                                        checked={userAnswers[`${conv.id}-${index}`] === option}
                                    />
                                    <label htmlFor={`${conv.id}-${index}-${i}`}>{option}</label>
                                </div>
                            ))}
                        </div>
                        {results[`${conv.id}-${index}`] !== undefined && (
                            <p className={results[`${conv.id}-${index}`] ? 'correct' : 'incorrect'}>
                                {results[`${conv.id}-${index}`] ? '¡Correcto!' : `Incorrecto. La respuesta correcta es: ${exercise.correctAnswer}`}
                            </p>
                        )}
                    </div>
                ))}
                <button onClick={() => checkAnswers(conv.id)} className="check-answers-btn">Comprobar respuestas</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default A1_13;