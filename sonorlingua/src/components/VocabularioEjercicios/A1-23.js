import React from 'react';
import '../../styles/vocabulario.css';

const A1_23 = () => {
  const conversations = [
    {
      title: 'A1-23-1-Past-Tense-Yesterday',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-1-Past-Tense-Yesterday.mp3'
    },
    {
      title: 'A1-23-2-Past-Tense-Weekend',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-2-Past-Tense-Weekend.mp3'
    },
    {
      title: 'A1-23-3-Past-Tense-Day',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-3-Past-Tense-Day.mp3'
    },
    {
      title: 'A1-23-4-Past-Tense-Tonight',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-4-Past-Tense-Tonight.mp3'
    },
    {
      title: 'A1-23-Past-Tense',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-23/A1-23-Past-Tense.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-23: Past Tense</h1>
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

export default A1_23;