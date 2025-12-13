import React from 'react';
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
        ]
    },
    {
        id: 4,
        title: "Conversación 4",
        audio: "/Audio/SoundGrammar/A1-Audio/A1-09/A1-09-4-Subject-Pronouns-Lost.mp3",
        english: [
            "Man: Are we there yet?",
            "Woman: No, but I think we are close.",
            "Man: How close are we?",
            "Woman: We are ten, maybe twenty minutes away.",
            "Man: What? Twenty minutes! Are we lost?",
            "Woman: No, we are not lost. Trust me!"
        ],
        spanish: [
            "Hombre: ¿Ya hemos llegado?",
            "Mujer: No, pero creo que somos cercanos.",
            "Hombre: ¿Qué tan cerca estamos?",
            "Mujer: Estamos a diez, quizá veinte minutos.",
            "Hombre: ¿Qué? ¡Veinte minutos! ¿Estamos perdidos?",
            "Mujer: No, no estamos perdidos. ¡Confía en mí!"
        ]
    }
];

const A1_09_PronombresSujetos = () => {
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default A1_09_PronombresSujetos;