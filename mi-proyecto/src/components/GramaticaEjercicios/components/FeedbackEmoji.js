// src/components/FeedbackEmojiFullscreen.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/FeedbackEmoji.css';

export default function FeedbackEmojiFullscreen({ isCorrect, show }) {
  const [visible, setVisible] = useState(false);
  const [emojis, setEmojis] = useState([]);
  const containerRef = useRef(null);

  // Listas de emojis según el resultado
  const correctEmojis = ['🎉', '✨', '🌟', '🥳', '🎊', '✅', '🏆', '💯', '👍', '🔥', '💪', '😎', '👏', '🎯', '⭐', '💫', '🌈', '☀️', '🦄', '🚀'];
  const incorrectEmojis = ['😢', '💔', '😅', '🤔', '🙈', '😞', '😓', '😥', '😨', '😰', '❌', '⚠️', '🔁', '🔄', '⏳', '💡', '🤷‍♂️', '🤷‍♀️', '🙏', '🔍'];

  useEffect(() => {
    if (show) {
      setVisible(true);
      createEmojiStorm();
      
      // Ocultar después de 2 segundos
      const timer = setTimeout(() => {
        setVisible(false);
        setEmojis([]);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [show]);

  const createEmojiStorm = () => {
    const emojiList = isCorrect ? correctEmojis : incorrectEmojis;
    const count = isCorrect ? 50 : 50; // Más emojis para respuestas correctas
    const newEmojis = [];

    for (let i = 0; i < count; i++) {
      const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
      const size = 20 + Math.random() * 40; // Tamaño entre 20px y 60px
      const duration = 1 + Math.random() * 2; // Duración entre 1s y 3s
      const delay = Math.random() * 1; // Retardo entre 0s y 1s
      const rotate = Math.random() * 360; // Rotación inicial
      
      // Posición inicial (desde diferentes puntos)
      const startX = {isCorrect, incorrectEmojis} 
        ? Math.random() * 100 // Desde toda la pantalla para correcto
        : 50; // Desde el centro para incorrecto
      
      const startY = {isCorrect, incorrectEmojis} 
        ? Math.random() * 100 
        : 50;

      // Posición final
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;

      newEmojis.push({
        id: i,
        emoji,
        size,
        duration,
        delay,
        rotate,
        startX,
        startY,
        endX,
        endY,
        rotationSpeed: Math.random() * 360 - 180, // Giro aleatorio
        scale: 0.5 + Math.random() * 0.5
      });
    }

    setEmojis(newEmojis);
  };

  if (!visible) return null;

  return (
    <div 
      ref={containerRef}
      className={`feedback-fullscreen ${isCorrect ? 'correct' : 'incorrect'}`}
    >
      {/* Emojis animados */}
      {emojis.map((emojiObj) => (
        <div
          key={emojiObj.id}
          className="emoji-particle"
          style={{
            '--size': `${emojiObj.size}px`,
            '--duration': `${emojiObj.duration}s`,
            '--delay': `${emojiObj.delay}s`,
            '--startX': `${emojiObj.startX}%`,
            '--startY': `${emojiObj.startY}%`,
            '--endX': `${emojiObj.endX}%`,
            '--endY': `${emojiObj.endY}%`,
            '--rotate': `${emojiObj.rotate}deg`,
            '--rotationSpeed': `${emojiObj.rotationSpeed}deg`,
            '--scale': emojiObj.scale,
            left: `${emojiObj.startX}%`,
            top: `${emojiObj.startY}%`,
            fontSize: `${emojiObj.size}px`,
          }}
        >
          {emojiObj.emoji}
        </div>
      ))}

      {/* Mensaje central */}
      <div className="center-message">
        <div className="message-emoji">
          {isCorrect ? '🎯' : '💡'}
        </div>
        <div className="message-text">
          {isCorrect ? '¡FANTASTICO!' : '¡PRACTICA MÁS!'}
        </div>
        <div className="message-subtext">
          {isCorrect ? '¡Sigue así!' : '¡Tú puedes!'}
        </div>
      </div>

      {/* Efecto de brillo para respuestas correctas */}
      {isCorrect && (
        <div className="glow-effect"></div>
      )}
    </div>
    
  );
}