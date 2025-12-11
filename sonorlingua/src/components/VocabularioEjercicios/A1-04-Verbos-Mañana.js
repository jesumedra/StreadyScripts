<<<<<<< HEAD
import React, { useState, useEffect } from "react";

const A1_04_Verbos_Manana = ({ fileName, folder }) => {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    const defaultAudios = [
      "A1-04-1-Verbs-Morning.mp3",
      "A1-04-2-Verbs-Morning-House.mp3",
      "A1-04-3-Verbs-Lunch.mp3",
      "A1-04-4-Verbs-Weekend.mp3",
      "A1-04-Verbs.mp3",
    ];

    fetch(`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-04'}/`)
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
                src={`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-04'}/${audio}`}
                type="audio/mp3"
              />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ))}
      </div>
=======
import React from 'react';
import '../../styles/vocabulario.css';

const conversationData = [
  {
    id: 1,
    audioFile: 'A1-04-1-Verbs-Morning.mp3',
    title: 'Conversación 1: Mañana en Casa',
    transcript: (
      <p>
        <b>Hombre:</b> ¿Qué haces por la mañana?<br />
        <b>Mujer:</b> Me despierto. Me ducho. Me visto y desayuno.<br />
        <b>Hombre:</b> ¡Oh! ¿Cuándo te levantas?<br />
        <b>Mujer:</b> Me levanto a las 6.<br />
        <b>Hombre:</b> ¡Guau! Eso es pronto.<br />
        <b>Mujer:</b> ¡Lo sé! Aunque me gustan las mañanas.
      </p>
    ),
  },
  {
    id: 2,
    audioFile: 'A1-04-2-Verbs-Day.mp3',
    title: 'Conversación 2: Tareas en Casa',
    transcript: (
      <p>
        <b>Hombre:</b> ¿Qué haces durante el día?<br />
        <b>Mujer:</b> Bueno, yo voy al colegio. Doy clases a los estudiantes.<br />
        <b>Hombre:</b> ¡Uy! ¿Qué enseñas?<br />
        <b>Mujer:</b> Enseño matemáticas. ¿A qué te dedicas?<br />
        <b>Hombre:</b> Trabajo en una tienda de bicicletas.<br />
        <b>Mujer:</b> ¿De verdad? ¿Qué haces en la tienda?<br />
        <b>Hombre:</b> Reparo y vendo bicicletas.<br />
        <b>Mujer:</b> Suena divertido.
      </p>
    ),
  },
  {
    id: 3,
    audioFile: 'A1-04-3-Verbs-Lunch.mp3',
    title: 'Conversación 3: Almuerzo',
    transcript: (
      <p>
        <b>Hombre:</b> ¿Qué haces en la hora de comer?<br />
        <b>Mujer:</b> Como con mis amigos. ¿Y tú?<br />
        <b>Hombre:</b> Como en el parque.<br />
        <b>Mujer:</b> Qué bien.<br />
        <b>Hombre:</b> sí, me gusta leer en mi descanso para comer.<br />
        <b>Mujer:</b> Uy, ¿qué lees?<br />
        <b>Hombre:</b> Leo sobre historia.<br />
        <b>Mujer:</b> Interesante.
      </p>
    ),
  },
  {
    id: 4,
    audioFile: 'A1-04-4-Verbs-Weekend.mp3',
    title: 'Conversación 4: Fin de Semana',
    transcript: (
      <p>
        <b>Hombre:</b> ¿Qué haces el fin de semana?<br />
        <b>Mujer:</b> Practico deportes en el parque. ¿Y tú?<br />
        <b>Hombre:</b> Estudio en la biblioteca.<br />
        <b>Mujer:</b> ¡Ah, claro! Te encantan los libros.<br />
        <b>Hombre:</b> sí. Entonces, ¿qué deportes practicas?<br />
        <b>Mujer:</b> Juego al fútbol con mis amigos.<br />
        <b>Hombre:</b> Suena divertido.<br />
        <b>Mujer:</b> ¡Lo es!
      </p>
    ),
  },
];

const A1_04_Verbos_Manana = () => {
  return (
    <div className="introduccion">
      <h2>A1-04 Verbos de la Mañana</h2>
      <p>En esta lección, aprenderás los verbos más comunes para hablar de tu rutina diaria.</p>
      <div className="audio-container">
        <p>Escucha la introducción:</p>
        <audio controls src="/Audio/SoundGrammar/A1-Audio/A1-04/A1-04-Verbs.mp3" />
      </div>
      <h3>Conversaciones</h3>
      {conversationData.map((conversation) => (
        <div key={conversation.id} className="conversation-item" style={{ marginBottom: '2rem' }}>
          <h4>{conversation.title}</h4>
          <audio controls src={`/Audio/SoundGrammar/A1-Audio/A1-04/${conversation.audioFile}`} style={{ width: '100%' }} />
          <div className="transcript">
            {conversation.transcript}
          </div>
        </div>
      ))}
>>>>>>> 68b0992 (agrego A1-02, A1-03, A1-04)
    </div>
  );
};

<<<<<<< HEAD
export default A1_04_Verbos_Manana;
=======
export default A1_04_Verbos_Manana;
>>>>>>> 68b0992 (agrego A1-02, A1-03, A1-04)
