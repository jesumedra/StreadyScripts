import React from 'react';
import '../../styles/vocabulario.css';

const A1_25 = () => {
  const conversations = [
    {
      title: 'A1-25-1-Any-Some-Paper',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-1-Any-Some-Paper.mp3'
    },
    {
      title: 'A1-25-2-Any-Some-Eggs',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-2-Any-Some-Eggs.mp3'
    },
    {
      title: 'A1-25-3-Any-Some-Coffee',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-3-Any-Some-Coffee.mp3'
    },
    {
      title: 'A1-25-4-Any-Some',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-4-Any-Some.mp3'
    },
    {
      title: 'A1-25-Any-Some',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-25/A1-25-Any-Some.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-25: Any/Some</h1>
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

export default A1_25;