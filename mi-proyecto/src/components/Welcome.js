/*
 * Componente `Welcome`: muestra el saludo inicial del usuario.
 * Recibe `usuario` y muestra nombre y racha de días.
 */
import React from "react";
import "../styles/welcome.css";

function Welcome({ usuario }) {
    return (
        <section className="welcome-section">
            <h1 className="welcome-title">¡Bienvenido a tu lección, {usuario.nombre}!</h1>
            <p className="welcome-subtitle">Tienes una racha de {usuario.racha} días. ¡Sigue así!</p>
        </section>
    );
}

export default Welcome;