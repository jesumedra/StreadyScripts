import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'A1-01-1-Be-Verbs-First-Day',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-1-Be-Verbs-First-Day.mp3',
    english: [
        "Man: Hi! Are you a new student?",
        "Woman: Yes, I am. Today is my first day.",
        "Man: Well, welcome. My name is Tony.",
        "Woman: Hi, Tony. I'm Beth.",
        "Man: Are you new to the city?",
        "Woman: Yes, I'm from New York.",
        "Man: Wow! The Big City!",
        "Woman: Are you from around here?",
        "Man: Yes, I am.",
        "Woman: That's great. Well, nice to meet you.",
        "Man: Nice to meet you too."
    ],
    spanish: [
        "Hombre: ¡Hola! ¿Eres un estudiante nuevo?",
        "Mujer: Sí, lo soy. Hoy es mi primer día.",
        "Hombre: Bueno, bienvenido. Me llamo Tony.",
        "Mujer: Hola, Tony. Soy Beth.",
        "Hombre: ¿Eres nuevo en la ciudad?",
        "Mujer: Sí, soy de Nueva York.",
        "Hombre: ¡Guau! ¡La Gran Ciudad!",
        "Mujer: ¿Eres de por aquí?",
        "Hombre: Sí, lo estoy.",
        "Mujer: Eso es genial. Bueno, encantado de conocerte.",
        "Hombre: Encantado de conocerte también."
    ]
  },
  {
    id: 2,
    title: 'A1-01-2-Be-Verbs-Yes-Teachers',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-2-Be-Verb-Yes-Teachers.mp3',
    english: [
        "Man: Hi Beth, how is your first day?",
        "Woman: It's really good. This school is great!",
        "Man: How are your classes?",
        "Woman: They are fun! My teachers are very kind.",
        "Man: Who are your teachers?",
        "Woman: My English teacher is Mr. Wong.",
        "Man: Oh, he is very nice.",
        "Woman: Yes, he is. My Spanish teacher is Mrs. Garcia.",
        "Man: Oh, she is also very nice.",
        "Woman: Yes, her class is very fun!"
    ],
    spanish: [
        "Hombre: Hola Beth, ¿qué tal tu primer día?",
        "Mujer: Está realmente bien. ¡Este colegio es genial!",
        "Hombre: ¿Qué tal tus clases?",
        "Mujer: ¡Son divertidos! Mis profesores son muy amables.",
        "Hombre: ¿Quiénes son tus profesores?",
        "Mujer: Mi profesor de inglés es el señor Wong.",
        "Hombre: Oh, es muy majo.",
        "Mujer: Sí, lo es. Mi profesora de español es la señora García.",
        "Hombre: Oh, también es muy maja.",
        "Mujer: ¡Sí, su clase es muy divertida!"
    ]
  },
  {
    id: 3,
    title: 'A1-01-3-Be-Verbs-Classes',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-3-Be-Verb-Classes.mp3',
    english: [
        "Man: What is your favorite class?",
        "Woman: Spanish. I love it. Although my Spanish is not very good. I'm just a beginner.",
        "Man: Well, Spanish is my native language. My name is Tony, short for Antonio.",
        "Woman: Really! That's great.",
        "Man: Yes, my father is from Mexico and my mother is from Costa Rica.",
        "Woman: Wow! You are very lucky.",
        "Man: Yes, Spanish is easy for me, so I can help you if you want.",
        "Woman: I would like that. Thanks!"
    ],
    spanish: [
        "Hombre: ¿Cuál es tu clase favorita?",
        "Mujer: Española. Me encanta. Aunque mi español no es muy bueno. Solo soy un principiante.",
        "Hombre: Bueno, el español es mi lengua materna. Me llamo Tony, diminutivo de Antonio.",
        "Mujer: ¡De verdad! Eso es genial.",
        "Hombre: sí, mi padre es de México y mi madre es de Costa Rica.",
        "Mujer: ¡Guau! Tienes mucha suerte.",
        "Hombre: Sí, el español me resulta fácil, así que puedo ayudarte si quieres.",
        "Mujer: Me gustaría. ¡Gracias!"
    ]
  },
  {
    id: 4,
    title: 'A1-01-4-Be-Verbs-Lab',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-4-Be-Verbs-Lab.mp3',
    english: [
        "Woman: Tony, where is the computer lab?",
        "Man: It's just down the hall.",
        "Woman: My Spanish class is tomorrow.",
        "Man: When is the class?",
        "Woman: It's at 6, after school.",
        "Man: Why isn't the class online?",
        "Woman: It is, but I'm still new in town, so I don't have internet at home yet.",
        "Man: Oh, I see. Well, good luck with the class.",
        "Woman: Thanks. I'm excited about it. I think online classes are fun!",
        "Man: I think so too."
    ],
    spanish: [
        "Mujer: Tony, ¿dónde está el laboratorio de informática?",
        "Hombre: Está justo al final del pasillo.",
        "Mujer: Mi clase de español es mañana.",
        "Hombre: ¿Cuándo es la clase?",
        "Mujer: Es a las 6, después del colegio.",
        "Hombre: ¿Por qué la clase no es online?",
        "Mujer: Sí, pero todavía soy nueva en la ciudad, así que aún no tengo internet en casa.",
        "Hombre: Ah, ya veo. Bueno, suerte con la clase.",
        "Mujer: Gracias. Estoy emocionado por ello. ¡Creo que las clases online son divertidas!",
        "Hombre: Yo también lo creo."
    ]
  }
];

const Introduccion = () => {
  return (
    <div className="container-vocabulario">
      <h1>The Verb "Be"</h1>
      <div className="audio-container">
        <p>Escucha la introducción:</p>
        <audio controls src="/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-Be-Verb.mp3" />
      </div>
      <h3>Conversaciones</h3>
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
  );
};

export default Introduccion;