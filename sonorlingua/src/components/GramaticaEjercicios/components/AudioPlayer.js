// src/components/AudioPlayer.js - CON AUDIOS LOCALES
import React, { useRef, useEffect } from 'react';

// Importa los archivos de audio
import correctSound from '../audio/correcto.mp3';  // Ajusta la ruta según tu estructura
import incorrectSound from '../audio/among-us.mp3';

export default function AudioPlayer({ playCorrect, playIncorrect }) {
  const correctAudioRef = useRef(null);
  const incorrectAudioRef = useRef(null);

  // Reproducir sonido correcto
  useEffect(() => {
    if (playCorrect && correctAudioRef.current) {
      console.log('Reproduciendo sonido correcto');
      correctAudioRef.current.currentTime = 0;
      correctAudioRef.current.volume = 0.5; // Volumen al 50%
      correctAudioRef.current.play().catch(e => 
        console.log('Error reproduciendo sonido correcto:', e)
      );
    }
  }, [playCorrect]);

  // Reproducir sonido incorrecto
  useEffect(() => {
    if (playIncorrect && incorrectAudioRef.current) {
      console.log('Reproduciendo sonido incorrecto');
      incorrectAudioRef.current.currentTime = 0;
      incorrectAudioRef.current.volume = 0.4; // Volumen más bajo para error
      incorrectAudioRef.current.play().catch(e => 
        console.log('Error reproduciendo sonido incorrecto:', e)
      );
    }
  }, [playIncorrect]);

  return (
    <>
      {/* Audio para respuesta correcta */}
      <audio ref={correctAudioRef} preload="auto" style={{ display: 'none' }}>
        <source src={correctSound} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      
      {/* Audio para respuesta incorrecta */}
      <audio ref={incorrectAudioRef} preload="auto" style={{ display: 'none' }}>
        <source src={incorrectSound} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </>
  );
}