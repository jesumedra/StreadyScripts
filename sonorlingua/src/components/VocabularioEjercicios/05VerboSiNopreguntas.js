import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Do you play sports?',
      'Woman: Yes, I do. I love basketball.',
      'Man: Do you play on a team?',
      'Woman: Yes, but we don\\\'t play in the winter.',
      'Man: Do you play in the summer?',
      'Woman: Yes, we play in the spring and summer.',
      'Man: Do you play at the city gym?',
      'Woman: No, we play at a high school.'
    ],
    spanish: [
      'Hombre: ¿Juegas a deportes?',
      'Mujer: Sí, lo hago. Me encanta el baloncesto.',
      'Hombre: ¿Juegas en un equipo?',
      'Mujer: Sí, pero no jugamos en invierno.',
      'Hombre: ¿Juegas en verano?',
      'Mujer: Sí, jugamos en primavera y verano.',
      'Hombre: ¿Juegas en el gimnasio de la ciudad?',
      'Mujer: No, jugamos en un instituto.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-1-Do-you-play-sports.mp3',
    exercises: [
        {
            question: "Where do they play basketball?",
            options: ["At the city gym.", "At a high school.", "In the park."],
            correctAnswer: "At a high school."
        }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Do you have pets?',
      'Woman: Yes, I have a cat. And you?',
      'Man: I don\\\'t have a cat, but I have a dog.',
      'Woman: Great! Do you have a big yard?',
      'Man: Yes, I have a big yard, so it\\\'s perfect for my dog.',
      'Woman: Yeah, I don\\\'t have a yard, so I can only have a cat.'
    ],
    spanish: [
      'Hombre: ¿Tienes mascotas?',
      'Mujer: Sí, tengo un gato. ¿Y tú?',
      'Hombre: No tengo gato, pero sí un perro.',
      'Mujer: ¡Genial! ¿Tienes un jardín grande?',
      'Hombre: Sí, tengo un jardín grande, así que es perfecto para mi perro.',
      'Mujer: Sí, no tengo jardín, así que solo puedo tener un gato.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-2-Do-you-have-pets.mp3',
    exercises: [
        {
            question: "Why can the woman only have a cat?",
            options: ["She doesn't like dogs.", "She doesn't have a yard.", "Her apartment is too small."],
            correctAnswer: "She doesn't have a yard."
        }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Do you cook a lot?',
      'Woman: Yes, I cook all the time. Do you cook?',
      'Man: No, I don\\\'t like to cook very much.',
      'Woman: Oh, so you buy your dinner?',
      'Man: Yes, I buy it at the supermarket.',
      'Woman: Do you buy dinner every night?',
      'Man: Yes, I never cook.',
      'Woman: Wow! That\\\'s expensive.'
    ],
    spanish: [
      'Hombre: ¿Cocinas mucho?',
      'Mujer: Sí, cocino todo el tiempo. ¿Cocinas?',
      'Hombre: No, no me gusta mucho cocinar.',
      'Mujer: Ah, ¿entonces compras tu cena?',
      'Hombre: Sí, lo compro en el supermercado.',
      'Mujer: ¿Compras la cena todas las noches?',
      'Hombre: Sí, nunca cocino.',
      'Mujer: ¡Guau! Eso es caro.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-3-Do-you-cook.mp3',
    exercises: [
        {
            question: "How often does the man cook?",
            options: ["Every night.", "Sometimes.", "Never."],
            correctAnswer: "Never."
        }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Do you live downtown?',
      'Woman: Yes, I live near the train station.',
      'Man: Do you take the train to work?',
      'Woman: Yes, most days. And you?',
      'Man: I live far away, so I drive to work.',
      'Woman: Do you have a nice car?',
      'Man: No, my car is old, but I like it.'
    ],
    spanish: [
      'Hombre: ¿Vives en el centro?',
      'Mujer: Sí, vivo cerca de la estación de tren.',
      'Hombre: ¿Vas en tren al trabajo?',
      'Mujer: Sí, la mayoría de los días. ¿Y tú?',
      'Hombre: Vivo lejos, así que conduzco al trabajo.',
      'Mujer: ¿Tienes un coche bonito?',
      'Hombre: No, mi coche es viejo, pero me gusta.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-4-Do-you-live-downtown.mp3',
    exercises: [
        {
            question: "Why does the man drive to work?",
            options: ["He likes driving.", "He lives far away.", "He doesn't like the train."],
            correctAnswer: "He lives far away."
        }
    ]
  }
];

const A1_05_VerboSiNoPreguntas = () => {
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
    <div className='container-vocabulario'>
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Verbo "Do" en Preguntas de Sí/No</h2>
        <h4 className='introduccion-subtitle'>En este ejercicio, practicaremos cómo usar el verbo "do" para hacer preguntas de sí o no.</h4>
        <h4 className='introduccion-subtitle'>Estas preguntas son fundamentales para obtener respuestas directas.</h4>
        <div className='audio-item'>
            <audio controls>
              <source
                src={`/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-Do-Yes-No-Questions.mp3`}
                type='audio/mp3'
              />
              Your browser does not support the audio tag.
            </audio>
        </div>
      </div>

      <div className='conversations-container'>
        {conversations.map((conv) => (
          <div key={conv.id} className='conversation-container'>
            <h2>{conv.title}</h2>
            <div className='audio-column'>
                <audio controls>
                    <source src={conv.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="text-column">
                <h3>English</h3>
                {conv.english.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="text-column">
                <h3>Spanish</h3>
                {conv.spanish.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
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

export default A1_05_VerboSiNoPreguntas;