import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: When is your birthday?',
      'Woman: It is October 18th. When is your birthday?',
      'Man: It is May 5th.',
      'Woman: Oh, my sister\\\'s birthday is in May.',
      'Man: Oh, what day?',
      'Woman: May 11th.'
    ],
    spanish: [
      'Hombre: ¿Cuándo es tu cumpleaños?',
      'Mujer: Es el 18 de octubre. ¿Cuándo es tu cumpleaños?',
      'Hombre: Es el 5 de mayo.',
      'Mujer: Oh, el cumpleaños de mi hermana es en mayo.',
      'Hombre: Oh, ¿qué día?',
      'Mujer: El 11 de mayo.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-1-Ordinals-Birthday.mp3'
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: When is your vacation?',
      'Woman: It is from the 8th to the 12th. And you?',
      'Man: It is from the 9th to the 15th.',
      'Woman: Wow, so lucky. I work on the 13th.',
      'Man: Yeah, I am lucky.',
      'Woman: Do you start work on the 16th?',
      'Man: Yes, I start work on the 16th.'
    ],
    spanish: [
      'Hombre: ¿Cuándo son tus vacaciones?',
      'Mujer: Son del 8 al 12. ¿Y tú?',
      'Hombre: Son del 9 al 15.',
      'Mujer: Guau, qué suerte. Yo trabajo el 13.',
      'Hombre: Sí, tengo suerte.',
      'Mujer: ¿Empiezas a trabajar el 16?',
      'Hombre: Sí, empiezo a trabajar el 16.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-2-Ordinals-Vacation.mp3'
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Excuse me, where are the books?',
      'Woman: The books are on the fifth floor.',
      'Man: Fifth floor. Got it. And where are the sporting goods?',
      'Woman: Sporting goods are on the third floor.',
      'Man: Third floor. Great. And the restrooms?',
      'Woman: They are on the first, second, fourth and sixth floors.',
      'Man: Great. Thanks so much.',
      'Woman: My pleasure.'
    ],
    spanish: [
      'Hombre: Disculpe, ¿dónde están los libros?',
      'Mujer: Los libros están en el quinto piso.',
      'Hombre: Quinto piso. Entendido. ¿Y dónde están los artículos deportivos?',
      'Mujer: Los artículos deportivos están en el tercer piso.',
      'Hombre: Tercer piso. Genial. ¿Y los baños?',
      'Mujer: Están en el primer, segundo, cuarto y sexto piso.',
      'Hombre: Genial. Muchas gracias.',
      'Mujer: De nada.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-3-Ordinals-Store.mp3'
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: What do you have first period?',
      'Woman: I have math. And you?',
      'Man: I have English. What about second period?',
      'Woman: I have P.E. What about you?',
      'Man: I have history class.',
      'Woman: What do you have third period?',
      'Man: I have art class.',
      'Woman: Really! I have art class third period, too!'
    ],
    spanish: [
      'Hombre: ¿Qué tienes en la primera hora?',
      'Mujer: Tengo matemáticas. ¿Y tú?',
      'Hombre: Tengo inglés. ¿Y en la segunda hora?',
      'Mujer: Tengo educación física. ¿Y tú?',
      'Hombre: Tengo clase de historia.',
      'Mujer: ¿Qué tienes en la tercera hora?',
      'Hombre: Tengo clase de arte.',
      'Mujer: ¡De verdad! ¡Yo también tengo clase de arte en la tercera hora!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-4-Ordinals-Classes.mp3'
  }
];

const A1_14 = () => {
  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Números Ordinales</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar los números ordinales para hablar de fechas, horarios y ubicaciones.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre cumpleaños, vacaciones, horarios de clase y cómo encontrar cosas en una tienda.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-14/A1-14-Ordinals.mp3`}
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

export default A1_14;