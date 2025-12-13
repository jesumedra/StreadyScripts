import React from 'react';
import '../../styles/vocabulario.css';

const A1_20 = () => {
  const conversations = [
    {
      title: 'A1-20-1-Adverbs-Frequency',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-1-Adverbs-Frequency.mp3'
    },
    {
      title: 'A1-20-2-Adverbs-Frequency',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-2-Adverbs-Frequency.mp3'
    },
    {
      title: 'A1-20-3-Adverbs-Frequency-Commute',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-3-Adverbs-Frequency-Commute.mp3'
    },
    {
      title: 'A1-20-4-Adverbs-Frequency-Movie',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-4-Adverbs-Frequency-Movie.mp3'
    },
    {
      title: 'A1-20-Adverbs-Frequency',
      english: ['English conversation placeholder.'],
      spanish: ['Placeholder de conversación en español.'],
      audio: '/Audio/SoundGrammar/A1-Audio/A1-20/A1-20-Adverbs-Frequency.mp3'
    }
  ];

  return (
    <div className="container">
      <h1>A1-20: Adverbs of Frequency</h1>
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

export default A1_20;