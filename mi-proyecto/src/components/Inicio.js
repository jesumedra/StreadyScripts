import React from "react";
import "../styles/Inicio.css";


function Inicio() {
    return (
        <section className="inicio">
            <h1 className="inicio-titulo">
                Bienvenido a LingoQuest 🌟
            </h1>

            <p className="inicio-texto">
                Este es un espacio pensado para aprender con calma, sin prisas
                y sin presión. Aquí puedes avanzar a tu propio ritmo.
            </p>

            <p className="inicio-texto">
                Sabemos que escribir puede ser complicado, por eso LingoQuest
                te acompaña con actividades claras, visuales y fáciles de seguir.
            </p>

            <div className="inicio-invitacion">
                <p>
                    Cuando estés listo, entra a las lecciones y comienza tu
                    aventura de aprendizaje.
                </p>

                <span className="inicio-indicacion">
                    👆 Usa el menú de arriba y selecciona <strong>Lecciones</strong>
                </span>
            </div>
        </section>
    );
}

export default Inicio;