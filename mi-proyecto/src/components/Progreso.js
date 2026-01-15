import React, { useEffect, useState } from "react";
import "../styles/Progreso.css";

const Progreso = () => {
  const [progreso, setProgreso] = useState({
    vocabulario: { total: 0, completed: [] },
    gramatica: { total: 0, completed: [] }
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("progreso"));

    if (stored) {
      setProgreso({
        vocabulario: stored.vocabulario || { total: 0, completed: [] },
        gramatica: stored.gramatica || { total: 0, completed: [] }
      });
    }
  }, []);

  return (
    <div className="progreso-container">
      <h2>Tu progreso</h2>

      {/* ================= GRAMÁTICA ================= */}
      <div className="progreso-section">
        <h3>Gramática</h3>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progreso.gramatica.total}%` }}
          />
        </div>
        <span>{progreso.gramatica.total}%</span>
      </div>

      {/* ================= VOCABULARIO ================= */}
      <div className="progreso-section">
        <h3>Vocabulario</h3>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progreso.vocabulario.total}%` }}
          />
        </div>
        <span>{progreso.vocabulario.total}%</span>
      </div>
    </div>
  );
};

export default Progreso;