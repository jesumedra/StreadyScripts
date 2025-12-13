import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
  {
    id: 1,
    title: 'Conversación 1',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-03/A1-03-1-Likes-Food.mp3',
    english: [
        "Man: So, what foods do you like?",
        "Woman: I like ice cream, pizza, and apples.",
        "Man: Oh, I like those foods too.",
        "Woman: What foods do you like?",
        "Man: I like fish, vegetables, and bananas.",
        "Woman: Together?",
        "Man: No, not together!"
    ],
    spanish: [
        "Hombre: Entonces, ¿qué alimentos te gustan?",
        "Mujer: Me gusta el helado, la pizza y las manzanas.",
        "Hombre: Oh, a mí también me gustan esas comidas.",
        "Mujer: ¿Qué alimentos te gustan?",
        "Hombre: Me gusta el pescado, las verduras y los plátanos.",
        "Mujer: ¿Juntos?",
        "Hombre: ¡No, no juntos!"
    ]
  },
  {
    id: 2,
    title: 'Conversación 2',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-03/A1-03-2-Likes-Drinks.mp3',
    english: [
        "Man: What drinks do you like?",
        "Woman: I like tea and I like juice.",
        "Man: Ooh, hot tea or cold tea?",
        "Woman: Both. And you?",
        "Man: I like coffee and hot chocolate.",
        "Woman: Ooh, I like both too!"
    ],
    spanish: [
        "Hombre: ¿Qué bebidas te gustan?",
        "Mujer: Me gusta el té y me gusta el zumo.",
        "Hombre: Uy, ¿té caliente o té frío?",
        "Mujer: Ambos. ¿Y tú?",
        "Hombre: Me gusta el café y el chocolate caliente.",
        "Mujer: ¡Uy, a mí también me gustan ambos!"
    ]
  },
  {
    id: 3,
    title: 'Conversación 3',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-03/A1-03-3-Likes-Desserts.mp3',
    english: [
        "Man: What desserts do you like?",
        "Woman: I really like ice cream.",
        "Man: Oh! What flavor do you like?",
        "Woman: Hmm, I like strawberry. I also like vanilla.",
        "Man: Great! I like cake and I like pie.",
        "Woman: What kind of pie?",
        "Man: I really like apple pie with ice cream.",
        "Woman: How delicious!"
    ],
    spanish: [
        "Hombre: ¿Qué postres te gustan?",
        "Mujer: Me gusta mucho el helado.",
        "Hombre: ¡Oh! ¿Qué sabor te gusta?",
        "Mujer: Hmm, me gusta la fresa. A mí también me gusta la vainilla.",
        "Hombre: ¡Genial! Me gusta la tarta y me gusta la tarta.",
        "Mujer: ¿Qué tipo de tarta?",
        "Hombre: Me gusta mucho la tarta de manzana con helado.",
        "Mujer: ¡Qué rico!"
    ]
  },
  {
    id: 4,
    title: 'Conversación 4',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-03/A1-03-4-Likes-Snacks.mp3',
    english: [
        "Man: What snacks do you like?",
        "Woman: I like to eat fruit.",
        "Man: Oh yeah? And what fruits do you like?",
        "Woman: I like apples and oranges. And you?",
        "Man: I like strawberries and watermelon.",
        "Woman: Do you like to eat cookies?",
        "Man: Of course! I love chocolate chip cookies.",
        "Woman: Me too!"
    ],
    spanish: [
        "Hombre: ¿Qué tentempiés te gustan?",
        "Mujer: Me gusta comer fruta.",
        "Hombre: ¿Ah, sí? ¿Y qué frutas te gustan?",
        "Mujer: Me gustan las manzanas y las naranjas. ¿Y tú?",
        "Hombre: Me gustan las fresas y la sandía.",
        "Mujer: ¿Te gusta comer galletas?",
        "Hombre: ¡Por supuesto! Me encantan las galletas con chispas de chocolate.",
        "Mujer: ¡Yo también!"
    ]
  },
];

const A1_03_MeGustaFrutas = () => {
  return (
    <div className='container-vocabulario'>
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Expresando Gustos con "Like"</h2>
        <h4 className='introduccion-subtitle'>En este ejercicio, aprenderemos a usar el verbo "like" para hablar de las cosas que nos gustan.</h4>
        <h4 className='introduccion-subtitle'>Practicaremos con vocabulario de comidas, bebidas, postres y snacks.</h4>
        <div className='audio-item'>
            <audio controls>
              <source
                src={`/Audio/SoundGrammar/A1-Audio/A1-03/A1-03-Likes-Fruits.mp3`}
                type='audio/mp3'
              />
              Your browser does not support the audio tag.
            </audio>
        </div>
      </div>

      <div className='conversations-container'>
        {conversations.map((conv) => (
          <div key={conv.id} className='conversation-container'>
            <h2>{conv.title}</h2>
            <div className='audio-column'>
                <audio controls>
                    <source src={conv.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="text-column">
                <h3>English</h3>
                {conv.english.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="text-column">
                <h3>Spanish</h3>
                {conv.spanish.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default A1_03_MeGustaFrutas;