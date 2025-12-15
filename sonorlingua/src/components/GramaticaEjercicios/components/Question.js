import React from 'react';
import '../styles/Question.css'

export default function Question({ avatar, questionText }) {
  return (
    <div className="question">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="question-text">
        Select: <span className="question-highlight">"{questionText}"</span>
      </div>
    </div>
  );
}