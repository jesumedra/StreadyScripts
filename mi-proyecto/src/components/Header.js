/*
 * Componente `Header`: barra superior de la aplicación.
 * - Muestra el logo, navegación principal y el botón de perfil del usuario.
 */
import React from "react";
import "../styles/header.css";

function Header({ usuario, onNavigate, currentView }) {
    return (
        <header className="main-header">
            <div
                className="logo"
                onClick={() => onNavigate("inicio")}
                style={{ cursor: "pointer" }}
            >
                <i className="fa-solid fa-feather-pointed"></i>
                <span>LingoQuest</span>
            </div>

            <nav className="nav-menu">
                <ul>
                    <li>
                        <span
                            className={`nav-link ${currentView === "inicio" ? "active" : ""}`}
                            onClick={() => onNavigate("inicio")}
                        >
                            <i className="fa-solid fa-house"></i>
                            <span>Inicio</span>
                        </span>
                    </li>

                    <li>
                        <span
                            className={`nav-link ${currentView === "home" ? "active" : ""}`}
                            onClick={() => onNavigate("home")}
                        >
                            <i className="fa-solid fa-book-open"></i>
                            <span>Lecciones</span>
                        </span>
                    </li>

                    <li>
                        <span
                            className={`nav-link ${currentView === "progreso" ? "active" : ""}`}
                            onClick={() => onNavigate("progreso")}
                        >
                            <i className="fa-solid fa-trophy"></i>
                            <span>Progreso</span>
                        </span>
                    </li>
                </ul>
            </nav>

            <div className="profile-btn">
                {usuario.nombre.charAt(0)}
            </div>
        </header>
    );
}

export default Header;
