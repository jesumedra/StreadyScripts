import React, { useState, useEffect } from "react";
import "../styles/Progreso.css";

function Progreso({ progreso }) {
    const [progresoTotal, setProgresoTotal] = useState(0);

    useEffect(() => {
        setProgresoTotal(progreso);
    }, [progreso]);

    return (
        <section className="progreso-wrapper">
            <div className="progreso-card">
                <h2>🏆 Tu progreso</h2>
                <p className="progreso-texto">
                    Cada lección cuenta. Avanza a tu ritmo 💙
                </p>

                <div className="barra-externa">
                    <div
                        className="barra-interna"
                        style={{ width: `${progresoTotal}%` }}
                    ></div>
                </div>

                <span className="progreso-numero">
                    {progresoTotal}%
                </span>

                {progresoTotal === 100 && (
                    <p className="mensaje-final">
                        🎉 ¡Curso completado! Excelente trabajo.
                    </p>
                )}
            </div>
        </section>
    );
}

export default Progreso;

