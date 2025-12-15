import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Excuse me, is there a gym in the hotel?',
      'Woman: Yes, there’s one on the first floor.',
      'Man: Great! And is there a pool?',
      'Woman: Yes, there’s a pool on the roof.',
      'Man: Is there a changing room up there?',
      'Woman: No, there isn’t, but there’s a restroom.',
      'Man: OK, thanks.'
    ],
    spanish: [
      'Hombre: Disculpe, ¿hay un gimnasio en el hotel?',
      'Mujer: Sí, hay uno en el primer piso.',
      'Hombre: ¡Genial! ¿Y hay una piscina?',
      'Mujer: Sí, hay una piscina en la azotea.',
      'Hombre: ¿Hay un vestuario allí arriba?',
      'Mujer: No, no hay, pero hay un baño.',
      'Hombre: OK, gracias.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-21/A1-21-1-There-is-There-are.mp3',
    exercises: [
        {
            question: "Where is the pool?",
            options: ["On the first floor.", "On the roof.", "There is no pool."],
            correctAnswer: "On the roof."
        },
        {
            question: "Is there a changing room near the pool?",
            options: ["Yes, there is.", "No, there isn't.", "The man doesn't ask."],
            correctAnswer: "No, there isn't."
        },
        {
            question: "What is on the first floor?",
            options: ["A gym", "A restaurant", "A spa"],
            correctAnswer: "A gym"
        },
        {
            question: "What is available on the roof besides the pool?",
            options: ["A bar", "A restroom", "A sundeck"],
            correctAnswer: "A restroom"
        },
        {
            question: "What is the man's final reaction?",
            options: ["He is disappointed.", "He is satisfied.", "He is confused."],
            correctAnswer: "He is satisfied."
        }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: So, what is there to do in your town?',
      'Woman: Well, there is a mall, a cinema, and there are a few parks.',
      'Man: Oh, parks, nice. I love nature. Which one do you recommend?',
      'Woman: I think Central City park is the best. There’s a huge garden there.',
      'Man: Is there parking nearby?',
      'Woman: Yeah, there’s a huge parking lot across the street.'
    ],
    spanish: [
      'Hombre: Entonces, ¿qué hay para hacer en tu ciudad?',
      'Mujer: Bueno, hay un centro comercial, un cine y hay algunos parques.',
      'Hombre: Oh, parques, genial. Amo la naturaleza. ¿Cuál me recomiendas?',
      'Mujer: Creo que el parque de Central City es el mejor. Hay un jardín enorme allí.',
      'Hombre: ¿Hay aparcamiento cerca?',
      'Mujer: Sí, hay un aparcamiento enorme al otro lado de la calle.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-21/A1-21-2-There-is-There-are.mp3',
    exercises: [
        {
            question: "Which park does the woman recommend?",
            options: ["The city park.", "Central City park.", "The national park."],
            correctAnswer: "Central City park."
        },
        {
            question: "What is special about Central City park?",
            options: ["It has a lake.", "It has a huge garden.", "It has a playground."],
            correctAnswer: "It has a huge garden."
        },
        {
            question: "What does the man love?",
            options: ["Shopping", "Nature", "Movies"],
            correctAnswer: "Nature"
        },
        {
            question: "Is there a place to park near the park?",
            options: ["Yes, there is a small one.", "No, there isn't.", "Yes, there's a huge parking lot."],
            correctAnswer: "Yes, there's a huge parking lot."
        },
        {
            question: "What other attractions are in the town?",
            options: ["A museum and a theater.", "A mall and a cinema.", "A library and a post office."],
            correctAnswer: "A mall and a cinema."
        }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: What is there to eat?',
      'Woman: Ah, there is some pasta in the fridge.',
      'Man: Mm, I just had pasta for lunch. What else is there?',
      'Woman: Well, there is some stuff to make sandwiches.',
      'Man: That will do. Where is the bread?',
      'Woman: There’s some in the cupboard I think.'
    ],
    spanish: [
      'Hombre: ¿Qué hay para comer?',
      'Mujer: Ah, hay algo de pasta en la nevera.',
      'Hombre: Mm, acabo de comer pasta para el almuerzo. ¿Qué más hay?',
      'Mujer: Bueno, hay algunas cosas para hacer sándwiches.',
      'Hombre: Con eso será suficiente. ¿Dónde está el pan?',
      'Mujer: Creo que hay algo en el armario.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-21/A1-21-3-There-is-There-are.mp3',
    exercises: [
        {
            question: "What did the man have for lunch?",
            options: ["Sandwiches", "Pasta", "Salad"],
            correctAnswer: "Pasta"
        },
        {
            question: "What is available to eat in the fridge?",
            options: ["Some pizza", "Some pasta", "Some soup"],
            correctAnswer: "Some pasta"
        },
        {
            question: "What does the woman suggest for making sandwiches?",
            options: ["There is some ham and cheese.", "There is some stuff.", "There is some bread and butter."],
            correctAnswer: "There is some stuff."
        },
        {
            question: "Where is the bread?",
            options: ["On the counter", "In the fridge", "In the cupboard"],
            correctAnswer: "In the cupboard"
        },
        {
            question: "What does the man decide to eat?",
            options: ["Pasta", "Sandwiches", "Nothing"],
            correctAnswer: "Sandwiches"
        }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Are there any exchange students at your school?',
      'Woman: Yes, there are a few.',
      'Man: Really. What countries are they from?',
      'Woman: Ah, let’s see. There is one student from Italy, and there are a few students from France.',
      'Man: Oh, cool. Is there anyone from Paris?',
      'Woman: No, they are all from Leon!'
    ],
    spanish: [
      'Hombre: ¿Hay estudiantes de intercambio en tu escuela?',
      'Mujer: Sí, hay algunos.',
      'Hombre: ¿En serio? ¿De qué países son?',
      'Mujer: Ah, veamos. Hay un estudiante de Italia y hay algunos estudiantes de Francia.',
      'Hombre: Oh, genial. ¿Hay alguien de París?',
      'Mujer: ¡No, todos son de Lyon!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-21/A1-21-4-There-is-There-are.mp3',
    exercises: [
        {
            question: "Where are the French students from?",
            options: ["Paris", "Nice", "Lyon"],
            correctAnswer: "Lyon"
        },
        {
            question: "How many students are from Italy?",
            options: ["One", "Two", "A few"],
            correctAnswer: "One"
        },
        {
            question: "Are there any students from Paris?",
            options: ["Yes, there is one.", "No, there are not.", "The woman is not sure."],
            correctAnswer: "No, there are not."
        },
        {
            question: "What countries are the exchange students from?",
            options: ["Italy and Spain", "France and Germany", "Italy and France"],
            correctAnswer: "Italy and France"
        },
        {
            question: "How many exchange students are there in total?",
            options: ["Two", "A few", "Many"],
            correctAnswer: "A few"
        }
    ]
  }
];

const A1_21 = () => {
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
        <h2 className='introduccion-title'>There is / There are</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar "there is" y "there are" para hablar de la existencia de personas y cosas.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre qué hay en un lugar y qué opciones hay disponibles.</h4>
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

export default A1_21;