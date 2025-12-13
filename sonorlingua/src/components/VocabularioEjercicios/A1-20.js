import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: What do you do on the weekend?',
      'Woman: I usually stay home, but sometimes I go out.',
      'Man: Oh, where do you go?',
      'Woman: Sometimes I go to the beach. Sometimes, I go to the park.',
      'Man: I often go there, too. Do you ever go to the lake?',
      'Woman: No, very rarely. It is too far from my house.'
    ],
    spanish: [
      'Hombre: ¿Qué haces el fin de semana?',
      'Mujer: Normalmente me quedo en casa, pero a veces salgo.',
      'Hombre: Oh, ¿a dónde vas?',
      'Mujer: A veces voy a la playa. A veces, voy al parque.',
      'Hombre: Yo también voy a menudo allí. ¿Alguna vez vas al lago?',
      'Mujer: No, muy raramente. Está demasiado lejos de mi casa.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-1-Adverbs-Frequency.mp3'
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: What do you usually have for dinner?',
      'Woman: I try to eat healthy, so I usually cook vegetables.',
      'Man: Really? What kind of stuff do you make?',
      'Woman: Sometimes, I make soups. Sometimes, I make stir-fry.',
      'Man: Stir-fry! That’s not very healthy.',
      'Woman: I know, but I don\\\'t eat it often.'
    ],
    spanish: [
      'Hombre: ¿Qué sueles cenar?',
      'Mujer: Intento comer sano, así que suelo cocinar verduras.',
      'Hombre: ¿En serio? ¿Qué tipo de cosas haces?',
      'Mujer: A veces, hago sopas. A veces, hago salteados.',
      'Hombre: ¡Salteado! Eso no es muy saludable.',
      'Mujer: Lo sé, pero no lo como a menudo.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-2-Adverbs-Frequency.mp3'
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Woman: Do you take the bus to work?',
      'Man: No, I never take the bus. I always drive.',
      'Woman: Yeah, it\\\'s so much easier to drive.',
      'Man: Do you drive to work?',
      'Woman: Actually, I rarely drive. I usually walk to work. I live near the office.',
      'Man: Lucky you!'
    ],
    spanish: [
      'Mujer: ¿Tomas el autobús para ir al trabajo?',
      'Hombre: No, nunca tomo el autobús. Siempre conduzco.',
      'Mujer: Sí, es mucho más fácil conducir.',
      'Hombre: ¿Vas en coche al trabajo?',
      'Mujer: En realidad, rara vez conduzco. Suelo ir andando al trabajo. Vivo cerca de la oficina.',
      'Hombre: ¡Qué suerte!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-3-Adverbs-Frequency-Commute.mp3'
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Do you ever go to the movies?',
      'Woman: I rarely do. It is too expensive. Do you?',
      'Man: No, not often. I usually rent DVDs.',
      'Woman: Really? I never do that. I usually stream movies.',
      'Man: Nice. Do you have fast Internet?',
      'Woman: Yeah, usually it is fast, but sometimes it’s slow.'
    ],
    spanish: [
      'Hombre: ¿Alguna vez vas al cine?',
      'Mujer: Rara vez lo hago. Es demasiado caro. ¿Y tú?',
      'Hombre: No, no a menudo. Suelo alquilar DVDs.',
      'Mujer: ¿En serio? Nunca hago eso. Suelo ver películas en streaming.',
      'Hombre: Genial. ¿Tienes Internet rápido?',
      'Mujer: Sí, normalmente es rápido, pero a veces es lento.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-4-Adverbs-Frequency-Movie.mp3'
  }
];

const A1_20 = () => {
  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Adverbios de Frecuencia</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar adverbios de frecuencia para describir con qué frecuencia haces las cosas.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre tus hábitos y rutinas.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-Adverbs-Frequency.mp3`}
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

export default A1_20;