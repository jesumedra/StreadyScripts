import React, { useState, useEffect } from 'react'
import "../styles/vocabulario.css";
import Introduccion from './VocabularioEjercicios/Introduccion';

const Vocabulario = ({ onBack }) => {
  const [audios, setAudios] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Fallback: lista hardcodeada de MP3s disponibles
    const defaultAudios = [
      'A1-01-Be-Verbs-Introduction.mp3',
      'A1-02-Be-Yes-No-Questions.mp3',
      'A1-03-Likes-Fruits.mp3',
      'A1-04-1-Verbs-Morning.mp3',
      'A1-05-Verb-Yes-No-Questions.mp3',
      'A1-06-Third-Person-Singular.mp3',
      'A1-07-Adjectives.mp3',
      'A1-08-Days-of-Week.mp3',
      'A1-09-Subject-Pronouns.mp3',
      'A1-10-Object-Pronouns.mp3'
    ];
    
    // Intentar cargar lista desde servidor
    fetch('/Audio/SoundGrammar/A1-Audio/')
      .then(r => r.text())
      .then(html => {
        const regex = /href="([^"]*\.mp3)"/gi;
        const files = [];
        let match;
        while ((match = regex.exec(html)) !== null) {
          const url = match[1];
          const parts = url.split('/');
          files.push(parts[parts.length - 1]);
        }
        // Si se encuentran archivos, usar esos; sino usar fallback
        setAudios(files.length > 0 ? files.sort() : defaultAudios);
      })
      .catch(() => {
        // Si falla la carga, usar fallback
        setAudios(defaultAudios);
      });
  }, []);

  const filtered = audios.filter(a => a.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='vocab-container'>
      <header className='vocab-navbar'>
        <div className='vocab-left'>
          <button className='vocab-back' onClick={onBack} aria-label='Volver'>
            <i className='fa-solid fa-arrow-left'></i>
          </button>
        </div>

        <div className='vocab-center'>
          <h2 className='vocab-title'>Área de ejercicios</h2>
        </div>

        <div className='vocab-right'>
          <div className='vocab-search'>
            <i className='fa-solid fa-magnifying-glass'></i>
            <input value={query} onChange={e => setQuery(e.target.value)} type='search' placeholder='Buscar ejercicio...' aria-label='Buscar ejercicios' />
          </div>
        </div>
      </header>

      <main className='vocab-content'>
        {!selected && (
          <section className='exercises-area'>
            {filtered.length === 0 ? (
              <p className='muted'>No hay ejercicios disponibles.</p>
            ) : (
              <div className='exercises-grid'>
                {filtered.map((f, i) => (
                  <button key={i} className='exercise-card' onClick={() => setSelected(f)}>
                    <strong>{f.replace(/\.mp3$/i, '').replace(/-/g, ' ')}</strong>
                    <span className='exercise-meta'>Audio</span>
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {selected && (
          <section className='exercise-view'>
            <div className='exercise-header'>
              <button className='vocab-back' onClick={() => setSelected(null)} aria-label='Volver a ejercicios'>
                <i className='fa-solid fa-arrow-left'></i>
              </button>
              <h3 className='exercise-title'>{selected.replace(/\.mp3$/i, '').replace(/-/g, ' ')}</h3>
            </div>
            <Introduccion fileName={selected} />
          </section>
        )}
      </main>
    </div>
  )
}

export default Vocabulario
