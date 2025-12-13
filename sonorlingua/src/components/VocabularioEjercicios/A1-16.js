import React from 'react';
import '../../styles/vocabulario.css';

const A1_16 = () => {
  const conversations = [
    {
      title: 'A1-16-1-Prepositions',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-1-Prepositions.mp3'
    },
    {
      title: 'A1-16-2-Prepositions',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-2-Prepositions.mp3'
    },
    {
      title: 'A1-16-3-Prepositions',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-3-Prepositions.mp3'
    },
    {
      title: 'A1-16-4-Prepositions',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-4-Prepositions.mp3'
    },
    {
      title: 'A1-16-Prepositions',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-16/A1-16-Prepositions.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-16: Prepositions</h1>
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

export default A1_16;