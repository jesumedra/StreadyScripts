import React from 'react';
import '../../styles/vocabulario.css';
const A1_17 = () => {
  const conversations = [
    {
      title: 'A1-17-1-Possessives-Jacket',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-1-Possessives-Jacket.mp3'
    },
    {
      title: 'A1-17-2-Possessives-Car',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-2-Possessives-Car.mp3'
    },
    {
      title: 'A1-17-3-Possessives-Meeting',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-3-Possessives-Meeting.mp3'
    },
    {
      title: 'A1-17-4-Possessives-Desk',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-4-Possessives-Desk.mp3'
    },
    {
      title: 'A1-17-Possessives',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-17/A1-17-Possessives.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-17: Possessives</h1>
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

export default A1_17;