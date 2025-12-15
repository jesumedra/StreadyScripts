// Importa React y el hook useState para manejar estados locales
import React, { useState } from 'react';

// Importa los estilos CSS del módulo de vocabulario
import '../styles/vocabulario.css';

/*
  Importación de los componentes de ejercicios.
  Cada uno representa una lección o actividad distinta.
*/
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

// Componente genérico usado cuando no existe uno específico
import Introduccion from './VocabularioEjercicios/Introduccion';

/*
  Arreglo central de ejercicios.
  Funciona como una "base de datos" local.
*/
const exercises = [
  {
    // Identificador único del ejercicio
    id: 'A1-01',

    // Título que se muestra en el menú
    title: 'A1-01 Be Verbs Introduction',

    /*
      Componente a renderizar.
      Se usa una función para poder pasar props.
    */
    component: () => <Introduccion fileName="A1-01-Be-Verbs-Introduction.mp3" />,

    // Palabras clave para el buscador
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

  // El resto de los ejercicios sigue exactamente la misma estructura
  // (id, title, component, searchTerms)
  {
    id: 'A1-04',
    title: 'A1-04 Verbos de la Mañana',
    component: A1_04_Verbos_Manana,
    searchTerms: 'verbos mañana morning verbs',
  },

  // ...
  {
    id: 'A1-25',
    title: 'A1-25 Presente Simple con Adjetivos',
    component: A1_25,
    searchTerms: 'presente simple con adjetivos present simple with adjectives',
  },
];

/*
  Componente principal Vocabulario
  Funciona como:
  - Menú de ejercicios
  - Buscador
  - Contenedor del ejercicio seleccionado
*/
const Vocabulario = ({ onBack }) => {

  // Texto escrito en el buscador
  const [query, setQuery] = useState('');

  // Ejercicio actualmente seleccionado
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Guarda el ejercicio que el usuario selecciona
  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  // Regresa al listado de ejercicios
  const handleBackToList = () => {
    setSelectedExercise(null);
  };

  /*
    Filtra los ejercicios según:
    - título
    - palabras clave (searchTerms)
  */
  const filteredExercises = exercises.filter(e =>
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.searchTerms.toLowerCase().includes(query.toLowerCase())
  );

  /*
    Si hay un ejercicio seleccionado:
    se renderiza SOLO ese ejercicio
  */
  if (selectedExercise) {

    // Referencia al componente del ejercicio
    const ExerciseComponent = selectedExercise.component;

    return (
      <div className='vocab-container'>

        {/* Barra superior */}
        <header className='vocab-navbar'>
          <div className='vocab-left'>
            <button
              className='vocab-back'
              onClick={handleBackToList}
              aria-label='Volver a ejercicios'
            >
              <i className='fa-solid fa-arrow-left'></i>
            </button>
          </div>

          <div className='vocab-center'>
            <h3 className='vocab-title'>
              {selectedExercise.title}
            </h3>
          </div>

          <div className='vocab-right'></div>
        </header>

        {/* Contenido del ejercicio */}
        <main className='vocab-content'>
          <section className='exercise-view'>
            <ExerciseComponent />
          </section>
        </main>
      </div>
    );
  }

  /*
    Vista principal:
    listado de ejercicios + buscador
  */
  return (
    <div className='vocab-container'>

      {/* Barra superior */}
      <header className='vocab-navbar'>
        <div className='vocab-left'>
          <button
            className='vocab-back'
            onClick={onBack}
            aria-label='Volver'
          >
            <i className='fa-solid fa-arrow-left'></i>
          </button>
        </div>

        <div className='vocab-center'>
          <h2 className='vocab-title'>
            Área de ejercicios
          </h2>
        </div>

        {/* Buscador */}
        <div className='vocab-right'>
          <div className='vocab-search'>
            <i className='fa-solid fa-magnifying-glass'></i>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              type='search'
              placeholder='Buscar ejercicio...'
              aria-label='Buscar ejercicios'
            />
          </div>
        </div>
      </header>

      {/* Lista de ejercicios */}
      <main className='vocab-content'>
        <section className='exercises-area'>

          {/* Mensaje si no hay coincidencias */}
          {filteredExercises.length === 0 ? (
            <p className='muted'>
              No se encontraron ejercicios.
            </p>
          ) : (

            // Grid de tarjetas de ejercicios
            <div className='exercises-grid'>
              {filteredExercises.map((exercise) => (
                <button
                  key={exercise.id}
                  className='exercise-card'
                  onClick={() => handleSelectExercise(exercise)}
                >
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

// Exporta el componente para usarlo en otras partes de la app
export default Vocabulario;
