import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: Excuse me, is there a gym in the hotel?',
      'Woman: Yes, there’s one on the first floor.',
      'Man: Great! And is there a pool?',
      'Woman: Yes, there’s a pool on the roof.',
      'Man: Is there a changing room up there?',
      'Woman: No, there isn’t, but there’s a restroom.',
      'Man: OK, thanks.'
    ],
    spanish: [
      'Hombre: Disculpe, ¿hay un gimnasio en el hotel?',
      'Mujer: Sí, hay uno en el primer piso.',
      'Hombre: ¡Genial! ¿Y hay una piscina?',
      'Mujer: Sí, hay una piscina en la azotea.',
      'Hombre: ¿Hay un vestuario allí arriba?',
      'Mujer: No, no hay, pero hay un baño.',
      'Hombre: OK, gracias.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-21/A1-21-1-There-is-There-are.mp3'
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: So, what is there to do in your town?',
      'Woman: Well, there is a mall, a cinema, and there are a few parks.',
      'Man: Oh, parks, nice. I love nature. Which one do you recommend?',
      'Woman: I think Central City park is the best. There’s a huge garden there.',
      'Man: Is there parking nearby?',
      'Woman: Yeah, there’s a huge parking lot across the street.'
    ],
    spanish: [
      'Hombre: Entonces, ¿qué hay para hacer en tu ciudad?',
      'Mujer: Bueno, hay un centro comercial, un cine y hay algunos parques.',
      'Hombre: Oh, parques, genial. Amo la naturaleza. ¿Cuál me recomiendas?',
      'Mujer: Creo que el parque de Central City es el mejor. Hay un jardín enorme allí.',
      'Hombre: ¿Hay aparcamiento cerca?',
      'Mujer: Sí, hay un aparcamiento enorme al otro lado de la calle.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-21/A1-21-2-There-is-There-are.mp3'
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: What is there to eat?',
      'Woman: Ah, there is some pasta in the fridge.',
      'Man: Mm, I just had pasta for lunch. What else is there?',
      'Woman: Well, there is some stuff to make sandwiches.',
      'Man: That will do. Where is the bread?',
      'Woman: There’s some in the cupboard I think.'
    ],
    spanish: [
      'Hombre: ¿Qué hay para comer?',
      'Mujer: Ah, hay algo de pasta en la nevera.',
      'Hombre: Mm, acabo de comer pasta para el almuerzo. ¿Qué más hay?',
      'Mujer: Bueno, hay algunas cosas para hacer sándwiches.',
      'Hombre: Con eso será suficiente. ¿Dónde está el pan?',
      'Mujer: Creo que hay algo en el armario.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-21/A1-21-3-There-is-There-are.mp3'
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: Are there any exchange students at your school?',
      'Woman: Yes, there are a few.',
      'Man: Really. What countries are they from?',
      'Woman: Ah, let’s see. There is one student from Italy, and there are a few students from France.',
      'Man: Oh, cool. Is there anyone from Paris?',
      'Woman: No, they are all from Leon!'
    ],
    spanish: [
      'Hombre: ¿Hay estudiantes de intercambio en tu escuela?',
      'Mujer: Sí, hay algunos.',
      'Hombre: ¿En serio? ¿De qué países son?',
      'Mujer: Ah, veamos. Hay un estudiante de Italia y hay algunos estudiantes de Francia.',
      'Hombre: Oh, genial. ¿Hay alguien de París?',
      'Mujer: ¡No, todos son de Lyon!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-21/A1-21-4-There-is-There-are.mp3'
  }
];

const A1_21 = () => {
  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>There is / There are</h2>
        <h4 className='introduccion-subtitle'>En esta lección, aprenderás a usar "there is" y "there are" para hablar de la existencia de personas y cosas.</h4>
        <h4 className='introduccion-subtitle'>Practicarás conversaciones sobre qué hay en un lugar y qué opciones hay disponibles.</h4>
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

export default A1_21;