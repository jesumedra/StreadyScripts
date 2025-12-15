// Importa React y el hook useState para manejar estado dentro del componente
import React, { useState } from 'react';

// Importa los estilos CSS específicos para este componente
import '../../styles/vocabulario.css';

/*
  Arreglo principal de conversaciones.
  Cada objeto representa una conversación/lección.
*/
const conversations = [
  {
    // Identificador único de la conversación
    id: 1,

    // Título que se mostrará en pantalla
    title: 'A1-01-1-Be-Verbs-First-Day',

    // Ruta del archivo de audio de la conversación
    audio: '/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-1-Be-Verbs-First-Day.mp3',

    // Diálogo en inglés (arreglo de líneas)
    english: [
      "Man: Hi! Are you a new student?",
      "Woman: Yes, I am. Today is my first day.",
      // ...
    ],

    // Diálogo en español (traducción)
    spanish: [
      "Hombre: ¡Hola! ¿Eres un estudiante nuevo?",
      "Mujer: Sí, lo soy. Hoy es mi primer día.",
      // ...
    ],

    /*
      Ejercicios asociados a esta conversación.
      Cada ejercicio contiene:
      - question: pregunta
      - options: opciones de respuesta
      - correct: respuesta correcta
    */
    exercises: [
      { question: 'Is Beth a new student?', options: ['Yes', 'No'], correct: 'Yes' },
      { question: "What is the man's name?", options: ['Tony', 'Beth', 'Wong'], correct: 'Tony' }
    ]
  },

  // Las siguientes conversaciones siguen la misma estructura
  // (id, title, audio, english, spanish, exercises)
  {
    id: 2,
    title: 'A1-01-2-Be-Verbs-Teachers',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-2-Be-Verbs-Teachers.mp3',
    english: [/* ... */],
    spanish: [/* ... */],
    exercises: [/* ... */]
  },

  {
    id: 3,
    title: 'A1-01-3-Be-Verbs-Classes',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-3-Be-Verb-Classes.mp3',
    english: [/* ... */],
    spanish: [/* ... */],
    exercises: [/* ... */]
  },

  {
    id: 4,
    title: 'A1-01-4-Be-Verbs-Lab',
    audio: '/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-4-Be-Verbs-Lab.mp3',
    english: [/* ... */],
    spanish: [/* ... */],
    exercises: [/* ... */]
  }
];

/*
  Componente principal Introduccion
  Se encarga de:
  - Mostrar audios
  - Mostrar diálogos
  - Mostrar ejercicios
  - Evaluar respuestas
*/
const Introduccion = () => {

  /*
    userAnswers guarda las respuestas seleccionadas por el usuario.
    Ejemplo de estructura:
    {
      "1-0": "Yes",
      "1-1": "Tony"
    }
  */
  const [userAnswers, setUserAnswers] = useState({});

  /*
    results guarda si cada respuesta es correcta o incorrecta.
    true = correcta
    false = incorrecta
  */
  const [results, setResults] = useState({});

  /*
    Maneja el cambio de respuesta cuando el usuario selecciona una opción.
    convId: id de la conversación
    exerciseIndex: índice del ejercicio
    answer: opción seleccionada
  */
  const handleAnswerChange = (convId, exerciseIndex, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      // Se crea una clave única por conversación y ejercicio
      [`${convId}-${exerciseIndex}`]: answer
    }));
  };

  /*
    Verifica las respuestas de una conversación específica
    y compara con las respuestas correctas
  */
  const checkAnswers = (convId) => {

    // Busca la conversación por id
    const conversation = conversations.find(c => c.id === convId);
    if (!conversation) return;

    const newResults = {};

    // Recorre cada ejercicio de la conversación
    conversation.exercises.forEach((exercise, index) => {
      const userAnswer = userAnswers[`${convId}-${index}`];

      // Guarda true o false dependiendo si coincide con la correcta
      newResults[`${convId}-${index}`] = userAnswer === exercise.correct;
    });

    // Actualiza el estado de resultados
    setResults(prev => ({ ...prev, ...newResults }));
  };

  // Renderizado del componente
  return (
    <div className="container-vocabulario">

      {/* Título principal */}
      <h1>The Verb "Be"</h1>

      {/* Audio introductorio */}
      <div className="audio-container">
        <p>Escucha la introducción:</p>
        <audio
          controls
          src="/Audio/SoundGrammar/A1-Audio/A1-01/A1-01-Be-Verb.mp3"
        />
      </div>

      <h3>Conversaciones</h3>

      {/* Recorre todas las conversaciones */}
      {conversations.map(conv => (
        <div key={conv.id} className="conversation-container">

          {/* Título de la conversación */}
          <h2>{conv.title}</h2>

          {/* Audio de la conversación */}
          <div className="audio-column">
            <audio controls>
              <source src={conv.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Texto en inglés */}
          <div className="text-column">
            <h3>English</h3>
            {conv.english.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Texto en español */}
          <div className="text-column">
            <h3>Spanish</h3>
            {conv.spanish.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Ejercicios */}
          <div className="exercises-column">
            <h3>Ejercicios</h3>

            {conv.exercises.map((ex, index) => (
              <div key={index} className="exercise">

                {/* Pregunta */}
                <p>{ex.question}</p>

                {/* Opciones */}
                <div className="options">
                  {ex.options.map((option, i) => (
                    <div key={i} className="option">
                      <input
                        type="radio"
                        id={`${conv.id}-${index}-${i}`}
                        name={`exercise-${conv.id}-${index}`}
                        value={option}
                        onChange={() =>
                          handleAnswerChange(conv.id, index, option)
                        }
                        checked={
                          userAnswers[`${conv.id}-${index}`] === option
                        }
                      />
                      <label htmlFor={`${conv.id}-${index}-${i}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Resultado del ejercicio */}
                {results[`${conv.id}-${index}`] !== undefined && (
                  <p
                    className={
                      results[`${conv.id}-${index}`]
                        ? 'correct'
                        : 'incorrect'
                    }
                  >
                    {results[`${conv.id}-${index}`]
                      ? '¡Correcto!'
                      : `Incorrecto. La respuesta correcta es: ${ex.correct}`}
                  </p>
                )}
              </div>
            ))}

            {/* Botón para verificar respuestas */}
            <button
              onClick={() => checkAnswers(conv.id)}
              className="check-answers-btn"
            >
              Comprobar respuestas
            </button>

          </div>
        </div>
      ))}
    </div>
  );
};

// Exporta el componente para poder usarlo en App.js u otros archivos
export default Introduccion;
