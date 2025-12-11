/*
 * Componente `Vocabulario`: área de ejercicios de vocabulario.
 * - Carga la lista de archivos de audio (intentando leer desde la carpeta pública)
 * - Permite buscar audios, seleccionar uno y abrir `Introduccion` con el audio seleccionado.
 */
import React, { useState, useEffect, useMemo, Suspense, lazy } from 'react'
import "../styles/vocabulario.css";
import Introduccion from './VocabularioEjercicios/Introduccion';

const Vocabulario = ({ onBack }) => {
  const [query, setQuery] = useState('');
  // `selected` será un objeto { file: string, folder: string }
  const [selected, setSelected] = useState(null);

  // Lista de componentes de `VocabularioEjercicios` mapeados a sus carpetas A1-xx.
  // Si añades nuevos archivos en `src/components/VocabularioEjercicios`, actualiza esta lista.
  const exercises = [
    { id: 'A1-01', label: 'A1 01 Be Verbs Introducción', folder: 'A1-01', component: 'Introduccion' },
    { id: 'A1-02', label: 'A1 02 Sé Sí/No Preguntas', folder: 'A1-02', component: 'A1_02_SE_SIN_PREGUNTAS' },
    { id: 'A1-03', label: 'A1 03 Me gusta Frutas', folder: 'A1-03', component: 'L03megustafrutas' },
    { id: 'A1-04', label: 'A1 04 Verbos Mañana', folder: 'A1-04', component: 'A1_04_Verbos_Manana' },
    { id: 'A1-05', label: 'A1 05 Verbo Sí/No Preguntas', folder: 'A1-05', component: 'L05VerboSiNopreguntas' },
    { id: 'A1-06', label: 'A1 06 Tercera Persona del singular', folder: 'A1-06', component: 'A1_6_Tercer_Persona_Singular' },
    { id: 'A1-07', label: 'A1 07 Adjetivos', folder: 'A1-07', component: 'A1_7_Adjetivos' },
    { id: 'A1-08', label: 'A1 08 Días de la Semana', folder: 'A1-08', component: 'L08Diasdelasemana' },
    { id: 'A1-09', label: 'A1 09 Pronombres sujetos', folder: 'A1-09', component: 'L09PronombresSujetos' },
    { id: 'A1-10', label: 'A1 10 Pronombres objeto', folder: 'A1-10', component: 'L10PronombresObjeto' },
    { id: 'A1-11', label: 'A1 11 Demonstratives', folder: 'A1-11', component: 'A1_11' },
    { id: 'A1-12', label: 'A1 12 Demonstrative Pronouns', folder: 'A1-12', component: 'A1_12' },
    { id: 'A1-13', label: 'A1 13 Months & Seasons', folder: 'A1-13', component: 'A1_13' },
    { id: 'A1-14', label: 'A1 14 Ordinals', folder: 'A1-14', component: 'A1_14' },
    { id: 'A1-15', label: 'A1 15 Telling Time', folder: 'A1-15', component: 'A1_15' },
    { id: 'A1-16', label: 'A1 16 Prepositions', folder: 'A1-16', component: 'A1_16' },
    { id: 'A1-17', label: 'A1 17 Possessives', folder: 'A1-17', component: 'A1_17' },
    { id: 'A1-18', label: 'A1 18 Nationalities', folder: 'A1-18', component: 'A1_18' },
    { id: 'A1-19', label: 'A1 19 Can - Abilities', folder: 'A1-19', component: 'A1_19' },
    { id: 'A1-20', label: 'A1 20 Adverbs Frequency', folder: 'A1-20', component: 'A1_20' },
    { id: 'A1-21', label: 'A1 21 There is / There are', folder: 'A1-21', component: 'A1_21' },
    { id: 'A1-22', label: 'A1 22 Was / Were', folder: 'A1-22', component: 'A1_22' },
    { id: 'A1-23', label: 'A1 23 Past Tense', folder: 'A1-23', component: 'A1_23' },
    { id: 'A1-24', label: 'A1 24 Articles', folder: 'A1-24', component: 'A1_24' },
    { id: 'A1-25', label: 'A1 25 Any / Some', folder: 'A1-25', component: 'A1_25' }
  ]

  const filtered = exercises.filter(e => e.label.toLowerCase().includes(query.toLowerCase()));

  // Componente que carga dinámicamente el componente de la lección
  const DynamicLesson = ({ component, folder, fileName, label }) => {
    const Component = useMemo(() => {
      if (!component) return null;
      return lazy(() => import(`./VocabularioEjercicios/${component}.js`).catch(() => import('./VocabularioEjercicios/Introduccion')));
    }, [component]);

    if (!Component) return null;

    return (
      <Suspense fallback={<div className='muted'>Cargando lección...</div>}>
        <Component fileName={fileName} folder={folder} label={label} />
      </Suspense>
    );
  }

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
                  {filtered.map((ex, i) => (
                    <button
                      key={i}
                      className='exercise-card'
                      onClick={() => setSelected({ file: null, folder: ex.folder, label: ex.label, component: ex.component })}
                    >
                      <strong>{ex.label}</strong>
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
              <h3 className='exercise-title'>{selected.file ? selected.file.replace(/\.mp3$/i, '').replace(/-/g, ' ') : selected.label}</h3>
            </div>
            <DynamicLesson component={selected.component} folder={selected.folder} fileName={selected.file} label={selected.label} />
          </section>
        )}
      </main>
    </div>
  )
}

export default Vocabulario
