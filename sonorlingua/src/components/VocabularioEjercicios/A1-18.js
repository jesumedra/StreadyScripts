import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: What languages do you speak?',
      'Woman: I speak English and I study Spanish.',
      'Man: That\\\'s cool. Do you have friends from Spain?',
      'Woman: No, but I like Mexican series.',
      'Man: Me too. I love movies in Spanish.',
      'Woman: Yes. Spanish is great!'
    ],
    spanish: [
      'Hombre: ¿Qué idiomas hablas?',
      'Mujer: Hablo inglés y estudio español.',
      'Hombre: Eso mola. ¿Tienes amigos de España?',
      'Mujer: No, pero me gustan las series mexicanas.',
      'Hombre: Yo también. Me encantan las películas en español.',
      'Mujer: sí. ¡El español es genial!.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-1-Nationalities-Language.mp3'
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Do you like Japanese food?',
      'Woman: Yes, I love Japanese food. I used to live in Japan.',
      'Man: Oh, do you speak Japanese?',
      'Woman: A little. I have Japanese friends. I practice with them.',
      'Man: Do they speak English?',
      'Woman: Yes, they speak English very well.'
    ],
    spanish: [
      'Hombre: ¿Te gusta la comida japonesa?',
      'Mujer: Sí, me encanta la comida japonesa. Antes viví en Japón.',
      'Hombre: ¿Ah, hablas japonés?',
      'Mujer: Algo. Tengo amigos japoneses. Practico con ellos.',
      'Hombre: ¿Hablan inglés?',
      'Mujer: Sí, hablan inglés muy bien.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-2-Nationalities-Food.mp3'
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: What foods do you like?',
      'Woman: I like French food and Thai food.',
      'Man: Me too. I also love Chinese food.',
      'Woman: Do you like Korean food?',
      'Man: Yes, and I also love K-Pop.',
      'Woman: What is K-POP?',
      'Man: K-POP is Korean pop music.'
    ],
    spanish: [
      'Hombre: ¿Qué alimentos te gustan?',
      'Mujer: Me gusta la comida francesa y la comida tailandesa.',
      'Hombre: Yo también. También me encanta la comida china.',
      'Mujer: ¿Te gusta la comida coreana?',
      'Hombre: Sí, y también me encanta el K-Pop.',
      'Mujer: ¿Qué es el K-POP?',
      'Hombre: K-POP es música pop coreana.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-3-Nationalities.mp3'
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Do you like soccer?',
      'Woman: Yes, I love soccer. I watch German, Italian, Spanish soccer.',
      'Man: Me too, I want to go to England to see my team.',
      'Woman: What is your team?',
      'Man: Chelsea. They play in the English Premier League.',
      'Woman: Oh! My favorite team is AC Milan. They play in Italy.'
    ],
    spanish: [
      'Hombre: ¿Te gusta el fútbol?',
      'Mujer: Sí, me encanta el fútbol. Veo fútbol alemán, italiano, español.',
      'Hombre: Yo también, quiero ir a Inglaterra a ver a mi equipo.',
      'Mujer: ¿Cuál es tu equipo?',
      'Hombre: Chelsea. Juegan en la Premier League inglesa.',
      'Mujer: ¡Oh! Mi equipo favorito en el AC Milan. Juegan en Italia.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-4-Nationalities-Sport.mp3'
  }
];

const A1_18 = () => {
  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Nacionalidades e Idiomas</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a hablar sobre nacionalidades, idiomas, comidas y deportes de diferentes países.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre tus gustos y preferencias culturales.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-Nationalities.mp3`}
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

export default A1_18;