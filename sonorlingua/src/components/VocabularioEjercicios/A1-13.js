import React from 'react';
import '../../styles/vocabulario.css';

const A1_13 = () => {
  const conversations = [
    {
      title: 'A1-13-1-Months-Seasons',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-1-Months-Seasons.mp3'
    },
    {
      title: 'A1-13-2-Months-Seasons',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-2-Months-Seasons.mp3'
    },
    {
      title: 'A1-13-3-Months-Birthday',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-3-Months-Birthday.mp3'
    },
    {
      title: 'A1-13-4-Months-Weather',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-4-Months-Weather.mp3'
    },
    {
      title: 'A1-13-Months',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-13/A1-13-Months.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-13: Months and Seasons</h1>
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

export default A1_13;