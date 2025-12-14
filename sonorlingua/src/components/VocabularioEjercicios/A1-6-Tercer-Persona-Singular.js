import React, { useState } from 'react';
import '../../styles/vocabulario.css';

const conversations = [
    {
        id: 1,
        title: 'Conversación 1: Rutina Diaria',
        english: [
            'Man: What time does she get up?',
            'Woman: She gets up at 7 AM.',
            'Man: Does she exercise in the morning?',
            'Woman: No, she exercises in the afternoon.',
            'Man: What does she eat for breakfast?',
            'Woman: She eats cereal and fruit.'
        ],
        spanish: [
            'Hombre: ¿A qué hora se levanta ella?',
            'Mujer: Ella se levanta a las 7 AM.',
            'Hombre: ¿Hace ejercicio por la mañana?',
            'Mujer: No, ella hace ejercicio por la tarde.',
            'Hombre: ¿Qué come para el desayuno?',
            'Mujer: Ella come cereal y fruta.'
        ],
        audio: '/Audio/SoundGrammar/A1-Audio/A1-06/A1-06-1.mp3',
        exercises: [
            { english: "She ______ up at 7 AM.", spanish: "(Ella se levanta a las 7 AM.)", correct: "gets" },
            { english: "She ______ in the afternoon.", spanish: "(Ella hace ejercicio por la tarde.)", correct: "exercises" },
            { english: "She ______ cereal and fruit.", spanish: "(Ella come cereal y fruta.)", correct: "eats" }
        ]
    },
    {
        id: 2,
        title: 'Conversación 2: Hábitos de Estudio',
        english: [
            'Man: Does he study English at school?',
            'Woman: Yes, he studies English and math.',
            'Man: Does he listen to music in class?',
            'Woman: No, he listens to the teacher.',
            'Man: Does he watch TV at home?',
            'Woman: Yes, he watches TV after school.'
        ],
        spanish: [
            'Hombre: ¿Él estudia inglés en la escuela?',
            'Mujer: Sí, él estudia inglés y matemáticas.',
            'Hombre: ¿Él escucha música en clase?',
            'Mujer: No, él escucha a la maestra.',
            'Hombre: ¿Él ve la televisión en casa?',
            'Mujer: Sí, él ve la televisión después de la escuela.'
        ],
        audio: '/Audio/SoundGrammar/A1-Audio/A1-06/A1-06-2.mp3',
        exercises: [
            { english: "He ______ English and math.", spanish: "(Él estudia inglés y matemáticas.)", correct: "studies" },
            { english: "He ______ to the teacher.", spanish: "(Él escucha a la maestra.)", correct: "listens" },
            { english: "He ______ TV after school.", spanish: "(Él ve la televisión después de la escuela.)", correct: "watches" }
        ]
    },
    {
        id: 3,
        title: 'Conversación 3: Trabajo y Tiempo Libre',
        english: [
            'Man: What does he do for work?',
            'Woman: He works at a restaurant.',
            'Man: Does he cook?',
            'Woman: No, he manages the finances.',
            'Man: Does he have free time?',
            'Woman: Yes, he has free time on weekends.'
        ],
        spanish: [
            'Hombre: ¿A qué se dedica él?',
            'Mujer: Él trabaja en un restaurante.',
            'Hombre: ¿Él cocina?',
            'Mujer: No, él administra las finanzas.',
            'Hombre: ¿Tiene tiempo libre?',
            'Mujer: Sí, él tiene tiempo libre los fines de semana.'
        ],
        audio: '/Audio/SoundGrammar/A1-Audio/A1-06/A1-06-3.mp3',
        exercises: [
            { english: "He ______ at a restaurant.", spanish: "(Él trabaja en un restaurante.)", correct: "works" },
            { english: "He ______ the finances.", spanish: "(Él administra las finanzas.)", correct: "manages" },
            { english: "He ______ free time on weekends.", spanish: "(Él tiene tiempo libre los fines de semana.)", correct: "has" }
        ]
    }
];

const A1_6_Tercer_Persona_Singular = () => {
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
                <h2 className='introduccion-title'>Tercera Persona del Singular</h2>
                <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar la tercera persona del singular en el presente simple.</h4>
                <div className='audio-item'>
                    <audio controls>
                        <source src={`/Audio/SoundGrammar/A1-Audio/A1-06/A1-06-all.mp3`} type='audio/mp3' />
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

export default A1_6_Tercer_Persona_Singular;