import React from 'react';
import '../../styles/vocabulario.css';

const A1_06_Tercer_Persona_Singular = () => {
  const conversations = [
    {
      title: 'Conversación 1',
      english: [
        'Woman: What does your mother do?',
        'Man: She sells women\'s clothing.',
        'Woman: Oh, really? Where does she work?',
        'Man: She has a small shop in the mall.',
        'Woman: Does she sell clothes for teenagers?',
        'Man: No, she only has things for adults.'
      ],
      spanish: [
        'Mujer: ¿A qué se dedica tu madre?',
        'Hombre: Vende ropa de mujer.',
        'Mujer: ¿Ah, sí? ¿Dónde trabaja?',
        'Hombre: Tiene una pequeña tienda en el centro comercial.',
        'Mujer: ¿Vende ropa para adolescentes?',
        'Hombre: No, solo tiene cosas para adultos.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-06/A1-06-1-What-does-your-mother-do.mp3'
    },
    {
      title: 'Conversación 2',
      english: [
        'Man: What does your brother do?',
        'Woman: He\'s a university student. He studies engineering.',
        'Man: Oh, does he live at home?',
        'Woman: No, he has a small apartment.',
        'Man: Does he come home much?',
        'Woman: No, he doesn\'t. He doesn\'t have much free time.',
        'Man: When do you see him?',
        'Woman: On holidays. He calls my mom every week, though.'
      ],
      spanish: [
        'Hombre: ¿A qué se dedica tu hermano?',
        'Mujer: Es estudiante universitario. Estudia ingeniería.',
        'Hombre: ¿Ah, vive en casa?',
        'Mujer: No, tiene un piso pequeño.',
        'Hombre: ¿Viene mucho a casa?',
        'Mujer: No, no lo hace. No tiene mucho tiempo libre.',
        'Hombre: ¿Cuándo lo ves?',
        'Mujer: En las fiestas. Aunque llama a mi madre cada semana.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-06/A1-06-2-What-does-your-brother-do.mp3'
    },
    {
      title: 'Conversación 3',
      english: [
        'Man: Where does your daughter study?',
        'Woman: She attends the local high school.',
        'Man: Does she like her school?',
        'Woman: Yes, she plays sports and participates in many clubs.',
        'Man: And what sports does she play?',
        'Woman: She plays volleyball. She has a game tomorrow.',
        'Man: Oh, I hope she wins.'
      ],
      spanish: [
        'Hombre: ¿Dónde estudia tu hija?',
        'Mujer: Asiste al instituto local.',
        'Hombre: ¿Le gusta su colegio?',
        'Mujer: Sí, practica deportes y participa en muchos clubes.',
        'Hombre: ¿Y qué deportes practica?',
        'Mujer: Juega al voleibol. Tiene partido mañana.',
        'Hombre: Oh, espero que gane.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-06/A1-06-3-Where-does-your-daughter-study.mp3'
    },
    {
      title: 'Conversación 4',
      english: [
        'Man: When does the movie start?',
        'Woman: It starts in about ten minutes.',
        'Man: Cool! Who is in the movie?',
        'Woman: Brad Pitt. He plays a cop in the future.',
        'Man: Does it have good reviews?',
        'Woman: Yes. Everyone says it\'s a great movie.'
      ],
      spanish: [
        'Hombre: ¿Cuándo empieza la película?',
        'Mujer: Empieza en unos diez minutos.',
        'Hombre: ¡Guay! ¿Quién sale en la película?',
        'Mujer: Brad Pitt. Interpreta a un policía en el futuro.',
        'Hombre: ¿Tiene buenas críticas?',
        'Mujer: Sí. Todo el mundo dice que es una gran película.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-06/A1-06-4-When-does-the-movie-start.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-06: Tercera Persona del Singular</h1>
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

export default A1_06_Tercer_Persona_Singular;