import React, { useState } from 'react';
import '../styles/vocabulario.css';

// Importar los componentes de los ejercicios directamente
import A1_02_SeSinPreguntas from './VocabularioEjercicios/A1-02-SE-SIN-PREGUNTAS';
import A1_03_MeGustaFrutas from './VocabularioEjercicios/03megustafrutas';
import A1_04_Verbos_Manana from './VocabularioEjercicios/A1-04-Verbos-Mañana';
import A1_05_VerboSiNoPreguntas from './VocabularioEjercicios/05VerboSiNopreguntas';
import Introduccion from './VocabularioEjercicios/Introduccion'; // Componente genérico para los que no tienen uno específico

// Lista de ejercicios disponibles
const exercises = [
  {
    id: 'A1-01',
    title: 'A1-01 Be Verbs Introduction',
    component: () => <Introduccion fileName="A1-01-Be-Verbs-Introduction.mp3" />,
    searchTerms: 'be verbs introduction',
  },
  {
    id: 'A1-02',
    title: 'A1-02 Be Yes/No Questions',
    component: A1_02_SeSinPreguntas,
    searchTerms: 'be yes no questions',
  },
  {
    id: 'A1-03',
    title: 'A1-03 Me Gusta Frutas',
    component: A1_03_MeGustaFrutas,
    searchTerms: 'me gusta frutas likes',
  },
  {
    id: 'A1-04',
    title: 'A1-04 Verbos de la Mañana',
    component: A1_04_Verbos_Manana,
    searchTerms: 'verbos mañana morning verbs',
  },
  {
    id: 'A1-05',
    title: 'A1-05 Verbos (Sí/No Preguntas)',
    component: A1_05_VerboSiNoPreguntas,
    searchTerms: 'verbos si no yes no questions',
  },
];

const Vocabulario = ({ onBack }) => {
  const [query, setQuery] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleBackToList = () => {
    setSelectedExercise(null);
  };

  const filteredExercises = exercises.filter(e =>
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.searchTerms.toLowerCase().includes(query.toLowerCase())
  );

  if (selectedExercise) {
    const ExerciseComponent = selectedExercise.component;
    return (
      <div className='vocab-container'>
        <header className='vocab-navbar'>
            <div className='vocab-left'>
              <button className='vocab-back' onClick={handleBackToList} aria-label='Volver a ejercicios'>
                <i className='fa-solid fa-arrow-left'></i>
              </button>
            </div>
            <div className='vocab-center'>
                <h3 className='vocab-title'>{selectedExercise.title}</h3>
            </div>
            <div className='vocab-right'></div>
        </header>
        <main className='vocab-content'>
          <section className='exercise-view'>
            <ExerciseComponent />
          </section>
        </main>
      </div>
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
        <section className='exercises-area'>
          {filteredExercises.length === 0 ? (
            <p className='muted'>No se encontraron ejercicios.</p>
          ) : (
            <div className='exercises-grid'>
              {filteredExercises.map((exercise) => (
                <button key={exercise.id} className='exercise-card' onClick={() => handleSelectExercise(exercise)}>
                  <strong>{exercise.title}</strong>
                  <span className='exercise-meta'>Ejercicio</span>
                </button>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Vocabulario;