// src/components/Confetti.js
import React, { useEffect } from 'react';
import '../styles/FeedbackEmoji.css';

export default function Confetti({ active }) {
  useEffect(() => {
    if (!active) return;

    const colors = ['#22d3ee', '#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animation = `floatUp ${1 + Math.random() * 2}s ease-out forwards`;
      confetti.style.animationDelay = `${Math.random() * 0.5}s`;
      
      document.querySelector('.confetti')?.appendChild(confetti);
      
      // Eliminar después de la animación
      setTimeout(() => confetti.remove(), 3000);
    }
    
    return () => {
      document.querySelectorAll('.confetti-piece').forEach(el => el.remove());
    };
  }, [active]);

  if (!active) return null;

  return <div className="confetti"></div>;
}