import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: What did you do yesterday?',
      'Woman: Nothing special. I stayed home and cleaned the house. What about you? What did you do?',
      'Man: I drove to the mountains and went for a hike.',
      'Woman: That sounds fun!',
      'Man: It was. The weather was perfect and we saw lots of animals.',
      'Woman: Oh, really? What did you see?',
      'Man: We saw deer, an eagle, and a bear!',
      'Woman: Wow! How exciting! Did you take any pictures?',
      'Man: Yes, I took lots of pictures. I will post them online soon.',
      'Woman: Please do!.'
    ],
    spanish: [
      'Hombre: ¿Qué hiciste ayer?',
      'Mujer: Nada especial. Me quedé en casa y limpié la casa. ¿Y tú? ¿Qué hiciste?',
      'Hombre: Conduje hasta las montañas y fui de excursión.',
      'Mujer: ¡Eso suena divertido!',
      'Hombre: Lo fue. El tiempo era perfecto y vimos muchos animales.',
      'Mujer: ¿Ah, sí? ¿Qué viste?',
      'Hombre: ¡Vimos ciervos, un águila y un oso!',
      'Mujer: ¡Guau! ¡Qué emocionante! ¿Has hecho alguna foto?',
      'Hombre: Sí, hice muchas fotos. Los publicaré en internet pronto.',
      'Mujer: ¡Por favor, hazlo!.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-1-Past-Tense-Yesterday.mp3',
    exercises: [
        {
            question: "What animals did the man see?",
            options: ["Deer, an eagle, and a bear.", "Just a deer.", "A bear and a fox."],
            correctAnswer: "Deer, an eagle, and a bear."
        }
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Did you do anything this weekend?',
      'Woman: Yes. I took the train to the city and met my friend.',
      'Man: Oh, yeah! What did you do?',
      'Woman: We had lunch and went shopping.',
      'Man: Did you buy anything?',
      'Woman: No, I didn\\\'t. I just window-shopped. I need to save money.',
      'Man: Me too!.'
    ],
    spanish: [
      'Hombre: ¿Has hecho algo este fin de semana?',
      'Mujer: Sí. Cogí el tren a la ciudad y conocí a mi amigo.',
      'Hombre: ¡Oh, sí! ¿Qué hiciste?',
      'Mujer: Comimos y fuimos de compras.',
      'Hombre: ¿Compraste algo?',
      'Mujer: No, no lo hice. Acabo de mirar escaparates. Necesito ahorrar dinero.',
      'Hombre: ¡Yo también!.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-2-Past-Tense-Weekend.mp3',
    exercises: [
        {
            question: "Why didn't the woman buy anything?",
            options: ["She didn't like anything.", "She needs to save money.", "She forgot her wallet."],
            correctAnswer: "She needs to save money."
        }
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: How was your day?',
      'Woman: Rough. I was so busy.',
      'Man: How so? What happened at work?',
      'Woman: A tour bus came into the restaurant for lunch. They ordered a lot of food. We only had two waiters, so we were very busy.',
      'Man: Did you get a good tip?',
      'Woman: Yes, we did. They left us $50!.'
    ],
    spanish: [
      'Hombre: ¿Qué tal tu día?',
      'Mujer: Difícil. Estaba tan ocupado.',
      'Hombre: ¿Cómo es eso? ¿Qué pasó en el trabajo?',
      'Mujer: Un autobús turístico entró en el restaurante para comer. Pidieron mucha comida. Solo teníamos dos camareros, así que estábamos muy ocupados.',
      'Hombre: ¿Recibiste una buena propina?',
      'Mujer: Sí, lo hicimos. ¡Nos dejaron 50 dólares!.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-3-Past-Tense-Day.mp3',
    exercises: [
        {
            question: "How much tip did they get?",
            options: ["$20", "$50", "$100"],
            correctAnswer: "$50"
        }
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Welcome home! What did you do tonight?',
      'Woman: I went to the movies with my friends.',
      'Man: Fun! What did you see?',
      'Woman: We saw the new James Bond movie.',
      'Man: How was it? I heard it was good.',
      'Woman: It was really good. I liked it a lot.',
      'Man: Did you do anything after?',
      'Woman: Yeah, we went to a cafe after the movie and talked for a bit.',
      'Man: Did you eat? We ordered pizza.',
      'Woman: Yeah, I had dinner at the cafe.',
      'Man: Well, if you are still hungry, there is still pizza in the kitchen.',
      'Woman: Thanks, but I am full. I ate a big sandwich.'
    ],
    spanish: [
      'Hombre: ¡Bienvenido a casa! ¿Qué has hecho esta noche?',
      'Mujer: Fui al cine con mis amigos.',
      'Hombre: ¡Divertido! ¿Qué viste?',
      'Mujer: Vimos la nueva película de James Bond.',
      'Hombre: ¿Qué tal fue? He oído que estaba bien.',
      'Mujer: Estuvo realmente bien. Me gustó mucho.',
      'Hombre: ¿Hiciste algo después?',
      'Mujer: Sí, fuimos a una cafetería después de la película y hablamos un poco.',
      'Hombre: ¿Has comido? Pedimos pizza.',
      'Mujer: Sí, cené en la cafetería.',
      'Hombre: Bueno, si aún tienes hambre, todavía hay pizza en la cocina.',
      'Mujer: Gracias, pero estoy llena. Me comí un bocadillo grande.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-4-Past-Tense-Tonight.mp3',
    exercises: [
        {
            question: "What movie did the woman see?",
            options: ["A comedy", "The new James Bond movie", "A horror movie"],
            correctAnswer: "The new James Bond movie"
        }
    ]
  }
];

const A1_23 = () => {
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
        <h2 className='introduccion-title'>Tiempo Pasado</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar el tiempo pasado para hablar de eventos que ya ocurrieron.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre lo que hiciste ayer, el fin de semana o en un día ocupado.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-Past-Tense.mp3`}
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

export default A1_23;