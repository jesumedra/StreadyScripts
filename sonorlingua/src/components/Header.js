import React from "react";
import "../styles/header.css";

function Header({ usuario }) {
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

            <div className="profile-btn">
                {usuario.nombre.charAt(0)}
            </div>
        </header>
    );
}

export default Header;
