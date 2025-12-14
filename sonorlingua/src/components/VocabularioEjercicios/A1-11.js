import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Is this your book?',
      'Woman: Yes, that is my book.',
      'Man: And is this your pencil?',
      'Woman: No, that is not my pencil. It belongs to my friend.',
      'Man: What about these glasses?',
      'Woman: I think those glasses belong to the teacher.',
      'Man: Okay, let\\\'s leave them here.'
    ],
    spanish: [
      'Hombre: ¿Es este tu libro?',
      'Mujer: Sí, ese es mi libro.',
      'Hombre: ¿Y es este tu lápiz?',
      'Mujer: No, ese no es mi lápiz. Le pertenece a mi amigo.',
      'Hombre: ¿Qué hay de estas gafas?',
      'Mujer: Creo que esas gafas le pertenecen al profesor.',
      'Hombre: Vale, dejémoslas aquí.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-1-Demonstratives-Book.mp3',
    exercises: [
        {
            question: "Whose pencil is it?",
            options: ["The man's", "The woman's", "Her friend's"],
            correctAnswer: "Her friend's"
        }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: I like these jeans.',
      'Woman: I like those, too.',
      'Man: Do you like this shirt?',
      'Woman: No, but I like that shirt.',
      'Man: The blue one?',
      'Woman: No, the green one.',
      'Man: Hmm, I don\\\'t like that color.',
      'Woman: Really, I like it!'
    ],
    spanish: [
      'Hombre: Me gustan estos vaqueros.',
      'Mujer: A mí también me gustan esos.',
      'Hombre: ¿Te gusta esta camisa?',
      'Mujer: No, pero me gusta esa camisa.',
      'Hombre: ¿La azul?',
      'Mujer: No, la verde.',
      'Hombre: Hmm, no me gusta ese color.',
      'Mujer: ¡De verdad, a mí me gusta!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-2-Demonstratives-Jeans.mp3',
    exercises: [
        {
            question: "Which shirt does the woman like?",
            options: ["The blue one", "The green one", "The red one"],
            correctAnswer: "The green one"
        }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: How much is this coffee maker?',
      'Woman: That is ten dollars.',
      'Man: And how much are these plates?',
      'Woman: Those are five dollars each.',
      'Man: What about these spoons?',
      'Woman: Those spoons are one dollar each.',
      'Man: I\\\'ll take them.',
      'Woman: Sold!'
    ],
    spanish: [
      'Hombre: ¿Cuánto cuesta esta cafetera?',
      'Mujer: Esa cuesta diez dólares.',
      'Hombre: ¿Y cuánto cuestan estos platos?',
      'Mujer: Esos cuestan cinco dólares cada uno.',
      'Hombre: ¿Qué hay de estas cucharas?',
      'Mujer: Esas cucharas cuestan un dólar cada una.',
      'Hombre: Me las llevo.',
      'Mujer: ¡Vendido!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-3-Demonstratives-CoffeeMaker.mp3',
    exercises: [
        {
            question: "How much are the plates?",
            options: ["Ten dollars", "Five dollars each", "One dollar each"],
            correctAnswer: "Five dollars each"
        }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: I don’t like this table.',
      'Woman: Why? What is wrong with it?',
      'Man: It is small. And these chairs are not comfortable.',
      'Woman: Okay, where do you want to sit?',
      'Man: Let’s sit at that table over there.',
      'Woman: Okay, but those chairs look small, too.',
      'Man: Maybe, but the table is very big.',
      'Woman: Okay! Let’s change tables.'
    ],
    spanish: [
      'Hombre: No me gusta esta mesa.',
      'Mujer: ¿Por qué? ¿Qué le pasa?',
      'Hombre: Es pequeña. Y estas sillas no son cómodas.',
      'Mujer: Vale, ¿dónde quieres sentarte?',
      'Hombre: Sentémonos en esa mesa de allí.',
      'Mujer: Vale, pero esas sillas también parecen pequeñas.',
      'Hombre: Quizás, pero la mesa es muy grande.',
      'Mujer: ¡Vale! Cambiemos de mesa.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-4-Demonstratives-Table.mp3',
    exercises: [
        {
            question: "Why does the man want to change tables?",
            options: ["The chairs are not comfortable and the table is small.", "He doesn't like the color of the table.", "It's too noisy."],
            correctAnswer: "The chairs are not comfortable and the table is small."
        }
    ]
  }
];

const A1_11 = () => {
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
          <h2 className='introduccion-title'>Demonstrativos</h2>
          <h4 className='introduccion-subtitle'>Los demostrativos (this, that, these, those) se usan para señalar objetos.</h4>
          <h4 className='introduccion-subtitle'>Aprende a usarlos según la distancia y el número.</h4>
          <div className='audio-item'>
              <audio controls>
                <source
                  src={`/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-Demonstratives.mp3`}
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

export default A1_11;