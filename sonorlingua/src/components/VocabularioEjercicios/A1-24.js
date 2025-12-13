import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: What did you do yesterday?',
      'Woman: Nothing much. I just stayed at home and cleaned the house. And you? What did you do?',
      'Man: I drove to the mountains and went hiking.',
      'Woman: That sounds fun!',
      'Man: It was. The weather was perfect, and we saw lots of animals.',
      'Woman: Oh? What did you see?',
      'Man: We saw some deer, an eagle, and a bear!',
      'Woman: Wow! How exciting! Did you take any pictures?',
      'Man: Yes, I took a lot of photos. I\\\'ll post them online soon.',
      'Woman: Please do!'
    ],
    spanish: [
      'Hombre: ¿Qué hiciste ayer?',
      'Mujer: No mucho. Me quedé en casa y limpié la casa. ¿Y tú? ¿Qué hiciste?',
      'Hombre: Conduje a las montañas y fui de excursión.',
      'Mujer: ¡Eso suena divertido!',
      'Hombre: Lo fue. El tiempo era perfecto y vimos muchos animales.',
      'Mujer: ¿Ah, sí? ¿Qué viste?',
      'Hombre: ¡Vimos algunos ciervos, un águila y un oso!',
      'Mujer: ¡Guau! ¡Qué emocionante! ¿Tomaste alguna foto?',
      'Hombre: Sí, tomé muchas fotos. Las publicaré en línea pronto.',
      'Mujer: ¡Por favor, hazlo!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-1-Simple-Past.mp3'
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Did you do anything this weekend?',
      'Woman: I did. I took the train to the city and met my friend.',
      'Man: Oh, yeah! What did you do?',
      'Woman: We had lunch and did some shopping.',
      'Man: Did you buy anything?',
      'Woman: No, I didn’t. I just went window shopping. I need to save money.',
      'Man: Me, too!'
    ],
    spanish: [
      'Hombre: ¿Hiciste algo este fin de semana?',
      'Mujer: Sí. Tomé el tren a la ciudad y me encontré con mi amigo.',
      'Hombre: ¡Ah, sí! ¿Qué hicieron?',
      'Mujer: Almorzamos e hicimos algunas compras.',
      'Hombre: ¿Compraste algo?',
      'Mujer: No, no lo hice. Solo fui a mirar escaparates. Necesito ahorrar dinero.',
      'Hombre: ¡Yo también!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-2-Simple-Past.mp3'
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: How was your day?',
      'Woman: Difficult. I was so busy.',
      'Man: How so? What happened at work?',
      'Woman: A tour bus came in the restaurant for lunch. They ordered a lot of food. We only had two waiters, so we were very busy.',
      'Man: Did you get a big tip?',
      'Woman: We did. They left us $50!'
    ],
    spanish: [
      'Hombre: ¿Qué tal tu día?',
      'Mujer: Difícil. Estuve muy ocupada.',
      'Hombre: ¿Por qué? ¿Qué pasó en el trabajo?',
      'Mujer: Un autobús turístico entró en el restaurante para almorzar. Pidieron mucha comida. Solo teníamos dos camareros, así que estuvimos muy ocupados.',
      'Hombre: ¿Recibiste una gran propina?',
      'Mujer: Sí. ¡Nos dejaron 50 dólares!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-3-Simple-Past.mp3'
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Welcome home! What did you do tonight?',
      'Woman: I went to the movies with my friends.',
      'Man: Fun! What did you see?',
      'Woman: We saw the new James Bond movie.',
      'Man: How was it? I heard it was good.',
      'Woman: It was really good. I liked it a lot.',
      'Man: Did you do anything afterwards?',
      'Woman: Yes, we went to a cafe after the movie and talked a bit.',
      'Man: Did you eat? We ordered pizza.',
      'Woman: Yes, I had dinner at the cafe.',
      'Man: Well, if you\\\'re still hungry, there\\\'s still some pizza in the kitchen.',
      'Woman: Thanks, but I\\\'m full. I ate a big sandwich.'
    ],
    spanish: [
      'Hombre: ¡Bienvenida a casa! ¿Qué hiciste esta noche?',
      'Mujer: Fui al cine con mis amigos.',
      'Hombre: ¡Divertido! ¿Qué vieron?',
      'Mujer: Vimos la nueva película de James Bond.',
      'Hombre: ¿Qué tal estuvo? Escuché que era buena.',
      'Mujer: Estuvo muy buena. Me gustó mucho.',
      'Hombre: ¿Hicieron algo después?',
      'Mujer: Sí, fuimos a un café después de la película y hablamos un poco.',
      'Hombre: ¿Comiste? Pedimos pizza.',
      'Mujer: Sí, cené en el café.',
      'Hombre: Bueno, si todavía tienes hambre, todavía hay pizza en la cocina.',
      'Mujer: Gracias, pero estoy llena. Comí un sándwich grande.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-4-Simple-Past.mp3'
  }
];

const A1_24 = () => {
  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Pasado Simple</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar el pasado simple para hablar de acciones que ocurrieron en un momento específico del pasado.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre actividades pasadas, como lo que hiciste ayer, el fin de semana o en un día ocupado.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-Simple-Past.mp3`}
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

export default A1_24;