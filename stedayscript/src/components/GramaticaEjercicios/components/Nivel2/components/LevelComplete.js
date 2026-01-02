import React from "react";
import "../styles/LevelComplete.css";

export default function LevelComplete({
  title = "¡Nivel Completado!",
  score,
  total,
  errors,
  onNextLevel,
  onRestart,
  onRetryErrors
}) {
  const accuracy = Math.round((score / total) * 100);

  return (
    <div className="level-complete">
      <div className="complete-card">

        <div className="complete-icon">
          {accuracy === 100 ? "🏆" : accuracy >= 70 ? "🌟" : "👍"}
        </div>

        <h1>{title}</h1>

        <div className="stats">
          <div className="stat">
            <span className="value">{score}/{total}</span>
            <span className="label">Correctas</span>
          </div>

          <div className="stat">
            <span className="value">{accuracy}%</span>
            <span className="label">Precisión</span>
          </div>

          {errors > 0 && (
            <div className="stat warning">
              <span className="value">{errors}</span>
              <span className="label">Errores</span>
            </div>
          )}
        </div>

        <div className="buttons">
          {errors > 0 && (
            <button className="retry" onClick={onRetryErrors}>
              🔁 Reintentar errores
            </button>
          )}

          <button className="restart" onClick={onRestart}>
            🔄 Reiniciar nivel
          </button>

          {onNextLevel && (
            <button className="next" onClick={onNextLevel}>
              ➡️ Siguiente nivel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
