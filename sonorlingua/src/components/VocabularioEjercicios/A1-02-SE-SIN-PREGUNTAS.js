import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-1-Be-Yes-No-Questions-Hot.mp3',
    english: [
      "Man: Are you hot?",
      "Woman: Yes, I am very hot.",
      "Man: Is the air conditioning on?",
      "Woman: No, it's off.",
      "Man: Can I turn it on?",
      "Woman: Yes, please. And can you turn on the radio too?",
      "Man: Of course. Is jazz music OK?",
      "Woman: Yes, I love jazz music."
    ],
    spanish: [
      "Hombre: ¿Tienes calor?",
      "Mujer: Sí, tengo mucho calor.",
      "Hombre: ¿Está encendido el aire acondicionado?",
      "Mujer: No, está apagado.",
      "Hombre: ¿Puedo encenderlo?",
      "Mujer: Sí, por favor. ¿Y puedes encender la radio también?",
      "Hombre: Por supuesto. ¿Está bien la música jazz?",
      "Mujer: Sí, me encanta la música jazz."
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-2-Be-Yes-No-Questions-House.mp3',
    english: [
        "Man: Is your house big?",
        "Woman: Yes, it's quite big.",
        "Man: Is it new?",
        "Woman: No, it's very old.",
        "Man: Is it nice?",
        "Woman: Not really. It's cold in the winter.",
        "Man: Oh no! That's not good."
    ],
    spanish: [
        "Hombre: ¿Tu casa es grande?",
        "Mujer: Sí, es bastante grande.",
        "Hombre: ¿Es nuevo?",
        "Mujer: No, es muy antigua.",
        "Hombre: ¿Está bien?",
        "Mujer: No realmente. Hace frío en invierno.",
        "Hombre: ¡Oh, no! Eso no es bueno."
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-3-Be-Yes-No-Questions-Clothes.mp3',
    english: [
        "Man: I like your shoes. Are they new?",
        "Woman: Yes, they are.",
        "Man: Are they expensive?",
        "Woman: No, they are very cheap.",
        "Man: Are they comfortable?",
        "Woman: Yes, they are very comfortable.",
        "Man: Are they from the discount shoe store?",
        "Woman: Yes! How did you guess?"
    ],
    spanish: [
        "Hombre: Me gustan tus zapatos. ¿Son nuevos?",
        "Mujer: Sí, lo son.",
        "Hombre: ¿Son caros?",
        "Mujer: No, son muy baratas.",
        "Hombre: ¿Son cómodos?",
        "Mujer: Sí, son muy cómodos.",
        "Hombre: ¿Son de la zapatería de descuento?",
        "Mujer: ¡Sí! ¿Cómo lo has adivinado?"
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-4-Be-Yes-No-Questions-Hungry.mp3',
    english: [
        "Man: Are you hungry?",
        "Woman: Yes, I'm very hungry.",
        "Man: Do you want pizza?",
        "Woman: Yes, let's get some.",
        "Man: Is the pizza place still open?",
        "Woman: Yes, it's open until 10.",
        "Man: What time is it now?",
        "Woman: Eight. It's open for two more hours.",
        "Man: Great! I'm starving."
    ],
    spanish: [
        "Hombre: ¿Tienes hambre?",
        "Mujer: Sí, tengo mucha hambre.",
        "Hombre: ¿Quieres pizza?",
        "Mujer: Sí, vamos a por algo.",
        "Hombre: ¿La pizzería sigue abierta?",
        "Mujer: Sí, está abierto hasta las 10.",
        "Hombre: ¿Qué hora es ahora?",
        "Mujer: Ocho. Está abierto dos horas más.",
        "Hombre: ¡Genial! Me muero de hambre."
    ]
  },
];

const A1_02_SeSinPreguntas = () => {
  return (
    <div className='container-vocabulario'>
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Preguntas de Sí/No con el Verbo "To Be"</h2>
        <h4 className='introduccion-subtitle'>En este ejercicio aprenderemos a usar el verbo "To Be" para formar preguntas de sí o no.</h4>
        <h4 className='introduccion-subtitle'>Estas preguntas son esenciales para confirmar información.</h4>
        <div className='audio-item'>
            <audio controls>
              <source
                src={`/Audio/SoundGrammar/A1-Audio/A1-02/A1-02-Be-Yes-No-Questions.mp3`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default A1_02_SeSinPreguntas;