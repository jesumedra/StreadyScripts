import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Is this your jacket?',
      'Woman: No, that\\\'s not mine.',
      'Man: Whose is it?',
      'Woman: Maybe it is Tom\\\'s jacket.',
      'Man: No, that is his jacket over there.',
      'Woman: I\\\'m not sure then.',
      'Man: Is it Beth\\\'s jacket?',
      'Woman: No, it is too big to be her jacket.',
      'Man: Well, it belongs to someone.'
    ],
    spanish: [
      'Hombre: ¿Es esta tu chaqueta?',
      'Mujer: No, esa no es mía.',
      'Hombre: ¿De quién es?',
      'Mujer: Tal vez es la chaqueta de Tom.',
      'Hombre: No, esa es su chaqueta de allí.',
      'Mujer: No estoy segura entonces.',
      'Hombre: ¿Es la chaqueta de Beth?',
      'Mujer: No, es demasiado grande para ser su chaqueta.',
      'Hombre: Bueno, le pertenece a alguien.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-1-Possessives-Jacket.mp3',
    exercises: [
        {
            question: "Whose jacket is it NOT?",
            options: ["Tom's", "Beth's", "The man's"],
            correctAnswer: "The man's"
        }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Whose car is this?',
      'Woman: That belongs to Joe and Sue.',
      'Man: Wow! I like their car.',
      'Woman: I know. It is very nice.',
      'Man: It\\\'s big too!',
      'Woman: Yes, they need space for their kids.'
    ],
    spanish: [
      'Hombre: ¿De quién es este coche?',
      'Mujer: Ese pertenece a Joe y Sue.',
      'Hombre: ¡Vaya! Me gusta su coche.',
      'Mujer: Lo sé. Es muy bonito.',
      'Hombre: ¡También es grande!',
      'Mujer: Sí, necesitan espacio para sus hijos.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-2-Possessives-Car.mp3',
    exercises: [
        {
            question: "Why do Joe and Sue need a big car?",
            options: ["They like big cars.", "They need space for their kids.", "They travel a lot."],
            correctAnswer: "They need space for their kids."
        }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Whose car is this?',
      'Woman: That belongs to Joe and Sue.',
      'Man: Wow! I like their car.',
      'Woman: I know. It is very nice.',
      'Man: It\\\'s big too!',
      'Woman: Yes, they need space for their kids.'
    ],
    spanish: [
      'Hombre: ¿De quién es este coche?',
      'Mujer: Ese pertenece a Joe y Sue.',
      'Hombre: ¡Vaya! Me gusta su coche.',
      'Mujer: Lo sé. Es muy bonito.',
      'Hombre: ¡También es grande!',
      'Mujer: Sí, necesitan espacio para sus hijos.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-3-Possessives-Meeting.mp3',
    exercises: [
        {
            question: "Whose car is it?",
            options: ["The man's", "Joe and Sue's", "The woman's"],
            correctAnswer: "Joe and Sue's"
        }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: I like the new office. So, where is my desk?',
      'Woman: Yours is over there. It is next to mine.',
      'Man: Nice. And where is Jill\\\'s desk?',
      'Woman: Hers is over there.',
      'Man: Where is Bob\\\'s desk?',
      'Woman: His is in the back, by the window.'
    ],
    spanish: [
      'Hombre: Me gusta la nueva oficina. Entonces, ¿dónde está mi escritorio?',
      'Mujer: El tuyo está allí. Está al lado del mío.',
      'Hombre: Genial. ¿Y dónde está el escritorio de Jill?',
      'Mujer: El de ella está allí.',
      'Hombre: ¿Dónde está el escritorio de Bob?',
      'Mujer: El suyo está al fondo, junto a la ventana.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-4-Possessives-Desk.mp3',
    exercises: [
        {
            question: "Where is Bob's desk?",
            options: ["Next to the woman's desk.", "In the back, by the window.", "Next to Jill's desk."],
            correctAnswer: "In the back, by the window."
        }
    ]
  },
  {
    id: 5,
    title: 'Conversación 5',
    english: [
      'Man: What is the woman buying?',
      'Woman: How many apples does she want?',
      'Man: What else does she buy?',
      'Woman: How many tomatoes does she buy?',
      'Man: What does the man ask at the end?',
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-1-Plurales.mp3',
    exercises: [
        {
            question: "What is the woman buying?",
            options: ["Apples", "Oranges", "Bananas"],
            correctAnswer: "Apples"
        },
        {
            question: "How many apples does she want?",
            options: ["Two", "Three", "Four"],
            correctAnswer: "Three"
        },
        {
            question: "What else does she buy?",
            options: ["Potatoes", "Tomatoes", "Carrots"],
            correctAnswer: "Tomatoes"
        },
        {
            question: "How many tomatoes does she buy?",
            options: ["One", "Two", "A few"],
            correctAnswer: "A few"
        },
        {
            question: "What does the man ask at the end?",
            options: ["If she needs a bag", "If she is paying with cash or card", "If she wants anything else"],
            correctAnswer: "If she needs a bag"
        }
    ]
  },
  {
    id: 6,
    title: 'Conversación 6',
    english: [
      'Man: What are the man and woman talking about?',
      'Woman: How many children does the woman have?',
      'Man: How old are her daughters?',
      'Woman: How many children does the man have?',
      'Man: How old is his son?',
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-2-Plurales.mp3',
    exercises: [
        {
            question: "What are the man and woman talking about?",
            options: ["Their children", "Their pets", "Their friends"],
            correctAnswer: "Their children"
        },
        {
            question: "How many children does the woman have?",
            options: ["One son", "Two daughters", "One son and one daughter"],
            correctAnswer: "Two daughters"
        },
        {
            question: "How old are her daughters?",
            options: ["Five and seven", "Six and eight", "Seven and nine"],
            correctAnswer: "Five and seven"
        },
        {
            question: "How many children does the man have?",
            options: ["One son", "Two sons", "He doesn't have children"],
            correctAnswer: "One son"
        },
        {
            question: "How old is his son?",
            options: ["Six", "Eight", "Ten"],
            correctAnswer: "Ten"
        }
    ]
  },
  {
    id: 7,
    title: 'Conversación 7',
    english: [
      'Man: What is the man looking for in the library?',
      'Woman: Where are the history books located?',
      'Man: What other sections are on the second floor?',
      'Woman: How many books can the man borrow?',
      'Man: What does the man need to borrow books?',
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-3-Plurales.mp3',
    exercises: [
        {
            question: "What is the man looking for in the library?",
            options: ["Books about history", "Magazines", "Newspapers"],
            correctAnswer: "Books about history"
        },
        {
            question: "Where are the history books located?",
            options: ["On the first floor", "On the second floor", "In the basement"],
            correctAnswer: "On the second floor"
        },
        {
            question: "What other sections are on the second floor?",
            options: ["Science and technology", "Arts and music", "Biographies and memoirs"],
            correctAnswer: "Biographies and memoirs"
        },
        {
            question: "How many books can the man borrow?",
            options: ["Three", "Five", "As many as he wants"],
            correctAnswer: "Five"
        },
        {
            question: "What does the man need to borrow books?",
            options: ["His ID card", "His library card", "His student card"],
            correctAnswer: "His library card"
        }
    ]
  },
  {
    id: 8,
    title: 'Conversación 8',
    english: [
      'Man: What are the man and woman planning for the weekend?',
      'Woman: What are they going to bring?',
      'Man: Who else is coming to the picnic?',
      'Woman: How many friends are coming?',
      'Man: What does the woman suggest bringing for fun?',
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-4-Plurales.mp3',
    exercises: [
        {
            question: "What are the man and woman planning for the weekend?",
            options: ["A party", "A picnic", "A movie night"],
            correctAnswer: "A picnic"
        },
        {
            question: "What are they going to bring?",
            options: ["Sandwiches and drinks", "Salad and fruits", "Pizza and soda"],
            correctAnswer: "Sandwiches and drinks"
        },
        {
            question: "Who else is coming to the picnic?",
            options: ["Their friends", "Their families", "Their colleagues"],
            correctAnswer: "Their friends"
        },
        {
            question: "How many friends are coming?",
            options: ["Two", "Three", "Four"],
            correctAnswer: "Three"
        },
        {
            question: "What does the woman suggest bringing for fun?",
            options: ["A frisbee", "A deck of cards", "A football"],
            correctAnswer: "A frisbee"
        }
    ]
  }
];

const A1_17 = () => {
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
        <h2 className='introduccion-title'>Posesivos</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar los posesivos para hablar de pertenencia.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre cómo preguntar y responder a quién pertenece algo.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-Possessives.mp3`}
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

export default A1_17;