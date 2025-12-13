import React, { useState } from 'react';
import '../styles/vocabulario.css';

// Importar los componentes de los ejercicios directamente
import A1_02_SeSinPreguntas from './VocabularioEjercicios/A1-02-SE-SIN-PREGUNTAS';
import A1_03_MeGustaFrutas from './VocabularioEjercicios/03megustafrutas';
import A1_04_Verbos_Manana from './VocabularioEjercicios/A1-04-Verbos-Mañana';
import A1_05_VerboSiNoPreguntas from './VocabularioEjercicios/05VerboSiNopreguntas';
import A1_06_Tercer_Persona_Singular from './VocabularioEjercicios/A1-6-Tercer-Persona-Singular';
import A1_07_Adjetivos from './VocabularioEjercicios/A1-7-Adjetivos';
import A1_08_DiasDeLaSemana from './VocabularioEjercicios/08Diasdelasemana';
import A1_09_PronombresSujetos from './VocabularioEjercicios/09PronombresSujetos';
import A1_10_PronombresObjeto from './VocabularioEjercicios/10PronombresObjeto';
import A1_11 from './VocabularioEjercicios/A1-11';
import A1_12 from './VocabularioEjercicios/A1-12';
import A1_13 from './VocabularioEjercicios/A1-13';
import A1_14 from './VocabularioEjercicios/A1-14';
import A1_15 from './VocabularioEjercicios/A1-15';
import A1_16 from './VocabularioEjercicios/A1-16';  
import A1_17 from './VocabularioEjercicios/A1-17';
import A1_18 from './VocabularioEjercicios/A1-18';
import A1_19 from './VocabularioEjercicios/A1-19';
import A1_20 from './VocabularioEjercicios/A1-20';
import A1_21 from './VocabularioEjercicios/A1-21';
import A1_22 from './VocabularioEjercicios/A1-22';
import A1_23 from './VocabularioEjercicios/A1-23';
import A1_24 from './VocabularioEjercicios/A1-24';
import A1_25 from './VocabularioEjercicios/A1-25';
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
  {
    id: 'A1-06',
    title: 'A1-06 Tercera Persona del Singular',
    component: A1_06_Tercer_Persona_Singular,
    searchTerms: 'tercera persona singular third person',
  },
  {
    id: 'A1-07',
    title: 'A1-07 Adjetivos',
    component: A1_07_Adjetivos,
    searchTerms: 'adjetivos adjectives',
  },
  {
    id: 'A1-08',
    title: 'A1-08 Días de la Semana',
    component: A1_08_DiasDeLaSemana,
    searchTerms: 'días de la semana days of the week',
  },
  {
    id: 'A1-09',
    title: 'A1-09 Pronombres Sujetos',
    component: A1_09_PronombresSujetos,
    searchTerms: 'pronombres sujetos subject pronouns',
  },
  {
    id: 'A1-10',
    title: 'A1-10 Pronombres Objeto',
    component: A1_10_PronombresObjeto,
    searchTerms: 'pronombres objeto object pronouns',
  },
  {
    id: 'A1-11',
    title: 'A1-11 Presente Simple',
    component: A1_11,
    searchTerms: 'presente simple present simple',
  },
  {
    id: 'A1-12',
    title: 'A1-12 Presente Simple con Adjetivos',
    component: A1_12,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-13',
    title: 'A1-13 Presente Simple con Adjetivos',
    component: A1_13,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-14',
    title: 'A1-14 Presente Simple con Adjetivos',
    component: A1_14,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-15',
    title: 'A1-15 Presente Simple con Adjetivos',
    component: A1_15,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-16',
    title: 'A1-16 Presente Simple con Adjetivos',
    component: A1_16,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-17',
    title: 'A1-17 Presente Simple con Adjetivos',
    component: A1_17,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-18',
    title: 'A1-18 Presente Simple con Adjetivos',
    component: A1_18,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-19',
    title: 'A1-19 Presente Simple con Adjetivos',
    component: A1_19,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-20',
    title: 'A1-20 Presente Simple con Adjetivos',
    component: A1_20,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-21',
    title: 'A1-21 Presente Simple con Adjetivos',
    component: A1_21,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-22',
    title: 'A1-22 Presente Simple con Adjetivos',
    component: A1_22,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-23',
    title: 'A1-23 Presente Simple con Adjetivos',
    component: A1_23,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-24',
    title: 'A1-24 Presente Simple con Adjetivos',
    component: A1_24,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
  {
    id: 'A1-25',
    title: 'A1-25 Presente Simple con Adjetivos',
    component: A1_25,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
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
              ))
            }
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Vocabulario;