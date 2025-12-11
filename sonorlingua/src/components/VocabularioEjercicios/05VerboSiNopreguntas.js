import React from 'react';
import '../../styles/vocabulario.css';

const A1_05_VerboSiNoPreguntas = () => {
  return (
    <div className="introduccion">
      <h2>Lección A1-05: Verbos (Sí/No Preguntas)</h2>
      <div className="audio-player-container">
        <p><strong>Introducción:</strong></p>
        <audio controls>
          <source src="/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-Verb-Yes-No-Questions.mp3" type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>

      <div className="audio-player-container">
        <p><strong>Conversación 1: Deportes</strong></p>
        <audio controls>
          <source src="/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-1-Verb-Yes-No-Questions-Sports.mp3" type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
        <div className="conversation-text">
          <p><b>A:</b> ¿Te gusta el fútbol?</p>
          <p><b>B:</b> Sí, me gusta mucho.</p>
          <p><b>A:</b> ¿Juegas a menudo?</p>
          <p><b>B:</b> No, no juego a menudo.</p>
        </div>
      </div>

      <div className="audio-player-container">
        <p><strong>Conversación 2: Mascotas</strong></p>
        <audio controls>
          <source src="/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-2-Verb-Yes-No-Questions-Pets.mp3" type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
        <div className="conversation-text">
          <p><b>A:</b> ¿Tienes un perro?</p>
          <p><b>B:</b> Sí, tengo un perro.</p>
          <p><b>A:</b> ¿Le gusta jugar?</p>
          <p><b>B:</b> Sí, le encanta jugar.</p>
        </div>
      </div>

      <div className="audio-player-container">
        <p><strong>Conversación 3: Cocina</strong></p>
        <audio controls>
          <source src="/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-3-Verb-Yes-No-Questions-Cooking.mp3" type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
        <div className="conversation-text">
          <p><b>A:</b> ¿Sabes cocinar?</p>
          <p><b>B:</b> Sí, sé cocinar un poco.</p>
          <p><b>A:</b> ¿Te gusta la comida picante?</p>
          <p><b>B:</b> No, no me gusta la comida picante.</p>
        </div>
      </div>

      <div className="audio-player-container">
        <p><strong>Conversación 4: Vivienda</strong></p>
        <audio controls>
          <source src="/Audio/SoundGrammar/A1-Audio/A1-05/A1-05-4-Verb-Yes-No-Questions-Housing.mp3" type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
        <div className="conversation-text">
          <p><b>A:</b> ¿Vives en una casa?</p>
          <p><b>B:</b> No, vivo en un apartamento.</p>
          <p><b>A:</b> ¿Es grande?</p>
          <p><b>B:</b> Sí, es bastante grande.</p>
        </div>
      </div>
    </div>
  );
};

export default A1_05_VerboSiNoPreguntas;