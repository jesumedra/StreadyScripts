import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
    {
        id: 1,
        title: "Conversación 1",
        audio: "/Audio/SoundGrammar/A1-Audio/A1-09/A1-09-1-Subject-Pronouns-Mom.mp3",
        english: [
            "Man: What does your mother do?",
            "Woman: She is a chef in a restaurant.",
            "Man: Cool! That means she cooks well.",
            "Woman: Yes, she is a great cook.",
            "Man: Where does she work?",
            "Woman: She works at an Italian restaurant."
        ],
        spanish: [
            "Hombre: ¿A qué se dedica tu madre?",
            "Mujer: Es chef en un restaurante.",
            "Hombre: ¡Guay! Eso significa que cocina bien.",
            "Mujer: Sí, es una gran cocinera.",
            "Hombre: ¿Dónde trabaja?",
            "Mujer: Trabaja en un restaurante italiano."
        ],
        exercises: [
            {
                question: "What does the woman's mother do?",
                options: ["She is a teacher.", "She is a chef.", "She is a doctor."],
                correctAnswer: "She is a chef."
            }
        ]
    },
    {
        id: 2,
        title: "Conversación 2",
        audio: "/Audio/SoundGrammar/A1-Audio/A1-09/A1-09-2-Subject-Pronouns-Dad.mp3",
        english: [
            "Man: What is your father like?",
            "Woman: He is funny. He is very kind.",
            "Man: What does he look like?",
            "Woman: He is tall and big.",
            "Man: Oh! How old is he?",
            "Woman: He is 47 years old."
        ],
        spanish: [
            "Hombre: ¿Cómo es tu padre?",
            "Mujer: Es gracioso. Es muy amable.",
            "Hombre: ¿Cómo es?",
            "Mujer: Es alto y grande.",
            "Hombre: ¡Oh! ¿Cuántos años tiene?",
            "Mujer: Tiene 47 años."
        ],
        exercises: [
            {
                question: "How old is the woman's father?",
                options: ["45", "47", "50"],
                correctAnswer: "47"
            }
        ]
    },
    {
        id: 3,
        title: "Conversación 3",
        audio: "/Audio/SoundGrammar/A1-Audio/A1-09/A1-09-3-Subject-Pronouns-Friends.mp3",
        english: [
            "Man: Who are your friends?",
            "Woman: Betty, Jason, and Laura.",
            "Man: Are they students?",
            "Woman: Yes, they are. They all study business.",
            "Man: Are they from around here?",
            "Woman: No, they are all from different cities."
        ],
        spanish: [
            "Hombre: ¿Quiénes son tus amigos?",
            "Mujer: Betty, Jason y Laura.",
            "Hombre: ¿Son estudiantes?",
            "Mujer: Sí, lo son. Todos estudian negocios.",
            "Hombre: ¿Son de por aquí?",
            "Mujer: No, todos son de ciudades diferentes."
        ],
        exercises: [
            {
                question: "What do the woman's friends study?",
                options: ["Medicine", "Business", "Art"],
                correctAnswer: "Business"
            }
        ]
    },
    {
        id: 4,
        title: "Conversación 4",
        audio: '/Audio/SoundGrammar/A1-Audio/A1-9/A1-9-1-Pronombres-sujetos.mp3',
        exercises: [
            {
                question: "Where is the woman from?",
                options: ["America", "Canada", "Mexico"],
                correctAnswer: "Canada"
            },
            {
                question: "What does the man ask about the woman's friend?",
                options: ["If she is from Canada too", "If she is a student", "If she is friendly"],
                correctAnswer: "If she is from Canada too"
            },
            {
                question: "Where is the woman's friend from?",
                options: ["The United States", "Canada", "Quebec"],
                correctAnswer: "Quebec"
            },
            {
                question: "What is the man's reaction to learning the friend is from Quebec?",
                options: ["He is surprised", "He is excited", "He thinks it's cool"],
                correctAnswer: "He thinks it's cool"
            },
            {
                question: "What does the man say about people from Quebec?",
                options: ["They are nice", "They are friendly", "He doesn't say anything specific"],
                correctAnswer: "They are nice"
            }
        ]
    },
    {
        id: 4,
        title: "Conversación 4",
        audio: '/Audio/SoundGrammar/A1-Audio/A1-9/A1-9-2-Pronombres-sujetos.mp3',
        exercises: [
            {
                question: "What are the man and woman discussing?",
                options: ["A new cafe", "A new restaurant", "A new park"],
                correctAnswer: "A new cafe"
            },
            {
                question: "What is the problem with the new cafe?",
                options: ["It's expensive", "It's far", "It's always busy"],
                correctAnswer: "It's always busy"
            },
            {
                question: "Who do they see at the cafe?",
                options: ["Their friends", "The woman's sister", "The man's brother"],
                correctAnswer: "The woman's sister"
            },
            {
                question: "What are the sister and her friends doing?",
                options: ["Studying", "Drinking coffee", "Waiting for a table"],
                correctAnswer: "Drinking coffee"
            },
            {
                question: "What does the man suggest?",
                options: ["Joining them", "Going to another cafe", "Waiting for a table"],
                correctAnswer: "Joining them"
            }
        ]
    },
    {
        id: 4,
        title: "Conversación 4",
        audio: '/Audio/SoundGrammar/A1-Audio/A1-9/A1-9-3-Pronombres-sujetos.mp3',
        exercises: [
            {
                question: "What are the man and woman looking at?",
                options: ["A photo album", "A painting", "A movie"],
                correctAnswer: "A photo album"
            },
            {
                question: "Who is in the first picture?",
                options: ["The woman's parents", "The woman's grandparents", "The woman's friends"],
                correctAnswer: "The woman's parents"
            },
            {
                question: "What does the man say about the woman's parents?",
                options: ["They look happy", "They look young", "They look stylish"],
                correctAnswer: "They look young"
            },
            {
                question: "Who is in the next picture?",
                options: ["The woman's brother", "The woman's cousin", "The woman's uncle"],
                correctAnswer: "The woman's brother"
            },
            {
                question: "What is the brother doing in the picture?",
                options: ["Playing guitar", "Riding a bike", "Swimming"],
                correctAnswer: "Playing guitar"
            }
        ]
    },
    {
        id: 4,
        title: "Conversación 4",
        audio: '/Audio/SoundGrammar/A1-Audio/A1-9/A1-9-4-Pronombres-sujetos.mp3',
        exercises: [
            {
                question: "What are the man and woman talking about?",
                options: ["A new book", "A new movie", "A new band"],
                correctAnswer: "A new band"
            },
            {
                question: "What is the name of the band?",
                options: ["The Black Keys", "The White Stripes", "The Blue Notes"],
                correctAnswer: "The Black Keys"
            },
            {
                question: "What does the woman think of the band?",
                options: ["She loves them", "She doesn't know them", "She thinks they are okay"],
                correctAnswer: "She loves them"
            },
            {
                question: "What is the woman's favorite thing about the band?",
                options: ["Their lyrics", "Their concerts", "Their music videos"],
                correctAnswer: "Their concerts"
            },
            {
                question: "What does the man say about the band's concerts?",
                options: ["They are amazing", "They are expensive", "He has never been to one"],
                correctAnswer: "They are amazing"
            }
        ]
    }
];

const A1_09_PronombresSujetos = () => {
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
                <h2 className='introduccion-title'>Pronombres Sujeto</h2>
                <h4 className='introduccion-subtitle'>Los pronombres de sujeto reemplazan al sustantivo que realiza la acción en una oración.</h4>
                <h4 className='introduccion-subtitle'>En esta lección, practicaremos su uso en diferentes contextos.</h4>
                <div className='audio-item'>
                    <audio controls>
                      <source
                        src={`/Audio/SoundGrammar/A1-Audio/A1-09/A1-09-Subject-Pronouns.mp3`}
                        type='audio/mp3'
                      />
                      Your browser does not support the audio tag.
                    </audio>
                </div>
            </div>
            <div className='conversations-container'>
                {conversations.map(conv => (
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

export default A1_09_PronombresSujetos;