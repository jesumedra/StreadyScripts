import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: What time is the meeting?',
      'Woman: It starts at 6 o\\\'clock.',
      'Man: When is it over?',
      'Woman: It is over at 7:30.',
      'Man: Wow! So long!',
      'Woman: Well, it might finish by 7:15.'
    ],
    spanish: [
      'Hombre: ¿A qué hora es la reunión?',
      'Mujer: Empieza a las 6 en punto.',
      'Hombre: ¿Cuándo termina?',
      'Mujer: Termina a las 7:30.',
      'Hombre: ¡Vaya! ¡Qué largo!',
      'Mujer: Bueno, podría terminar a las 7:15.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-15/A1-15-1-Telling-Time-Meeting.mp3',
    exercises: [
        {
            question: "What time does the meeting start?",
            options: ["7:30", "6 o'clock", "7:15"],
            correctAnswer: "6 o'clock"
        }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: When is your first class?',
      'Woman: It is at 8:30.',
      'Man: Me too! When is your last class?',
      'Woman: My last class is at 3:45.',
      'Man: When does it finish?',
      'Woman: At 5:15',
      'Man: Wow, so late!',
      'Woman: I know.'
    ],
    spanish: [
      'Hombre: ¿Cuándo es tu primera clase?',
      'Mujer: Es a las 8:30.',
      'Hombre: ¡Yo también! ¿Cuándo es tu última clase?',
      'Mujer: Mi última clase es a las 3:45.',
      'Hombre: ¿Cuándo termina?',
      'Mujer: A las 5:15.',
      'Hombre: ¡Vaya, qué tarde!',
      'Mujer: Lo sé.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-15/A1-15-2-Telling-Time-Class.mp3',
    exercises: [
        {
            question: "When is the woman's last class?",
            options: ["8:30", "3:45", "5:15"],
            correctAnswer: "3:45"
        }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Excuse me. What time is it?',
      'Woman: It is half past ten.',
      'Man: I\\\'m sorry, I don\\\'t understand.',
      'Woman: Oh, it is 10:30.',
      'Man: Oh, thanks. Half past ten means 10:30?',
      'Woman: Yes, it does.',
      'Man: So half past seven means 7:30.',
      'Woman: Yes, you got it.'
    ],
    spanish: [
      'Hombre: Disculpe. ¿Qué hora es?',
      'Mujer: Son las diez y media.',
      'Hombre: Lo siento, no entiendo.',
      'Mujer: Oh, son las 10:30.',
      'Hombre: Oh, gracias. ¿Diez y media significa 10:30?',
      'Mujer: Sí, así es.',
      'Hombre: Entonces, siete y media significa 7:30.',
      'Mujer: Sí, lo tienes.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-15/A1-15-3-Telling-Time-Half-Past.mp3',
    exercises: [
        {
            question: "What does 'half past ten' mean?",
            options: ["10:00", "10:15", "10:30"],
            correctAnswer: "10:30"
        }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: When is the next bus?',
      'Woman: It is at quarter past eight.',
      'Man: 8:15! That\\\'s too early. I want to get a coffee. And when is the next one?',
      'Woman: The next bus is at quarter to nine.',
      'Man: 8:45. OK, I can take that one.',
      'Woman: There is also one at 9:15.',
      'Man: Hmm. 9:15 is too late. I have class at 9:30.',
      'Woman: Don\\\'t miss it then!'
    ],
    spanish: [
      'Hombre: ¿Cuándo es el próximo autobús?',
      'Mujer: Es a las ocho y cuarto.',
      'Hombre: ¡8:15! Es demasiado temprano. Quiero tomar un café. ¿Y cuándo es el siguiente?',
      'Mujer: El próximo autobús es a las nueve menos cuarto.',
      'Hombre: 8:45. Vale, puedo tomar ese.',
      'Mujer: También hay uno a las 9:15.',
      'Hombre: Hmm. 9:15 es demasiado tarde. Tengo clase a las 9:30.',
      'Mujer: ¡Entonces no lo pierdas!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-15/A1-15-4-Telling-Time-Bus.mp3',
    exercises: [
        {
            question: "What time is the bus the man decides to take?",
            options: ["8:15", "8:45", "9:15"],
            correctAnswer: "8:45"
        }
    ]
  }
];

const A1_15 = () => {
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
        <h2 className='introduccion-title'>Decir la Hora</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a decir la hora y a hablar sobre horarios.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre reuniones, clases y horarios de transporte.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-15/A1-15-Telling-Time.mp3`}
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

export default A1_15;