import React from 'react';
import '../../styles/vocabulario.css';
const A1_11 = () => {
  const conversations = [
    {
      title: 'A1-11-1-Demonstratives-Book',
      english: [
        'A: What is this?',
        'B: This is a book.',
        'A: What is that?',
        'B: That is a pencil.'
      ],
      spanish: [
        'A: ¿Qué es esto?',
        'B: Esto es un libro.',
        'A: ¿Qué es eso?',
        'B: Eso es un lápiz.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-1-Demonstratives-Book.mp3'
    },
    {
      title: 'A1-11-2-Demonstratives-Jeans',
      english: [
        'A: What are these?',
        'B: These are my jeans.',
        'A: What are those?',
        'B: Those are your shoes.'
      ],
      spanish: [
        'A: ¿Qué son estos?',
        'B: Estos son mis jeans.',
        'A: ¿Qué son esos?',
        'B: Esos son tus zapatos.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-2-Demonstratives-Jeans.mp3'
    },
    {
      title: 'A1-11-3-Demonstratives-CoffeeMaker',
      english: [
        'A: Is this your coffee maker?',
        'B: No, this is not my coffee maker. That is my coffee maker.',
        'A: Is that your cup?',
        'B: No, that is not my cup. This is my cup.'
      ],
      spanish: [
        'A: ¿Es esta tu cafetera?',
        'B: No, esta no es mi cafetera. Aquella es mi cafetera.',
        'A: ¿Es esa tu taza?',
        'B: No, esa no es mi taza. Esta es mi taza.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-3-Demonstratives-CoffeeMaker.mp3'
    },
    {
      title: 'A1-11-4-Demonstratives-Table',
      english: [
        'A: Are these your books?',
        'B: No, these are not my books. Those are my books.',
        'A: Are those your keys?',
        'B: No, those are not my keys. These are my keys.'
      ],
      spanish: [
        'A: ¿Son estos tus libros?',
        'B: No, estos no son mis libros. Aquellos son mis libros.',
        'A: ¿Son aquellas tus llaves?',
        'B: No, aquellas no son mis llaves. Estas son mis llaves.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-4-Demonstratives-Table.mp3'
    },
    {
      title: 'A1-11-Demonstratives',
      english: [
        'This is my book.',
        'That is your car.',
        'These are our friends.',
        'Those are their houses.'
      ],
      spanish: [
        'Este es mi libro.',
        'Ese es tu coche.',
        'Estos son nuestros amigos.',
        'Esas son sus casas.'
      ],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-11/A1-11-Demonstratives.mp3'
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>A1-11: Demonstratives</h1>
          <p>Listen to the conversations and practice the demonstrative pronouns.</p>
          <hr />
        </div>
      </div>
      {conversations.map((conv, index) => (
        <div key={index} className="row conversation-row">
          <div className="col-md-12">
            <h2>{conv.title}</h2>
            <div className="audio-column">
                <audio controls>
                <source src={conv.audio} type="audio/mp3" />
                Your browser does not support the audio element.
                </audio>
            </div>
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
        </div>
      ))}
    </div>
  );
};

export default A1_11;