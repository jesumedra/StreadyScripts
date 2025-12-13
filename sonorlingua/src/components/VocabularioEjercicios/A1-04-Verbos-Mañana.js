import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1: Mañana en Casa',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-1-Verbs-Morning.mp3',
    english: [
      "Man: What do you do in the morning?",
      "Woman: I wake up. I take a shower. I get dressed and have breakfast.",
      "Man: Oh! When do you get up?",
      "Woman: I get up at 6.",
      "Man: Wow! That's early.",
      "Woman: I know! I like mornings though."
    ],
    spanish: [
      "Hombre: ¿Qué haces por la mañana?",
      "Mujer: Me despierto. Me ducho. Me visto y desayuno.",
      "Hombre: ¡Oh! ¿Cuándo te levantas?",
      "Mujer: Me levanto a las 6.",
      "Hombre: ¡Guau! Eso es pronto.",
      "Mujer: ¡Lo sé! Aunque me gustan las mañanas."
    ]
  },
  {
    id: 2,
    title: 'Conversación 2: Tareas en Casa',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-2-Verbs-Day.mp3',
    english: [
      "Man: What do you do during the day?",
      "Woman: Well, I go to school. I teach students.",
      "Man: Oh! What do you teach?",
      "Woman: I teach math. What do you do?",
      "Man: I work at a bike shop.",
      "Woman: Really? What do you do at the shop?",
      "Man: I fix and sell bikes.",
      "Woman: Sounds fun."
    ],
    spanish: [
      "Hombre: ¿Qué haces durante el día?",
      "Mujer: Bueno, yo voy al colegio. Doy clases a los estudiantes.",
      "Hombre: ¡Uy! ¿Qué enseñas?",
      "Mujer: Enseño matemáticas. ¿A qué te dedicas?",
      "Hombre: Trabajo en una tienda de bicicletas.",
      "Mujer: ¿De verdad? ¿Qué haces en la tienda?",
      "Hombre: Reparo y vendo bicicletas.",
      "Mujer: Suena divertido."
    ]
  },
  {
    id: 3,
    title: 'Conversación 3: Almuerzo',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-3-Verbs-Lunch.mp3',
    english: [
      "Man: What do you do on your lunch break?",
      "Woman: I eat with my friends. And you?",
      "Man: I eat in the park.",
      "Woman: How nice.",
      "Man: Yes, I like to read on my lunch break.",
      "Woman: Oh, what do you read?",
      "Man: I read about history.",
      "Woman: Interesting."
    ],
    spanish: [
      "Hombre: ¿Qué haces en la hora de comer?",
      "Mujer: Como con mis amigos. ¿Y tú?",
      "Hombre: Como en el parque.",
      "Mujer: Qué bien.",
      "Hombre: sí, me gusta leer en mi descanso para comer.",
      "Mujer: Uy, ¿qué lees?",
      "Hombre: Leo sobre historia.",
      "Mujer: Interesante."
    ]
  },
  {
    id: 4,
    title: 'Conversación 4: Fin de Semana',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-4-Verbs-Weekend.mp3',
    english: [
      "Man: What do you do on the weekend?",
      "Woman: I play sports in the park. And you?",
      "Man: I study at the library.",
      "Woman: Oh, right! You love books.",
      "Man: Yes. So, what sports do you play?",
      "Woman: I play soccer with my friends.",
      "Man: Sounds fun.",
      "Woman: It is!"
    ],
    spanish: [
      "Hombre: ¿Qué haces el fin de semana?",
      "Mujer: Practico deportes en el parque. ¿Y tú?",
      "Hombre: Estudio en la biblioteca.",
      "Mujer: ¡Ah, claro! Te encantan los libros.",
      "Hombre: sí. Entonces, ¿qué deportes practicas?",
      "Mujer: Juego al fútbol con mis amigos.",
      "Hombre: Suena divertido.",
      "Mujer: ¡Lo es!"
    ]
  },
];

const A1_04_Verbos_Manana = () => {
  return (
    <div className="container-vocabulario">
      <h2>A1-04 Verbos de la Mañana</h2>
      <p>En esta lección, aprenderás los verbos más comunes para hablar de tu rutina diaria.</p>
      <div className="audio-container">
        <p>Escucha la introducción:</p>
        <audio controls src="/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-Verbs.mp3" />
      </div>
      <h3>Conversaciones</h3>
      {conversations.map((conv) => (
        <div key={conv.id} className="conversation-container">
          <h4>{conv.title}</h4>
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
  );
};

export default A1_04_Verbos_Manana;