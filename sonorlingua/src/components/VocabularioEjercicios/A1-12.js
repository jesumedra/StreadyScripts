import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    english: [
      'Man: I like your family photos. Who is this?',
      'Woman: That is my dad. He is a doctor.',
      'Man: Wow. He is very tall.',
      'Woman: Yes, he is.',
      'Man: Who is this? Is this your mom?',
      'Woman: Yes, that is my mom.',
      'Man: In this picture, they are so young.',
      'Woman: Yes, they are. They are both 25 years old in that picture.',
      'Man: How old are they now?',
      'Woman: They are both 60.',
      'Man: Wow! This is 35 years ago?',
      'Woman: Yes, it is! Time flies.'
    ],
    spanish: [
      'Hombre: Me gustan las fotos de tu familia. ¿Quién es este?',
      'Mujer: Ese es mi papá. Es médico.',
      'Hombre: Guau. Es muy alto.',
      'Mujer: Sí, lo es.',
      'Hombre: ¿Quién es esta? ¿Es esta tu mamá?',
      'Mujer: Sí, esa es mi mamá.',
      'Hombre: En esta foto, son muy jóvenes.',
      'Mujer: Sí, lo son. Ambos tienen 25 años en esa foto.',
      'Hombre: ¿Qué edad tienen ahora?',
      'Mujer: Ambos tienen 60.',
      'Hombre: ¡Guau! ¿Esto fue hace 35 años?',
      'Mujer: ¡Sí, lo es! El tiempo vuela.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-12/A1-12-1-Demonstrative-Pronouns-Parents.mp3'
  },
  {
    id: 2,
    title: 'Conversación 2',
    english: [
      'Man: Who are these people?',
      'Woman: That is my husband. In this picture, he is at work.',
      'Man: Is he a fireman?',
      'Woman: Yes, he is. And this is my daughter.',
      'Man: Who is the boy with your daughter? Is that your son?',
      'Woman: No, that is her friend. She is at school.',
      'Man: Wow, what a nice picture. How old is she?',
      'Woman: She is nine.',
      'Man: She is very cute.',
      'Woman: Yes, she is cute!'
    ],
    spanish: [
      'Hombre: ¿Quiénes son estas personas?',
      'Mujer: Ese es mi esposo. En esta foto, está en el trabajo.',
      'Hombre: ¿Es bombero?',
      'Mujer: Sí, lo es. Y esta es mi hija.',
      'Hombre: ¿Quién es el niño con tu hija? ¿Es ese tu hijo?',
      'Mujer: No, ese es su amigo. Ella está en la escuela.',
      'Hombre: Guau, qué bonita foto. ¿Qué edad tiene?',
      'Mujer: Tiene nueve.',
      'Hombre: Es muy linda.',
      'Mujer: ¡Sí, es linda!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-12/A1-12-2-Demonstrative-Pronouns-Spouse.mp3'
  },
  {
    id: 3,
    title: 'Conversación 3',
    english: [
      'Man: Who are the people in this picture?',
      'Woman: That is my older sister. She is a pilot.',
      'Man: Who is the man?',
      'Woman: That is her husband. He is a pilot too.',
      'Man: I see. What about this picture? Who is this?',
      'Woman: That is my younger brother. He is a football coach.',
      'Man: Who is the woman? Is that his wife?',
      'Woman: No, that is his girlfriend. She is a teacher.',
      'Man: Where are they?',
      'Woman: They are at work. That is their school. It is not far from here.',
      'Man: Wow. Nice couple!'
    ],
    spanish: [
      'Hombre: ¿Quiénes son las personas de esta foto?',
      'Mujer: Esa es mi hermana mayor. Es piloto.',
      'Hombre: ¿Quién es el hombre?',
      'Mujer: Ese es su marido. Él también es piloto.',
      'Hombre: Ya veo. ¿Y esta foto? ¿Quién es este?',
      'Mujer: Ese es mi hermano menor. Es entrenador de fútbol.',
      'Hombre: ¿Quién es la mujer? ¿Es esa su esposa?',
      'Mujer: No, esa es su novia. Ella es maestra.',
      'Hombre: ¿Dónde están?',
      'Mujer: Están en el trabajo. Esa es su escuela. No está lejos de aquí.',
      'Hombre: Guau. ¡Bonita pareja!'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-12/A1-12-3-Demonstrative-Pronouns-Siblings.mp3'
  },
  {
    id: 4,
    title: 'Conversación 4',
    english: [
      'Man: And who are these people?',
      'Woman: Those are my grandparents.',
      'Man: Who are the children?',
      'Woman: They are my cousins. That is my aunt\\\'s son, and my uncle\\\'s daughter.',
      'Man: Where are they?',
      'Woman: That is their farm. They have sheep, cows, and chickens.',
      'Man: Wow, those are big cows.',
      'Woman: Yes, the cows are very big.',
      'Man: What a nice place!',
      'Woman: Yeah, it\\\'s fun there! I go there often my daughter with.'
    ],
    spanish: [
      'Hombre: ¿Y quiénes son estas personas?',
      'Mujer: Esos son mis abuelos.',
      'Hombre: ¿Quiénes son los niños?',
      'Mujer: Son mis primos. Ese es el hijo de mi tía y la hija de mi tío.',
      'Hombre: ¿Dónde están?',
      'Mujer: Esa es su granja. Tienen ovejas, vacas y gallinas.',
      'Hombre: Guau, esas vacas son grandes.',
      'Mujer: Sí, las vacas son muy grandes.',
      'Hombre: ¡Qué lugar tan agradable!',
      'Mujer: ¡Sí, es divertido allí! Voy a menudo con mi hija.'
    ],
    audio: '/Audio/SoundGrammar/A1-Audio/A1-12/A1-12-4-Demonstrative-Pronouns-Grandparents.mp3'
  }
];

const A1_12 = () => {
  return (
    <div className="container-vocabulario">
      <div className='introduccion-header'>
          <h2 className='introduccion-title'>Pronombres Demostrativos</h2>
          <h4 className='introduccion-subtitle'>En esta lección, practicaremos el uso de pronombres demostrativos en conversaciones sobre la familia.</h4>
          <h4 className='introduccion-subtitle'>Aprenderás a identificar a las personas en las fotos y a describir relaciones familiares.</h4>
          <div className='audio-item'>
              <audio controls>
                <source
                  src={`/Audio/SoundGrammar/A1-Audio/A1-12/A1-12-Demonstrative-Pronouns.mp3`}
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

export default A1_12;