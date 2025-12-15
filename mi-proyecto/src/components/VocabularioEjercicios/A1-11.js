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
    audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-1-Verbo-To-Be.mp3',
    exercises: [
        {
            question: "What is the man's name?",
            options: ["John", "Paul", "Mike"],
            correctAnswer: "Paul"
        },
        {
            question: "Where is the man from?",
            options: ["The United States", "Canada", "England"],
            correctAnswer: "The United States"
        },
        {
            question: "What is the woman's name?",
            options: ["Sarah", "Jennifer", "Jessica"],
            correctAnswer: "Jennifer"
        },
        {
            question: "Where is the woman from?",
            options: ["The United States", "Canada", "Australia"],
            correctAnswer: "Canada"
        },
        {
            question: "What does the man say to the woman at the end?",
            options: ["Nice to meet you", "Have a good day", "See you later"],
            correctAnswer: "Nice to meet you"
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
    audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-2-Verbo-To-Be.mp3',
    exercises: [
        {
            question: "What are the man and woman talking about?",
            options: ["The weather", "A new coffee shop", "A party"],
            correctAnswer: "A party"
        },
        {
            question: "Who is hosting the party?",
            options: ["Sue", "Sam", "Sara"],
            correctAnswer: "Sue"
        },
        {
            question: "Who is the man looking for?",
            options: ["Sue", "His friend Tom", "The woman's brother"],
            correctAnswer: "His friend Tom"
        },
        {
            question: "Where is Tom?",
            options: ["In the kitchen", "In the living room", "Outside"],
            correctAnswer: "In the kitchen"
        },
        {
            question: "What is Tom doing?",
            options: ["Talking to Sue", "Getting a drink", "Dancing"],
            correctAnswer: "Getting a drink"
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
    audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-3-Verbo-To-Be.mp3',
    exercises: [
        {
            question: "What is the man looking for?",
            options: ["The library", "The post office", "The bank"],
            correctAnswer: "The library"
        },
        {
            question: "Where is the library?",
            options: ["Next to the park", "On the corner of Main Street and 1st Avenue", "Across from the supermarket"],
            correctAnswer: "On the corner of Main Street and 1st Avenue"
        },
        {
            question: "Is the library far?",
            options: ["Yes, it's a long walk", "No, it's not far", "It's about a 10-minute drive"],
            correctAnswer: "No, it's not far"
        },
        {
            question: "How does the woman describe the library building?",
            options: ["It's a big, red building", "It's a modern glass building", "It's an old stone building"],
            correctAnswer: "It's a big, red building"
        },
        {
            question: "What is next to the library?",
            options: ["A coffee shop", "A bookstore", "A park"],
            correctAnswer: "A park"
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
    audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-4-Verbo-To-Be.mp3',
    exercises: [
        {
            question: "What are the man and woman discussing?",
            options: ["A new movie", "A new restaurant", "A new book"],
            correctAnswer: "A new restaurant"
        },
        {
            question: "What kind of food does the restaurant serve?",
            options: ["Italian", "Mexican", "Japanese"],
            correctAnswer: "Italian"
        },
        {
            question: "What does the woman say about the food?",
            options: ["It's delicious", "It's expensive", "It's not very good"],
            correctAnswer: "It's delicious"
        },
        {
            question: "What is the problem with the restaurant?",
            options: ["It's far away", "It's always crowded", "It's closed on Mondays"],
            correctAnswer: "It's always crowded"
        },
        {
            question: "What do they decide to do?",
            options: ["Go to the restaurant", "Order takeout", "Go to a different restaurant"],
            correctAnswer: "Go to the restaurant"
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