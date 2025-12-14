import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Do you have any paper?',
      'Woman: I have some, but not much.',
      'Man: How much do you have?',
      'Woman: I have about 10 sheets of paper.',
      'Man: Oh, that is plenty. I just need five sheets.',
      'Woman: OK, here you go.'
    ],
    spanish: [
      'Hombre: ¿Tienes papel?',
      'Mujer: Tengo algo, pero no mucho.',
      'Hombre: ¿Cuánto tienes?',
      'Mujer: Tengo unas 10 hojas de papel.',
      'Hombre: Oh, eso es suficiente. Solo necesito cinco hojas.',
      'Mujer: OK, aquí tienes.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-1-Any-Some-Paper.mp3',
    exercises: [
        {
            question: "How many sheets of paper does the man need?",
            options: ["Ten", "Five", "Two"],
            correctAnswer: "Five"
        },
        {
            question: "How much paper does the woman have in total?",
            options: ["About 5 sheets", "About 10 sheets", "About 20 sheets"],
            correctAnswer: "About 10 sheets"
        },
        {
            question: "Does the woman have a lot of paper?",
            options: ["Yes, she has a lot.", "No, not much.", "She has just enough."],
            correctAnswer: "No, not much."
        },
        {
            question: "Is 10 sheets of paper enough for the man?",
            options: ["Yes, it is plenty.", "No, he needs more.", "It's exactly what he needs."],
            correctAnswer: "Yes, it is plenty."
        },
        {
            question: "What does the woman say when she gives the paper?",
            options: ["\"Here you are.\"", "\"You're welcome.\"", "\"OK, here you go.\""],
            correctAnswer: "\"OK, here you go.\""
        }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Do we have any eggs?',
      'Woman: We have some. Maybe three eggs.',
      'Man: OK, and do we have any cheese?',
      'Woman: No, we don’t have any cheese.',
      'Man: Oh, that’s too bad. I want to make an omelet.',
      'Woman: Well, I can go to the store and buy some.',
      'Man: No, that’s OK. I’ll just have toast.'
    ],
    spanish: [
      'Hombre: ¿Tenemos huevos?',
      'Mujer: Tenemos algunos. Quizás tres huevos.',
      'Hombre: OK, ¿y tenemos queso?',
      'Mujer: No, no tenemos queso.',
      'Hombre: Oh, qué lástima. Quiero hacer una tortilla.',
      'Mujer: Bueno, puedo ir a la tienda a comprar un poco.',
      'Hombre: No, está bien. Solo tomaré una tostada.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-2-Any-Some-Eggs.mp3',
    exercises: [
        {
            question: "Why can't the man make an omelet?",
            options: ["They don't have any eggs.", "They don't have any cheese.", "They don't have a pan."],
            correctAnswer: "They don't have any cheese."
        },
        {
            question: "How many eggs do they have?",
            options: ["None", "Maybe three", "A dozen"],
            correctAnswer: "Maybe three"
        },
        {
            question: "What does the woman offer to do?",
            options: ["Make toast for him.", "Go to the store.", "Order food delivery."],
            correctAnswer: "Go to the store."
        },
        {
            question: "What will the man have instead of an omelet?",
            options: ["Cereal", "Toast", "Nothing"],
            correctAnswer: "Toast"
        },
        {
            question: "Does the man accept the woman's offer to go to the store?",
            options: ["Yes, he does.", "No, he says it's OK.", "He tells her to hurry."],
            correctAnswer: "No, he says it's OK."
        }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Care for some coffee?',
      'Woman: I would love some.',
      'Man: Cream or sugar?',
      'Woman: No sugar, but I’ll take a little cream, please!',
      'Man: Oh, you know what, we don’t have any cream. Is milk OK?',
      'Woman: That’s fine.'
    ],
    spanish: [
      'Hombre: ¿Quieres un poco de café?',
      'Mujer: Me encantaría un poco.',
      'Hombre: ¿Crema o azúcar?',
      'Mujer: Sin azúcar, pero tomaré un poco de crema, ¡por favor!',
      'Hombre: Oh, sabes qué, no tenemos crema. ¿Está bien la leche?',
      'Mujer: Está bien.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-3-Any-Some-Coffee.mp3',
    exercises: [
        {
            question: "What does the woman take in her coffee instead of cream?",
            options: ["Sugar", "Milk", "Nothing"],
            correctAnswer: "Milk"
        },
        {
            question: "Does the woman want sugar in her coffee?",
            options: ["Yes, a lot.", "No sugar.", "Just a little."],
            correctAnswer: "No sugar."
        },
        {
            question: "What does the man offer the woman initially?",
            options: ["Tea", "Coffee", "Water"],
            correctAnswer: "Coffee"
        },
        {
            question: "Why can't the woman have cream?",
            options: ["She doesn't like it.", "They don't have any.", "It's expired."],
            correctAnswer: "They don't have any."
        },
        {
            question: "How does the woman react to the offer of milk?",
            options: ["She is disappointed.", "She says it's fine.", "She prefers black coffee."],
            correctAnswer: "She says it's fine."
        }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: So, what did you get for lunch?',
      'Woman: I bought some stuff to make sandwiches.',
      'Man: Oh great! Did you buy any potato chips?',
      'Woman: No, I did not. I did not see any.',
      'Man: That’s OK. We have some pretzels.',
      'Woman: That will work.'
    ],
    spanish: [
      'Hombre: Entonces, ¿qué compraste para el almuerzo?',
      'Mujer: Compré algunas cosas para hacer sándwiches.',
      'Hombre: ¡Oh, genial! ¿Compraste papas fritas?',
      'Mujer: No, no lo hice. No vi ninguna.',
      'Hombre: Está bien. Tenemos pretzels.',
      'Mujer: Eso servirá.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-4-Any-Some.mp3',
    exercises: [
        {
            question: "Why didn't the woman buy any potato chips?",
            options: ["She forgot.", "She did not see any.", "They were too expensive."],
            correctAnswer: "She did not see any."
        },
        {
            question: "What did the woman buy for lunch?",
            options: ["Salad ingredients", "Stuff to make sandwiches", "Frozen pizza"],
            correctAnswer: "Stuff to make sandwiches"
        },
        {
            question: "What do they have at home to eat with the sandwiches?",
            options: ["Pretzels", "Cookies", "Fruit"],
            correctAnswer: "Pretzels"
        },
        {
            question: "Did the man ask for anything specific for lunch?",
            options: ["Yes, he asked for a salad.", "Yes, he asked for potato chips.", "No, he did not."],
            correctAnswer: "Yes, he asked for potato chips."
        },
        {
            question: "What is the woman's response to having pretzels?",
            options: ["\"That will work.\"", "\"I don't like pretzels.\"", "\"Let's get chips next time.\""],
            correctAnswer: "\"That will work.\""
        }
    ]
  }
];

const A1_25 = () => {
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
        <h2 className='introduccion-title'>Uso de "Any" y "Some"</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar "any" y "some" para hablar de cantidades no específicas.</h4>
        <h4 className='introduccion-subtitle'>"Some" se usa en oraciones afirmativas, mientras que "any" se usa en preguntas y negaciones.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-Any-Some.mp3`}
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

export default A1_25;