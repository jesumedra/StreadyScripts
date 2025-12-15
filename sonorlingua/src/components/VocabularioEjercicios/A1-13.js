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
    ],
  },
    {
        audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-1-Adjetivos-Posesivos.mp3',
        exercises: [
            {
                question: "What is the woman looking for?",
                options: ["Her keys", "Her phone", "Her wallet"],
                correctAnswer: "Her keys"
            },
            {
                question: "Where does the man suggest looking?",
                options: ["In her purse", "On the table", "In her coat pocket"],
                correctAnswer: "In her purse"
            },
            {
                question: "Where does the woman find her keys?",
                options: ["In her purse", "On the table", "In her coat pocket"],
                correctAnswer: "On the table"
            },
            {
                question: "What does the man say about his own keys?",
                options: ["He always loses them", "He keeps them in a special place", "He has a keychain"],
                correctAnswer: "He always loses them"
            },
            {
                question: "What is on the woman's keychain?",
                options: ["A small teddy bear", "A picture of her family", "A red ribbon"],
                correctAnswer: "A small teddy bear"
            }
        ]
    },
    {
        audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-2-Adjetivos-Posesivos.mp3',
        exercises: [
            {
                question: "What are the man and woman talking about?",
                options: ["Their favorite books", "Their pets", "Their families"],
                correctAnswer: "Their pets"
            },
            {
                question: "What kind of pet does the woman have?",
                options: ["A cat", "A dog", "A bird"],
                correctAnswer: "A dog"
            },
            {
                question: "What is the dog's name?",
                options: ["Max", "Buddy", "Rocky"],
                correctAnswer: "Max"
            },
            {
                question: "What kind of pet does the man have?",
                options: ["A cat", "A dog", "A fish"],
                correctAnswer: "A cat"
            },
            {
                question: "What is the cat's name?",
                options: ["Whiskers", "Shadow", "Luna"],
                correctAnswer: "Luna"
            }
        ]
    },
    {
        audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-3-Adjetivos-Posesivos.mp3',
        exercises: [
            {
                question: "What are the man and woman discussing?",
                options: ["Their jobs", "Their hobbies", "Their cars"],
                correctAnswer: "Their cars"
            },
            {
                question: "What color is the woman's car?",
                options: ["Red", "Blue", "Black"],
                correctAnswer: "Blue"
            },
            {
                question: "What kind of car does the woman have?",
                options: ["A sports car", "A sedan", "An SUV"],
                correctAnswer: "A sedan"
            },
            {
                question: "What color is the man's car?",
                options: ["Red", "Blue", "Silver"],
                correctAnswer: "Silver"
            },
            {
                question: "What is the problem with the man's car?",
                options: ["It's old", "It needs to be washed", "It has a flat tire"],
                correctAnswer: "It needs to be washed"
            }
        ]
    },
    {
        audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-4-Adjetivos-Posesivos.mp3',
        exercises: [
            {
                question: "What are the man and woman looking at?",
                options: ["A family photo", "A vacation picture", "A picture of their friends"],
                correctAnswer: "A family photo"
            },
            {
                question: "Who is the person on the left?",
                options: ["The woman's brother", "The woman's father", "The woman's uncle"],
                correctAnswer: "The woman's brother"
            },
            {
                question: "What is her brother's name?",
                options: ["David", "Daniel", "Derek"],
                correctAnswer: "David"
            },
            {
                question: "Who is the person on the right?",
                options: ["The woman's sister", "The woman's mother", "The woman's aunt"],
                correctAnswer: "The woman's sister"
            },
            {
                question: "What is her sister's name?",
                options: ["Emily", "Emma", "Ella"],
                correctAnswer: "Emily"
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