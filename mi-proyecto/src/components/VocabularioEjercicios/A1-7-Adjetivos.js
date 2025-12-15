import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: How are your classes?',
      'Woman: Good. I really like my English class.',
      'Man: That\\\'s good. My English class is fun too.',
      'Woman: How about your Math class?',
      'Man: It\\\'s easy, but the room is small and hot.',
      'Woman: Who is the teacher?',
      'Man: Mrs. Jones. She is very nice and her classes are interesting.',
      'Woman: And what about your Science class?',
      'Man: It\\\'s really difficult. I hate it!'
    ],
    spanish: [
      'Hombre: ¿Qué tal tus clases?',
      'Mujer: Bien. Me gusta mucho mi clase de inglés.',
      'Hombre: Eso está bien. Mi clase de inglés también es divertida.',
      'Mujer: ¿Qué tal tu clase de Matemáticas?',
      'Hombre: Es fácil, pero la habitación es pequeña y calurosa.',
      'Mujer: ¿Quién es el profesor?',
      'Hombre: Señora Jones. Es muy maja y sus clases son interesantes.',
      'Mujer: ¿Y qué pasa con tu clase de Ciencias?',
      'Hombre: Es realmente difícil. ¡Lo odio!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-07/A1-07-1-Adjectives-Classes.mp3',
    exercises: [
        {
            question: "How is the man's Science class?",
            options: ["Easy and fun.", "Interesting but hot.", "Really difficult."],
            correctAnswer: "Really difficult."
        },
        {
            question: "What is the man's Math class like?",
            options: ["It's difficult.", "It's easy, but the room is small and hot.", "It's fun and interesting."],
            correctAnswer: "It's easy, but the room is small and hot."
        },
        {
            question: "Who is the Math teacher?",
            options: ["Mr. Smith", "Mrs. Jones", "Ms. Davis"],
            correctAnswer: "Mrs. Jones"
        },
        {
            question: "How does the man describe Mrs. Jones' classes?",
            options: ["Boring", "Difficult", "Interesting"],
            correctAnswer: "Interesting"
        },
        {
            question: "Which class does the woman really like?",
            options: ["Math", "Science", "English"],
            correctAnswer: "English"
        }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Woman: Hi, can I help you?',
      'Man: Yes, can I have a mocha coffee?',
      'Woman: Okay, hot or cold?',
      'Man: Iced mocha, please. Is it sweet?',
      'Woman: Yes, a little. Do you still want it?',
      'Man: Yes, I want it.',
      'Woman: What size do you want?',
      'Man: Large, please.',
      'Woman: Okay, that will be 6.50.',
      'Man: Wow! That\\\'s expensive.',
      'Woman: Yes, it\\\'s not cheap.'
    ],
    spanish: [
      'Mujer: Hola, ¿puedo ayudarle?',
      'Hombre: Sí, ¿puedo tomar un café mocha?',
      'Mujer: ¿Vale, caliente o fría?',
      'Hombre: Mocha helado, por favor. ¿Es dulce?',
      'Mujer: Sí, un poco. ¿Todavía lo quieres?',
      'Hombre: Sí, lo quiero.',
      'Mujer: ¿Qué talla quieres?',
      'Hombre: Grande, por favor.',
      'Mujer: Vale, serán 6,50.',
      'Hombre: ¡Guau! Eso es caro.',
      'Mujer: sí, no es barato.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-07/A1-07-2-Adjectives-Cafe.mp3',
    exercises: [
        {
            question: "How much is the large iced mocha?",
            options: ["6.50", "5.50", "7.50"],
            correctAnswer: "6.50"
        },
        {
            question: "How does the man want his mocha?",
            options: ["Hot", "Iced", "Blended"],
            correctAnswer: "Iced"
        },
        {
            question: "Is the iced mocha sweet?",
            options: ["No, it's bitter.", "Yes, a little.", "It's very sweet."],
            correctAnswer: "Yes, a little."
        },
        {
            question: "What size does the man order?",
            options: ["Small", "Medium", "Large"],
            correctAnswer: "Large"
        },
        {
            question: "What does the man think about the price?",
            options: ["It's cheap.", "It's reasonable.", "It's expensive."],
            correctAnswer: "It's expensive."
        }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: What a beautiful day!',
      'Woman: Yes, the weather is perfect.',
      'Man: How is the wifi speed?',
      'Woman: It\\\'s fast, but my computer is slow.',
      'Man: My computer is also slow. It\\\'s very old. I want a new one.',
      'Woman: Me too, but new computers are very expensive.',
      'Man: I know. They cost a lot.'
    ],
    spanish: [
      'Hombre: ¡Qué día tan bonito!',
      'Mujer: Sí, el tiempo es perfecto.',
      'Hombre: ¿Cómo es la velocidad del wifi?',
      'Mujer: Es rápido, pero mi ordenador es lento.',
      'Hombre: Mi ordenador también es lento. Es muy antigua. Quiero uno nuevo.',
      'Mujer: Yo también, pero los ordenadores nuevos son carísimos.',
      'Hombre: Lo sé. Cuestan mucho.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-07/A1-07-3-Adjectives-Day.mp3',
    exercises: [
        {
            question: "Why does the man want a new computer?",
            options: ["His computer is slow and old.", "His computer is broken.", "He wants a faster one for gaming."],
            correctAnswer: "His computer is slow and old."
        },
        {
            question: "How is the wifi speed?",
            options: ["Slow", "Fast", "It's not working."],
            correctAnswer: "Fast"
        },
        {
            question: "What is the problem with the woman's computer?",
            options: ["It's old.", "It's slow.", "It has a virus."],
            correctAnswer: "It's slow."
        },
        {
            question: "Why don't they buy new computers?",
            options: ["They don't need them.", "They are very expensive.", "They can't find any they like."],
            correctAnswer: "They are very expensive."
        },
        {
            question: "How is the weather?",
            options: ["It's raining.", "It's cold.", "It's a beautiful day."],
            correctAnswer: "It's a beautiful day."
        }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: How is your food?',
      'Woman: It\\\'s good, but it\\\'s a little spicy.',
      'Man: My food is spicy too.',
      'Woman: Do you like it?',
      'Man: Yes, it\\\'s very delicious, but I\\\'m full.',
      'Woman: Really, I\\\'m still hungry.',
      'Man: Oh, then please, take mine. I\\\'m done.',
      'Woman: Thank you! That\\\'s very kind of you.'
    ],
    spanish: [
      'Hombre: ¿Qué tal tu comida?',
      'Mujer: Está bien, pero es un poco picante.',
      'Hombre: Mi comida también es picante.',
      'Mujer: ¿Te gusta?',
      'Hombre: Sí, está muy delicioso, pero estoy lleno.',
      'Mujer: De verdad, todavía tengo hambre.',
      'Hombre: Oh, entonces por favor, toma el mío. He terminado.',
      'Mujer: ¡Gracias! Qué amable por tu parte.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-07/A1-07-4-Adjectives-Food.mp3',
    exercises: [
        {
            question: "Why does the man give his food to the woman?",
            options: ["He doesn't like it.", "It's too spicy.", "He is full."],
            correctAnswer: "He is full."
        },
        {
            question: "How is the woman's food?",
            options: ["It's bland.", "It's good, but a little spicy.", "It's cold."],
            correctAnswer: "It's good, but a little spicy."
        },
        {
            question: "Is the man's food spicy?",
            options: ["No, it's mild.", "Yes, it is.", "He doesn't say."],
            correctAnswer: "Yes, it is."
        },
        {
            question: "Is the woman still hungry?",
            options: ["No, she is full.", "Yes, she is.", "She is thirsty."],
            correctAnswer: "Yes, she is."
        },
        {
            question: "What does the woman say to the man at the end?",
            options: ["'You should eat more.'", "'Thank you! That's very kind of you.'", "'This is delicious.'"],
            correctAnswer: "'Thank you! That's very kind of you.'"
        }
    ]
  }
];

const A1_07_Adjetivos = () => {
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
                <h2 className='introduccion-title'>Adjetivos</h2>
                <h4 className='introduccion-subtitle'>En esta lección, aprenderemos a usar adjetivos para describir personas, lugares y cosas.</h4>
                <h4 className='introduccion-subtitle'>Los adjetivos nos ayudan a dar más detalles y hacer nuestras conversaciones más interesantes.</h4>
                <div className='audio-item'>
                    <audio controls>
                        <source
                            src={`/Audio/SoundGrammar/A1-Audio/A1-07/A1-07-Adjectives.mp3`}
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

export default A1_07_Adjetivos;