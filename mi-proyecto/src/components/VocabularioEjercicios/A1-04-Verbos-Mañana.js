import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
    {
        id: 1,
        title: 'Conversación 1',
        english: [
            'Man: What time do you get up?',
            'Woman: I get up at 6 AM.',
            'Man: Do you exercise in the morning?',
            'Woman: Yes, I exercise every morning.',
            'Man: What do you eat for breakfast?',
            'Woman: I eat eggs and toast for breakfast.'
        ],
        spanish: [
            'Hombre: ¿A qué hora te levantas?',
            'Mujer: Me levanto a las 6 AM.',
            'Hombre: ¿Haces ejercicio por la mañana?',
            'Mujer: Sí, hago ejercicio todas las mañanas.',
            'Hombre: ¿Qué desayunas?',
            'Mujer: Como huevos y tostadas para el desayuno.'
        ],
        audio: '/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-1.mp3',
        exercises: [
            { english: "I ______ up at 6 AM.", spanish: "(Me levanto a las 6 AM.)", correct: "get" },
            { english: "I ______ every morning.", spanish: "(Hago ejercicio todas las mañanas.)", correct: "exercise" },
            { english: "I ______ eggs and toast for breakfast.", spanish: "(Como huevos y tostadas para el desayuno.)", correct: "eat" }
        ]
    },
    {
        id: 2,
        title: 'Conversación 2',
        english: [
            'Man: Do you read the news online?',
            'Woman: Yes, I read the news on my phone.',
            'Man: Do you check your email too?',
            'Woman: Yes, I check my email on my laptop.',
            'Man: What time do you go to work?',
            'Woman: I go to work at 8 AM.'
        ],
        spanish: [
            'Hombre: ¿Lees las noticias en línea?',
            'Mujer: Sí, leo las noticias en mi teléfono.',
            'Hombre: ¿Revisas tu correo electrónico también?',
            'Mujer: Sí, reviso mi correo electrónico en mi portátil.',
            'Hombre: ¿A qué hora vas a trabajar?',
            'Mujer: Voy a trabajar a las 8 AM.'
        ],
        audio: '/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-2.mp3',
        exercises: [
            { english: "I ______ the news on my phone.", spanish: "(Leo las noticias en mi teléfono.)", correct: "read" },
            { english: "I ______ my email on my laptop.", spanish: "(Reviso mi correo electrónico en mi portátil.)", correct: "check" },
            { english: "I ______ to work at 8 AM.", spanish: "(Voy a trabajar a las 8 AM.)", correct: "go" }
        ]
    },
    {
        id: 3,
        title: 'Conversación 3',
        english: [
            'Man: Do you study English in the morning?',
            'Woman: No, I study in the afternoon.',
            'Man: Do you listen to music when you study?',
            'Woman: No, I watch TV.',
            'Man: Really? I listen to the radio.',
            'Woman: I listen to the radio in the car.'
        ],
        spanish: [
            'Hombre: ¿Estudias inglés por la mañana?',
            'Mujer: No, estudio por la tarde.',
            'Hombre: ¿Escuchas música cuando estudias?',
            'Mujer: No, veo la televisión.',
            'Hombre: ¿En serio? Yo escucho la radio.',
            'Mujer: Escucho la radio en el coche.'
        ],
        audio: '/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-3.mp3',
        exercises: [
            { english: "I ______ in the afternoon.", spanish: "(Estudio por la tarde.)", correct: "study" },
            { english: "I ______ TV.", spanish: "(Veo la televisión.)", correct: "watch" },
            { english: "I ______ to the radio in the car.", spanish: "(Escucho la radio en el coche.)", correct: "listen" }
        ]
    }
];

const A1_04_Verbos_Manana = () => {
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (convId, exerciseIndex, value) => {
        setUserAnswers(prev => ({
            ...prev,
            [`${convId}-${exerciseIndex}`]: value
        }));
    };

    const checkAnswers = () => {
        setShowResults(true);
    };

    const resetAnswers = () => {
        setUserAnswers({});
        setShowResults(false);
    };

    return (
        <div className="container-vocabulario">
            <div className='introduccion-header'>
                <h2 className='introduccion-title'>Verbos de la Mañana</h2>
                <h4 className='introduccion-subtitle'>En esta lección, aprenderás sobre los verbos comunes que usamos para describir nuestras rutinas matutinas.</h4>
                <div className='audio-item'>
                    <audio controls>
                        <source src={`/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-all.mp3`} type='audio/mp3' />
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
                        {conv.exercises && (
                            <div className="exercises-column">
                                <h3>Exercises</h3>
                                {conv.exercises.map((exercise, i) => {
                                    const [part1, part2] = exercise.english.split('______');
                                    const exerciseId = `${conv.id}-${i}`;
                                    const isCorrect = showResults && userAnswers[exerciseId]?.trim().toLowerCase() === exercise.correct.toLowerCase();

                                    return (
                                        <div key={i} className="exercise">
                                            <p>
                                                {part1}
                                                <input
                                                    type="text"
                                                    value={userAnswers[exerciseId] || ''}
                                                    onChange={(e) => handleInputChange(conv.id, i, e.target.value)}
                                                    className={showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}
                                                />
                                                {part2}
                                            </p>
                                            <p><em>{exercise.spanish}</em></p>
                                            {showResults && !isCorrect && <p className="correct-answer">Respuesta correcta: {exercise.correct}</p>}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
                <div className="action-buttons">
                    <button onClick={checkAnswers}>Comprobar respuestas</button>
                    <button onClick={resetAnswers}>Intentar de nuevo</button>
                </div>
            </div>
        </div>
    );
};

export default A1_04_Verbos_Manana;