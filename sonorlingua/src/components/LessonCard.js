import React from "react";
import "../styles/lessonCard.css";
import "../styles/variables.css";

function LessonCard({ leccion, onStart }) {
    const styleAttr =
        leccion.color === "--accent-purple"
            ? { backgroundColor: "var(--accent-purple)", boxShadow: "0 4px 0 var(--accent-purple-shadow)" }
            : {};

    return (
        <article
            className="lesson-card"
            style={{ opacity: leccion.bloqueado ? 0.8 : 1 }}
        >
            <div className="icon-container" style={{ color: `var(${leccion.color})` }}>
                <i className={`fa-solid ${leccion.icono}`}></i>
            </div>

            <div className="card-content">
                <h2
                    className="card-title"
                    style={{ color: leccion.bloqueado ? "var(--text-light)" : "var(--text-main)" }}
                >
                    {leccion.titulo}
                </h2>

                <div className="progress-wrapper">
                    <div className="progress-info">
                        <span>{leccion.nivelTexto}</span>
                        {!leccion.bloqueado && <span>{leccion.porcentaje}%</span>}
                    </div>

                    <div className="progress-bg">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${leccion.porcentaje}%`,
                                backgroundColor: `var(${leccion.color})`
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            <button
                className={`btn ${leccion.btnClass}`}
                disabled={leccion.bloqueado}
                style={styleAttr}
                onClick={() => onStart(leccion.titulo)}
            >
                {leccion.btnTexto}
            </button>
        </article>
    );
}

export default LessonCard;
