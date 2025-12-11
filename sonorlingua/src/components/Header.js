/*
 * Componente `Header`: barra superior de la aplicación.
 * - Muestra el logo, navegación principal y el botón de perfil del usuario.
 */
import React, { useState } from "react";
import "../styles/header.css";

function Header({ usuario }) {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    const cerrarSesion = () => {
        console.log("Cerrar sesión…");
    };
    return (
        <header className="main-header">
            <a href="#" className="logo">
                <i className="fa-solid fa-feather-pointed"></i>
                <span>LingoQuest</span>
            </a>

            <nav className="nav-menu">
                <ul>
                    <li><a className="nav-link"><i className="fa-solid fa-house"></i><span>Inicio</span></a></li>
                    <li><a className="nav-link active"><i className="fa-solid fa-book-open"></i><span>Lecciones</span></a></li>
                    <li><a className="nav-link"><i className="fa-solid fa-trophy"></i><span>Progreso</span></a></li>
                </ul>
            </nav>

            <div className="profile-btn" onClick={toggleMenu}>
                {usuario.nombre.charAt(0)}
            </div>
            {menuAbierto && (
                <div className="profile-menu">
                    <button>Configuración</button>
                    <button onClick={cerrarSesion}>Cerrar sesión</button>
                </div>
            )}
        </header>
    );
}

export default Header;
