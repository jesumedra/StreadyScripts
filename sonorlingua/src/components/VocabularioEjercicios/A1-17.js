import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Is this your jacket?',
      'Woman: No, that\\\'s not mine.',
      'Man: Whose is it?',
      'Woman: Maybe it is Tom\\\'s jacket.',
      'Man: No, that is his jacket over there.',
      'Woman: I\\\'m not sure then.',
      'Man: Is it Beth\\\'s jacket?',
      'Woman: No, it is too big to be her jacket.',
      'Man: Well, it belongs to someone.'
    ],
    spanish: [
      'Hombre: ¿Es esta tu chaqueta?',
      'Mujer: No, esa no es mía.',
      'Hombre: ¿De quién es?',
      'Mujer: Tal vez es la chaqueta de Tom.',
      'Hombre: No, esa es su chaqueta de allí.',
      'Mujer: No estoy segura entonces.',
      'Hombre: ¿Es la chaqueta de Beth?',
      'Mujer: No, es demasiado grande para ser su chaqueta.',
      'Hombre: Bueno, le pertenece a alguien.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-1-Possessives-Jacket.mp3'
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Whose car is this?',
      'Woman: That belongs to Joe and Sue.',
      'Man: Wow! I like their car.',
      'Woman: I know. It is very nice.',
      'Man: It\\\'s big too!',
      'Woman: Yes, they need space for their kids.'
    ],
    spanish: [
      'Hombre: ¿De quién es este coche?',
      'Mujer: Ese pertenece a Joe y Sue.',
      'Hombre: ¡Vaya! Me gusta su coche.',
      'Mujer: Lo sé. Es muy bonito.',
      'Hombre: ¡También es grande!',
      'Mujer: Sí, necesitan espacio para sus hijos.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-2-Possessives-Car.mp3'
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Whose car is this?',
      'Woman: That belongs to Joe and Sue.',
      'Man: Wow! I like their car.',
      'Woman: I know. It is very nice.',
      'Man: It\\\'s big too!',
      'Woman: Yes, they need space for their kids.'
    ],
    spanish: [
      'Hombre: ¿De quién es este coche?',
      'Mujer: Ese pertenece a Joe y Sue.',
      'Hombre: ¡Vaya! Me gusta su coche.',
      'Mujer: Lo sé. Es muy bonito.',
      'Hombre: ¡También es grande!',
      'Mujer: Sí, necesitan espacio para sus hijos.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-3-Possessives-Meeting.mp3'
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: I like the new office. So, where is my desk?',
      'Woman: Yours is over there. It is next to mine.',
      'Man: Nice. And where is Jill\\\'s desk?',
      'Woman: Hers is over there.',
      'Man: Where is Bob\\\'s desk?',
      'Woman: His is in the back, by the window.'
    ],
    spanish: [
      'Hombre: Me gusta la nueva oficina. Entonces, ¿dónde está mi escritorio?',
      'Mujer: El tuyo está allí. Está al lado del mío.',
      'Hombre: Genial. ¿Y dónde está el escritorio de Jill?',
      'Mujer: El de ella está allí.',
      'Hombre: ¿Dónde está el escritorio de Bob?',
      'Mujer: El suyo está al fondo, junto a la ventana.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-4-Possessives-Desk.mp3'
  }
];

const A1_17 = () => {
  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Posesivos</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar los posesivos para hablar de pertenencia.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre cómo preguntar y responder a quién pertenece algo.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-Possessives.mp3`}
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

export default A1_17;