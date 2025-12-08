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
      <h2>Conversacion 1 : </h2>
    </div>
  )
}

export default Introduccion
