import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: How was the movie?',
      'Woman: It was really good.',
      'Man: Was it scary?',
      'Woman: Yes, it was really scary.',
      'Man: Nice. Was it crowded?',
      'Woman: No, it wasn’t. There weren’t many people there, surprisingly.'
    ],
    spanish: [
      'Hombre: ¿Qué tal la película?',
      'Mujer: Estuvo muy buena.',
      'Hombre: ¿Daba miedo?',
      'Mujer: Sí, daba mucho miedo.',
      'Hombre: Genial. ¿Estaba lleno?',
      'Mujer: No, no lo estaba. No había mucha gente allí, sorprendentemente.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-1-Was-Were.mp3'
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Where were you last night?',
      'Woman: I was at work.',
      'Man: Really? I was at your shop. You weren’t there.',
      'Woman: No, I was in the back working.',
      'Man: You were?',
      'Woman: Really! I was there.'
    ],
    spanish: [
      'Hombre: ¿Dónde estuviste anoche?',
      'Mujer: Estaba en el trabajo.',
      'Hombre: ¿En serio? Estuve en tu tienda. No estabas allí.',
      'Mujer: No, estaba en la parte de atrás trabajando.',
      'Hombre: ¿Lo estabas?',
      'Mujer: ¡De verdad! Estaba allí.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-2-Was-Were.mp3'
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: How was the test?',
      'Woman: It was really hard.',
      'Man: How long was it?',
      'Woman: There were about 20 problems.',
      'Man: Yeah? What was your score?',
      'Woman: Let’s just say, it wasn’t great, but it wasn’t bad either.'
    ],
    spanish: [
      'Hombre: ¿Qué tal el examen?',
      'Mujer: Fue muy difícil.',
      'Hombre: ¿Cómo de largo era?',
      'Mujer: Había unos 20 problemas.',
      'Hombre: ¿Sí? ¿Cuál fue tu puntuación?',
      'Mujer: Digamos que no fue genial, pero tampoco estuvo mal.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-3-Was-Were.mp3'
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Do you know who was at the party?',
      'Woman: Jason was there. So was Sue.',
      'Man: Oh, were Tom and Katie there?',
      'Woman: No, they weren’t there, but their son was.',
      'Man: Oh, I see. So, was it fun?',
      'Woman: Yeah, it was a fun evening.'
    ],
    spanish: [
      'Hombre: ¿Sabes quién estuvo en la fiesta?',
      'Mujer: Jason estaba allí. También Sue.',
      'Hombre: Oh, ¿estuvieron Tom y Katie allí?',
      'Mujer: No, no estuvieron allí, pero su hijo sí.',
      'Hombre: Oh, ya veo. Entonces, ¿fue divertido?',
      'Mujer: Sí, fue una noche divertida.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-4-Was-Were.mp3'
  }
];

const A1_22 = () => {
  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Was / Were</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar "was" y "were" para hablar del pasado.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre experiencias pasadas, como ver una película, estar en un lugar o hacer un examen.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-22/A1-22-Was-Were.mp3`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default A1_22;