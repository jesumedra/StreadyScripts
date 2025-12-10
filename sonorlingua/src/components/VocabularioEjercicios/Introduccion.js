/*
 * Componente `Introduccion`: lista y reproductor de audios de la lección A1-01.
 * - Intenta leer los MP3 desde `/Audio/SoundGrammar/A1-Audio/A1-01/`
 * - Si no encuentra archivos, usa `defaultAudios` como respaldo.
 */
import React, { useState, useEffect } from 'react'

const Introduccion = ({ fileName }) => {
  const [audios, setAudios] = useState([])

  useEffect(() => {
    const defaultAudios = [
      'A1-01-Be-Verbs-Introduction.mp3',
      'A1-01-1-Be-Verbs-First-Day.mp3',
      'A1-01-2-Be-Verbs-Teachers.mp3',
      'A1-01-3-Be-Verbs-Classes.mp3',
      'A1-01-4-Be-Verbs-Lab.mp3'
    ]

    fetch('/Audio/SoundGrammar/A1-Audio/A1-01/')
      .then(r => r.text())
      .then(html => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        const links = Array.from(doc.querySelectorAll('a'))
          .map(a => a.href.split('/').pop())
          .filter(f => f.endsWith('.mp3') || f.endsWith('.mp3/'))
        setAudios(links.length > 0 ? links : defaultAudios)
      })
      .catch(() => setAudios(defaultAudios))
  }, [])

  return (
    <div className='introduccion'>
      <h2>Bienvenido a tu primera leccion aprendiendo a hablar ingles</h2>
      <h4>En este ejercicio aprenderemos el uso de verbo Be para formar oraciones</h4>
      <h4>El verbo Be se utiliza para formar oraciones que preguntan si algo es cierto o no</h4>

      <div className='audio-list'>
        <h4>Audios disponibles (A1-01):</h4>
        {audios.map((audio, idx) => (
          <div key={idx} className='audio-item'>
            <p className='audio-title'>{audio.replace('.mp3', '')}</p>
            <audio controls>
              <source src={`/Audio/SoundGrammar/A1-Audio/A1-01/${audio}`} type='audio/mp3' />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ))}
      </div>
      <div className='textosejerc'>
        <h2>Conversacion 1 :Hombre: ¡Hola! ¿Eres un estudiante nuevo?
          Mujer: Sí, lo soy. Hoy es mi primer día.
          Hombre: Bueno, bienvenido. Me llamo Tony.
          Mujer: Hola, Tony. Soy Beth.
          Hombre: ¿Eres nuevo en la ciudad?
          Mujer: Sí, soy de Nueva York.
          Hombre: ¡Guau! ¡La Gran Ciudad!
          Mujer: ¿Eres de por aquí?
          Hombre: Sí, lo estoy.
          Mujer: Eso es genial. Bueno, encantado de conocerte.
          Hombre: Encantado de conocerte también. </h2>
        <h2>Conversacion 2 :
          Hombre: Hola Beth, ¿qué tal tu primer día?
          Mujer: Está realmente bien. ¡Este colegio es genial!
          Hombre: ¿Qué tal tus clases?
          Mujer: ¡Son divertidos! Mis profesores son muy amables.
          Hombre: ¿Quiénes son tus profesores?
          Mujer: Mi profesor de inglés es el señor Wong.
          Hombre: Oh, es muy majo.
          Mujer: Sí, lo es. Mi profesora de español es la señora García.
          Hombre: Oh, también es muy maja.
          Mujer: ¡Sí, su clase es muy divertida!
        </h2>
        <h2>Conversacion 3 :
          Hombre: ¿Cuál es tu clase favorita?
          Mujer: Española. Me encanta. Aunque mi español no es muy bueno. Solo soy un principiante.
          Hombre: Bueno, el español es mi lengua materna. Me llamo Tony, diminutivo de Antonio.
          Mujer: ¡De verdad! Eso es genial.
          Hombre: sí, mi padre es de México y mi madre es de Costa Rica.
          Mujer: ¡Guau! Tienes mucha suerte.
          Hombre: Sí, el español me resulta fácil, así que puedo ayudarte si quieres.
          Mujer: Me gustaría. ¡Gracias!
        </h2>
        <h2>
          Conversacion 4 :
          Mujer: Tony, ¿dónde está el laboratorio de informática?
          Hombre: Está justo al final del pasillo.
          Mujer: Mi clase de español es mañana.
          Hombre: ¿Cuándo es la clase?
          Mujer: Es a las 6, después del colegio.
          Hombre: ¿Por qué la clase no es online?
          Mujer: Sí, pero todavía soy nueva en la ciudad, así que aún no tengo internet en casa.
          Hombre: Ah, ya veo. Bueno, suerte con la clase.
          Mujer: Gracias. Estoy emocionado por ello. ¡Creo que las clases online son divertidas!
          Hombre: Yo también lo creo.
        </h2>
      </div>
    </div>
  )
}

export default Introduccion
