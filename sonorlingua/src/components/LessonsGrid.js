/*
 * Componente `LessonsGrid`: renderiza una cuadrícula de lecciones.
 * - Recibe `lecciones` (array) y `onStart` (callback) para iniciar una lección.
 * - Cada elemento se renderiza usando `LessonCard`.
 */
import React from "react";
import LessonCard from "./LessonCard";
import "../styles/lessonsGrid.css";

function LessonsGrid({ lecciones, onStart }) {
    return (
        <div className="lessons-grid">
            {lecciones.map((l, i) => (
                <LessonCard key={i} leccion={l} onStart={onStart} />
            ))}
        </div>
    );
}

export default LessonsGrid;
