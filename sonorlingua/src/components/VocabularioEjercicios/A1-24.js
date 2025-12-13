import React from 'react';
import '../../styles/vocabulario.css';

const A1_24 = () => {
  const conversations = [
    {
      title: 'A1-24-1-Articles-Pen',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-1-Articles-Pen.mp3'
    },
    {
      title: 'A1-24-2-Articles-Food',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-2-Articles-Food.mp3'
    },
    {
      title: 'A1-24-3-Articles-House',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-3-Articles-House.mp3'
    },
    {
      title: 'A1-24-4-Articles-Wedding',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-4-Articles-Wedding.mp3'
    },
    {
      title: 'A1-24-Articles',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-24/A1-24-Articles.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-24: Articles</h1>
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

export default A1_24;