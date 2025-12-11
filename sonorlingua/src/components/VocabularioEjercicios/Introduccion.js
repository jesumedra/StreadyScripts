/*
 * Componente `Introduccion`: lista y reproductor de audios de la lección A1-01.
 * - Intenta leer los MP3 desde `/Audio/SoundGrammar/A1-Audio/A1-01/`
 * - Si no encuentra archivos, usa `defaultAudios` como respaldo.
 */
import React, { useState, useEffect } from 'react'

const Introduccion = ({ fileName, folder }) => {
  const [audios, setAudios] = useState([])

  // Determina qué carpeta cargar: preferir la `folder` explícita, si no derivarla desde `fileName` (ej. 'A1-03-...')
  const folderName = folder || (fileName ? (() => {
    const parts = fileName.split('-')
    return parts.length >= 2 ? `${parts[0]}-${parts[1]}` : parts[0]
  })() : 'A1-01')

  useEffect(() => {
    const defaultAudios = [
      'A1-01-1-Be-Verb-Greetings.mp3',
      'A1-01-2-Be-Verb-Yes-No-Questions.mp3',
      'A1-01-3-Be-Verb-Negative.mp3',
      'A1-01-4-Be-Verb-Short-Answers.mp3',
      'A1-01-Be-Verb.mp3'
    ]

    fetch(`/Audio/SoundGrammar/A1-Audio/${folderName}/`)
      .then(r => r.text())
      .then(html => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        const links = Array.from(doc.querySelectorAll('a'))
          .map(a => a.href.split('/').pop())
          .filter(f => f && f.toLowerCase().endsWith('.mp3'))
        setAudios(links.length > 0 ? links : defaultAudios)
      })
      .catch(() => setAudios(defaultAudios))
  }, [folderName, fileName])

  return (
    <div className='audio-list'>
      {audios.map((audio, idx) => (
        <div key={idx} className='audio-item'>
          <p className='audio-title'>{audio.replace('.mp3', '')}</p>
          <audio controls>
            <source src={`/Audio/SoundGrammar/A1-Audio/${folderName}/${audio}`} type='audio/mp3' />
            Your browser does not support the audio tag.
          </audio>
        </div>
      ))}
    </div>
  )
}

export default Introduccion
