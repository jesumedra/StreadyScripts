import React from 'react';
import '../../styles/vocabulario.css';

const A1_05_VerboSiNoPreguntas = () => {
  const conversations = [
    {
      title: 'Conversación 1',
      english: [
        'Man: Do you play sports?',
        'Woman: Yes, I do. I love basketball.',
        'Man: Do you play on a team?',
        'Woman: Yes, but we don\'t play in the winter.',
        'Man: Do you play in the summer?',
        'Woman: Yes, we play in the spring and summer.',
        'Man: Do you play at the city gym?',
        'Woman: No, we play at a high school.'
      ],
      spanish: [
        'Hombre: ¿Juegas a deportes?',
        'Mujer: Sí, lo hago. Me encanta el baloncesto.',
        'Hombre: ¿Juegas en un equipo?',
        'Mujer: Sí, pero no jugamos en invierno.',
        'Hombre: ¿Juegas en verano?',
        'Mujer: Sí, jugamos en primavera y verano.',
        'Hombre: ¿Juegas en el gimnasio de la ciudad?',
        'Mujer: No, jugamos en un instituto.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-1-Do-you-play-sports.mp3'
    },
    {
      title: 'Conversación 2',
      english: [
        'Man: Do you have pets?',
        'Woman: Yes, I have a cat. And you?',
        'Man: I don\'t have a cat, but I have a dog.',
        'Woman: Great! Do you have a big yard?',
        'Man: Yes, I have a big yard, so it\'s perfect for my dog.',
        'Woman: Yeah, I don\'t have a yard, so I can only have a cat.'
      ],
      spanish: [
        'Hombre: ¿Tienes mascotas?',
        'Mujer: Sí, tengo un gato. ¿Y tú?',
        'Hombre: No tengo gato, pero sí un perro.',
        'Mujer: ¡Genial! ¿Tienes un jardín grande?',
        'Hombre: Sí, tengo un jardín grande, así que es perfecto para mi perro.',
        'Mujer: Sí, no tengo jardín, así que solo puedo tener un gato.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-2-Do-you-have-pets.mp3'
    },
    {
      title: 'Conversación 3',
      english: [
        'Man: Do you cook a lot?',
        'Woman: Yes, I cook all the time. Do you cook?',
        'Man: No, I don\'t like to cook very much.',
        'Woman: Oh, so you buy your dinner?',
        'Man: Yes, I buy it at the supermarket.',
        'Woman: Do you buy dinner every night?',
        'Man: Yes, I never cook.',
        'Woman: Wow! That\'s expensive.'
      ],
      spanish: [
        'Hombre: ¿Cocinas mucho?',
        'Mujer: Sí, cocino todo el tiempo. ¿Cocinas?',
        'Hombre: No, no me gusta mucho cocinar.',
        'Mujer: Ah, ¿entonces compras tu cena?',
        'Hombre: Sí, lo compro en el supermercado.',
        'Mujer: ¿Compras la cena todas las noches?',
        'Hombre: Sí, nunca cocino.',
        'Mujer: ¡Guau! Eso es caro.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-3-Do-you-cook.mp3'
    },
    {
      title: 'Conversación 4',
      english: [
        'Man: Do you live downtown?',
        'Woman: Yes, I live near the train station.',
        'Man: Do you take the train to work?',
        'Woman: Yes, most days. And you?',
        'Man: I live far away, so I drive to work.',
        'Woman: Do you have a nice car?',
        'Man: No, my car is old, but I like it.'
      ],
      spanish: [
        'Hombre: ¿Vives en el centro?',
        'Mujer: Sí, vivo cerca de la estación de tren.',
        'Hombre: ¿Vas en tren al trabajo?',
        'Mujer: Sí, la mayoría de los días. ¿Y tú?',
        'Hombre: Vivo lejos, así que conduzco al trabajo.',
        'Mujer: ¿Tienes un coche bonito?',
        'Hombre: No, mi coche es viejo, pero me gusta.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-4-Do-you-live-downtown.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-05: Verbo "Do" en Preguntas de Sí/No</h1>
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

export default A1_05_VerboSiNoPreguntas;