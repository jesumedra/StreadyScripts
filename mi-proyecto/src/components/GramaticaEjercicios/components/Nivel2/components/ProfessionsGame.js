import { useEffect, useState, useMemo } from "react";

// Componentes comunes
import ProgressBar from "../../ProgressBar";
import FeedbackEmoji from "../../FeedbackEmoji";
import AudioPlayer from "../../AudioPlayer";
import LevelComplete from "./LevelComplete";

// Data
import professionsData from "./professionsData";

// Estilos
import "../styles/ProfessionsGame.css";

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

export default function ProfessionsGame({ onExit, onNextLevel }) {

  // =====================
  // ESTADOS DEL JUEGO
  // =====================
  const [profesiones, setProfesiones] = useState([]);
  const [actual, setActual] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [touchedItem, setTouchedItem] = useState(null);

  // Audio
  const [playCorrect, setPlayCorrect] = useState(false);
  const [playIncorrect, setPlayIncorrect] = useState(false);

  // Resultados
  const [finished, setFinished] = useState(false);
  const [corrects, setCorrects] = useState(0);
  const [errors, setErrors] = useState(0);

  // =====================
  // INICIALIZAR NIVEL
  // =====================
  useEffect(() => {
    setProfesiones(shuffle(professionsData));
  }, []);

  // =====================
  // OBJETOS MEZCLADOS
  // =====================
  const objetosMezclados = useMemo(() => {
    if (profesiones.length > 0) {
      return shuffle(profesiones[actual].objetos);
    }
    return [];
  }, [profesiones, actual]);

  if (profesiones.length === 0) return null;

  const datos = profesiones[actual];

  // ✅ PROGRESO CORRECTO (empieza en 0%)
  const progress = Math.round((actual / profesiones.length) * 100);

  // =====================
  // VERIFICAR RESPUESTA
  // =====================
  const verificarRespuesta = (id) => {
    if (bloqueado) return;

    if (String(id) === String(datos.correcto)) {
      setBloqueado(true);
      setFeedback("correct");
      setPlayCorrect(true);
      setCorrects((prev) => prev + 1);

      setTimeout(() => {
        setPlayCorrect(false);

        if (actual + 1 < profesiones.length) {
          setActual((prev) => prev + 1);
          setFeedback(null);
          setBloqueado(false);
        } else {
          setFinished(true);
        }
      }, 1200);

    } else {
      setFeedback("wrong");
      setPlayIncorrect(true);
      setErrors((prev) => prev + 1);
      setBloqueado(true);

      setTimeout(() => {
        setFeedback(null);
        setPlayIncorrect(false);
        setBloqueado(false);
      }, 1000);
    }
  };

  // =====================
  // PANTALLA FINAL
  // =====================
 if (finished) {
  return (
    <LevelComplete
      title="¡Nivel 2 Completado!"
      score={corrects}
      total={profesiones.length}
      errors={errors}
      onRestart={() => {
        setActual(0);
        setCorrects(0);
        setErrors(0);
        setFinished(false);
      }}
      onRetryErrors={() => {
        setActual(0);
        setErrors(0);
        setFinished(false);
      }}
      onNextLevel={onNextLevel} // ✅ AQUÍ ESTÁ LA CLAVE
    />
  );
}

  // =====================
  // RENDER NORMAL
  // =====================
  return (
    <div className="professions-game">
      <h2> Professions / Profesiones </h2>

      <ProgressBar
        progress={progress}
        score={corrects}
        totalQuestions={profesiones.length}
        currentQuestion={actual + 1}
      />

      <AudioPlayer
        playCorrect={playCorrect}
        playIncorrect={playIncorrect}
      />

      <FeedbackEmoji
        isCorrect={feedback === "correct"}
        show={feedback !== null}
      />

      <div className="main-container">
        <div className="left-column">
          <div className="profession">
            <p>{datos.nombre}</p>
            <img
              src={datos.imagen}
              className="prof-img"
              alt={datos.nombre}
            />
          </div>

          <div
            className={`drop-zone ${feedback}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              verificarRespuesta(e.dataTransfer.getData("text"));
            }}
            onTouchEnd={() =>
              touchedItem && verificarRespuesta(touchedItem)
            }
          >
            Arrastra el objeto correcto aquí
          </div>
        </div>

        <div className="items">
          {objetosMezclados.map((obj) => (
            <div
              key={obj.id}
              className="item"
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("text", obj.id)
              }
              onTouchStart={() => setTouchedItem(obj.id)}
            >
              <img src={obj.img} alt={obj.texto} />
              <p>{obj.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
