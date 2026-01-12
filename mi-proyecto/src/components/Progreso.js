import React, { useEffect, useState } from "react";
import "../styles/Progreso.css";

function Progreso() {
  const [progress, setProgress] = useState({
    gramatica: {
      Nivel1: 0,
      Nivel2: 0,
      Nivel3: 0,
    },
    vocabulario: {
      A1_01: 0,
      A1_02: 0,
      A1_03: 0,
    },
  });

  useEffect(() => {
    const stored = localStorage.getItem("progreso");
    if (stored) {
      setProgress(JSON.parse(stored));
    }
  }, []);

  const renderBar = (label, value) => (
    <div className="progreso-item" key={label}>
      <div className="progreso-label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="progreso-bar">
        <div
          className="progreso-fill"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="progreso-container">
      <h2> Tu progreso</h2>

      {/* ===== GRAMÁTICA ===== */}
      <section className="progreso-section">
        <h3>Gramática</h3>
        {Object.entries(progress.gramatica).map(([nivel, valor]) =>
          renderBar(nivel, valor)
        )}
      </section>

      {/* ===== VOCABULARIO ===== */}
      <section className="progreso-section">
        <h3>Vocabulario</h3>
        {Object.entries(progress.vocabulario).map(([nivel, valor]) =>
          renderBar(nivel, valor)
        )}
      </section>
    </div>
  );
}

export default Progreso;
