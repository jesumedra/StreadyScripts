import React from 'react';
import '../../styles/vocabulario.css';

const A1_08_DiasDeLaSemana = () => {
  const conversations = [
    {
      title: 'Conversación 1',
      english: [
        'Man: What days do you work?',
        'Woman: I work Monday, Tuesday, Thursday, and Friday. I don\'t work on Wednesdays.',
        'Man: Wow, that\'s a good schedule.',
        'Woman: Yes, but I sometimes work on Saturdays. And you?',
        'Man: I work from Monday to Friday. I never work on Saturdays or Sundays.',
        'Woman: What do you do on the weekend?',
        'Man: I work in my garden.'
      ],
      spanish: [
        'Hombre: ¿Qué días trabajas?',
        'Mujer: Trabajo lunes, martes, jueves y viernes. No trabajo los miércoles.',
        'Hombre: Vaya, es un buen horario.',
        'Mujer: sí, pero a veces trabajo los sábados. ¿Y tú?',
        'Hombre: Trabajo de lunes a viernes. Nunca trabajo los sábados ni los domingos.',
        'Mujer: ¿Qué haces el fin de semana?',
        'Hombre: Trabajo en mi jardín.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-08/A1-08-1-Days-of-Week-Work.mp3'
    },
    {
      title: 'Conversación 2',
      english: [
        'Man: When do you study on the weekends?',
        'Woman: I study on Saturday morning.',
        'Man: Really, I never study on Saturdays.',
        'Woman: When do you study?',
        'Man: I only study on Sunday nights.',
        'Woman: Oh, I never study on Sundays. Sunday is my fun day.'
      ],
      spanish: [
        'Hombre: ¿Cuándo estudias los fines de semana?',
        'Mujer: Estudio el sábado por la mañana.',
        'Hombre: De verdad, nunca estudio los sábados.',
        'Mujer: ¿Cuándo estudias?',
        'Hombre: Solo estudio los domingos por la noche.',
        'Mujer: Oh, nunca estudio los domingos. El domingo es mi día de diversión.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-08/A1-08-2-Days-of-Week-Study.mp3'
    },
    {
      title: 'Conversación 3',
      english: [
        'Man: What days do you have English class?',
        'Woman: I have class on Monday and Thursday.',
        'Man: When do you have math class?',
        'Woman: I have math class every day.',
        'Man: And what about history class?',
        'Woman: I have history class on Wednesday.',
        'Man: Wow, you have a very busy schedule.',
        'Woman: I know!'
      ],
      spanish: [
        'Hombre: ¿Qué días tienes clase de inglés?',
        'Mujer: Tengo clase el lunes y el jueves.',
        'Hombre: ¿Cuándo tienes clase de matemáticas?',
        'Mujer: Tengo clase de matemáticas todos los días.',
        'Hombre: ¿Y qué pasa con la clase de historia?',
        'Mujer: Tengo clase de historia el miércoles.',
        'Hombre: Vaya, tienes una agenda muy ocupada.',
        'Mujer: ¡Lo sé!'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-08/A1-08-3-Days-of-Week-English.mp3'
    },
    {
      title: 'Conversación 4',
      english: [
        'Woman: When do you play soccer?',
        'Man: I play on Tuesday and Friday nights.',
        'Woman: Okay, I only play on weekends.',
        'Man: Really, can I play with you?',
        'Woman: Yes, we play on Saturday and Sunday at the park at ten.',
        'Man: Great! See you this weekend!',
        'Woman: See you then!'
      ],
      spanish: [
        'Mujer: ¿Cuándo juegas al fútbol?',
        'Hombre: Juego los martes y viernes por la noche.',
        'Mujer: Bien, solo juego los fines de semana.',
        'Hombre: ¿De verdad, puedo jugar contigo?',
        'Mujer: Sí, jugamos el sábado y domingo en el parque a las diez.',
        'Hombre: ¡Genial! ¡Nos vemos este fin de semana!',
        'Mujer: ¡Nos vemos entonces!'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-08/A1-08-4-Days-of-Week-Soccer.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-08: Días de la semana</h1>
      {conversations.map((conv, index) => (
        <div key={index} className="conversation-row">
          <h2>{conv.title}</h2>
          <audio controls>
            <source src={conv.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <div className="row">
            <div className="col-md-6">
              <p><strong>English:</strong></p>
              {conv.english.map((line, i) => <p key={i}>{line}</p>)}
            </div>
            <div className="col-md-6">
              <p><strong>Spanish:</strong></p>
              {conv.spanish.map((line, i) => <p key={i}>{line}</p>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default A1_08_DiasDeLaSemana;