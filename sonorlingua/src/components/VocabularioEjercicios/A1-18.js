import React from 'react';
import '../../styles/vocabulario.css';

const A1_18 = () => {
  const conversations = [
    {
      title: 'A1-18-1-Nationalities-Language',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-1-Nationalities-Language.mp3'
    },
    {
      title: 'A1-18-2-Nationalities-Food',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-2-Nationalities-Food.mp3'
    },
    {
      title: 'A1-18-3-Nationalities',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-3-Nationalities.mp3'
    },
    {
      title: 'A1-18-4-Nationalities-Sport',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-4-Nationalities-Sport.mp3'
    },
    {
      title: 'A1-18-Nationalities',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-18/A1-18-Nationalities.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-18: Nationalities</h1>
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

export default A1_18;