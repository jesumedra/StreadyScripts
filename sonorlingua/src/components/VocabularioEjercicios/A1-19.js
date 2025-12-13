import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Woman: What sports can you play?',
      'Man: I can play baseball a little and tennis pretty well.',
      'Woman: Can you play soccer?',
      'Man: No, I am terrible at soccer. How about you?',
      'Woman: Yes. I can play soccer. I like it a lot, but I am not great.',
      'Man: I bet you are pretty good.',
      'Woman: No, really. I am not that good.'
    ],
    spanish: [
      'Mujer: ¿Qué deportes puedes practicar?',
      'Hombre: Puedo jugar un poco al béisbol y al tenis bastante bien.',
      'Mujer: ¿Sabes jugar al fútbol?',
      'Hombre: No, soy terrible en el fútbol. ¿Y tú?',
      'Mujer: sí. Sé jugar al fútbol. Me gusta mucho, pero no soy genial.',
      'Hombre: Apuesto a que eres bastante bueno.',
      'Mujer: No, en serio. No soy tan bueno.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-1-Can-Abilities-Sports.mp3'
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: What languages can you speak?',
      'Woman: I can speak Japanese and French.',
      'Man: Wow! Can you write in Japanese?',
      'Woman: I can write a little, but not so much.',
      'Man: Yeah. I hear Kanji is really difficult.',
      'Woman: Yes. It is really difficult. How about you? What languages can you speak?',
      'Man: I speak some Spanish, but not very well. I can also speak Thai.',
      'Woman: Wow! Can you write in Thai?',
      'Man: No, but I can read it. Writing is really difficult.',
      'Woman: Still, that is pretty cool!.'
    ],
    spanish: [
      'Hombre: ¿Qué idiomas puedes hablar?',
      'Mujer: Puedo hablar japonés y francés.',
      'Hombre: ¡Guau! ¿Se puede escribir en japonés?',
      'Mujer: Puedo escribir un poco, pero no tanto.',
      'Hombre: sí. He oído que los kanji son realmente difíciles.',
      'Mujer: sí. Es really difficult. ¿Y tú? ¿Qué idiomas puedes hablar?',
      'Hombre: Hablo algo de español, pero no muy bien. También sé hablar tailandés.',
      'Mujer: ¡Guau! ¿Sabes escribir en tailandés?',
      'Hombre: No, pero puedo leerlo. Escribir es realmente difícil.',
      'Mujer: ¡Aun así, eso está bastante bien!.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-2-Can-Abilities.mp3'
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: So, can you cook well?',
      'Woman: Not really. But I can cook basic things.',
      'Man: Oh yeah? What can you cook?',
      'Woman: I can make pasta dishes and some French cooking. How about you?',
      'Man: I can\\\'t cook at all. I can only make an omelet.',
      'Woman: That\\\'s not bad. Can you make pancakes?',
      'Man: No, I can\\\'t even do that.'
    ],
    spanish: [
      'Hombre: Entonces, ¿cocinas bien?',
      'Mujer: No realmente. Pero sé cocinar cosas básicas.',
      'Hombre: ¿sí? ¿Qué sabes cocinar?',
      'Mujer: Puedo preparar platos de pasta y algo de cocina francesa. ¿Y tú?',
      'Hombre: No sé cocinar nada. Solo sé hacer una tortilla.',
      'Mujer: No está mal. ¿Se pueden hacer tortitas?',
      'Hombre: No, ni siquiera puedo hacer eso.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-3-Can-Abilities.mp3'
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: What are you doing tonight?',
      'Woman: I am going to do karaoke with friends. Do you want to come?',
      'Man: No, thanks. I can\\\'t sing at all.',
      'Woman: Oh, you should come. Singing is fun!',
      'Man: Maybe for you. I hear you can sing really well.',
      'Woman: I can sing a little, but I am not great.',
      'Man: That is not what I heard.'
    ],
    spanish: [
      'Hombre: ¿Qué haces esta noche?',
      'Mujer: Voy a hacer karaoke con amigos. ¿Quieres venir?',
      'Hombre: No, gracias. No sé cantar en absoluto.',
      'Mujer: Oh, deberías venir. ¡Cantar es divertido!',
      'Hombre: Quizá para ti. He oído que cantas muy bien.',
      'Mujer: Puedo cantar un poco, pero no soy genial.',
      'Hombre: Eso no es lo que he oído.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-4-Can-Abilities.mp3'
  }
];

const A1_19 = () => {
  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Can - Habilidades</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar "can" y "can't" para hablar de tus habilidades.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre deportes, idiomas, cocina y otras actividades.</h4>
        <div className='audio-item'>
          <audio controls>
            <source
              src={`/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-Can-Abilities.mp3`}
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

export default A1_19;