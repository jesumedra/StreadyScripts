import React from 'react';
import '../../styles/vocabulario.css';

const A1_19 = () => {
  const conversations = [
    {
      title: 'A1-19-1-Can-Abilities-Sports',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-1-Can-Abilities-Sports.mp3'
    },
    {
      title: 'A1-19-2-Can-Abilities',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-2-Can-Abilities.mp3'
    },
    {
      title: 'A1-19-3-Can-Abilities',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-3-Can-Abilities.mp3'
    },
    {
      title: 'A1-19-4-Can-Abilities',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-4-Can-Abilities.mp3'
    },
    {
      title: 'A1-19-Can-Abilities',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-19/A1-19-Can-Abilities.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-19: Can - Abilities</h1>
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

export default A1_19;