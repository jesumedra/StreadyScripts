<<<<<<< HEAD
import React, { useState, useEffect } from "react";

const A1_02_SE_SIN_PREGUNTAS = ({ fileName, folder }) => {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    const defaultAudios = [
      "A1-02-1-Be-Yes-No-Questions-Hot.mp3",
      "A1-02-2-Be-Yes-No-Questions-House.mp3",
      "A1-02-3-Be-Yes-No-Questions-Clothes.mp3",
      "A1-02-4-Be-Yes-No-Questions-Hungry.mp3",
      "A1-02-Be-Yes-No-Questions.mp3",
    ];

    fetch(`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-02'}/`)
      .then((r) => r.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const links = Array.from(doc.querySelectorAll("a"))
          .map((a) => a.href.split("/").pop())
          .filter((f) => f.endsWith(".mp3") || f.endsWith(".mp3/"));
        setAudios(links.length > 0 ? links : defaultAudios);
      })
      .catch(() => setAudios(defaultAudios));
  }, [folder]);

  return (
    <div className="introduccion">
      <div className="audio-list">
        {audios.map((audio, idx) => (
          <div key={idx} className="audio-item">
            <p className="audio-title">{audio.replace(".mp3", "")}</p>
            <audio controls>
              <source
                src={`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-02'}/${audio}`}
                type="audio/mp3"
              />
              Your browser does not support the audio tag.
            </audio>
=======
import React from 'react';
import '../../styles/Introduccion.css';

const introductionAudio = 'A1-02-Be-Yes-No-Questions.mp3';

const conversationData = [
  {
    id: 1,
    audioFile: 'A1-02-1-Be-Yes-No-Questions-Hot.mp3',
    title: 'Conversación 1',
    transcript: (
      <>
        <p><strong>Hombre:</strong> ¿Tienes calor?</p>
        <p><strong>Mujer:</strong> Sí, tengo mucho calor.</p>
        <p><strong>Hombre:</strong> ¿Está encendido el aire acondicionado?</p>
        <p><strong>Mujer:</strong> No, está apagado.</p>
        <p><strong>Hombre:</strong> ¿Puedo encenderlo?</p>
        <p><strong>Mujer:</strong> Sí, por favor. ¿Y puedes encender la radio también?</p>
        <p><strong>Hombre:</strong> Por supuesto. ¿Está bien la música jazz?</p>
        <p><strong>Mujer:</strong> Sí, me encanta la música jazz.</p>
      </>
    ),
  },
  {
    id: 2,
    audioFile: 'A1-02-2-Be-Yes-No-Questions-House.mp3',
    title: 'Conversación 2',
    transcript: (
      <>
        <p><strong>Hombre:</strong> ¿Tu casa es grande?</p>
        <p><strong>Mujer:</strong> Sí, es bastante grande.</p>
        <p><strong>Hombre:</strong> ¿Es nuevo?</p>
        <p><strong>Mujer:</strong> No, es muy antigua.</p>
        <p><strong>Hombre:</strong> ¿Está bien?</p>
        <p><strong>Mujer:</strong> No realmente. Hace frío en invierno.</p>
        <p><strong>Hombre:</strong> ¡Oh, no! Eso no es bueno.</p>
      </>
    ),
  },
  {
    id: 3,
    audioFile: 'A1-02-3-Be-Yes-No-Questions-Clothes.mp3',
    title: 'Conversación 3',
    transcript: (
      <>
        <p><strong>Hombre:</strong> Me gustan tus zapatos. ¿Son nuevos?</p>
        <p><strong>Mujer:</strong> Sí, lo son.</p>
        <p><strong>Hombre:</strong> ¿Son caros?</p>
        <p><strong>Mujer:</strong> No, son muy baratas.</p>
        <p><strong>Hombre:</strong> ¿Son cómodos?</p>
        <p><strong>Mujer:</strong> Sí, son muy cómodos.</p>
        <p><strong>Hombre:</strong> ¿Son de la zapatería de descuento?</p>
        <p><strong>Mujer:</strong> ¡Sí! ¿Cómo lo has adivinado?</p>
      </>
    ),
  },
  {
    id: 4,
    audioFile: 'A1-02-4-Be-Yes-No-Questions-Hungry.mp3',
    title: 'Conversación 4',
    transcript: (
      <>
        <p><strong>Hombre:</strong> ¿Tienes hambre?</p>
        <p><strong>Mujer:</strong> Sí, tengo mucha hambre.</p>
        <p><strong>Hombre:</strong> ¿Quieres pizza?</p>
        <p><strong>Mujer:</strong> Sí, vamos a por algo.</p>
        <p><strong>Hombre:</strong> ¿La pizzería sigue abierta?</p>
        <p><strong>Mujer:</strong> Sí, está abierto hasta las 10.</p>
        <p><strong>Hombre:</strong> ¿Qué hora es ahora?</p>
        <p><strong>Mujer:</strong> Ocho. Está abierto dos horas más.</p>
        <p><strong>Hombre:</strong> ¡Genial! Me muero de hambre.</p>
      </>
    ),
  },
];

const A1_02_SeSinPreguntas = () => {
  return (
    <div className='introduccion'>
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Preguntas de Sí/No con el Verbo "To Be"</h2>
        <h4 className='introduccion-subtitle'>En este ejercicio aprenderemos a usar el verbo "To Be" para formar preguntas de sí o no.</h4>
        <h4 className='introduccion-subtitle'>Estas preguntas son esenciales para confirmar información.</h4>
        <div className='audio-item'>
            <p className='audio-title'>{introductionAudio.replace('.mp3', '').replace(/-/g, ' ')}</p>
            <audio controls>
              <source
                src={`/Audio/SoundGrammar/A1-Audio/A1-02/${introductionAudio}`}
                type='audio/mp3'
              />
              Your browser does not support the audio tag.
            </audio>
        </div>
      </div>

      <div className='conversations-container'>
        {conversationData.map((convo) => (
          <div key={convo.id} className='conversation-block'>
            <h2>{convo.title}</h2>
            <div className='audio-item'>
              <p className='audio-title'>{convo.audioFile.replace('.mp3', '').replace(/-/g, ' ')}</p>
              <audio controls>
                <source
                  src={`/Audio/SoundGrammar/A1-Audio/A1-02/${convo.audioFile}`}
                  type='audio/mp3'
                />
                Your browser does not support the audio tag.
              </audio>
            </div>
            <div className='transcript'>
              {convo.transcript}
            </div>
>>>>>>> 68b0992 (agrego A1-02, A1-03, A1-04)
          </div>
        ))}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default A1_02_SE_SIN_PREGUNTAS;
=======
export default A1_02_SeSinPreguntas;
>>>>>>> 68b0992 (agrego A1-02, A1-03, A1-04)
