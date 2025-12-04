import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '@fortawesome/fontawesome-free/css/all.min.css';


import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

const usuario = {
    nombre: "Erick",
    racha: 5,
    lecciones: [
        {
            titulo: "Vocabulario",
            icono: "fa-book",
            color: "--secondary-blue",
            nivelTexto: "Nivel 1",
            porcentaje: 50,
            bloqueado: false,
            btnClass: "btn-primary",
            btnTexto: "Continuar"
        },
        {
            titulo: "Gramática",
            icono: "fa-feather",
            color: "--accent-purple",
            nivelTexto: "Nivel 2",
            porcentaje: 100,
            bloqueado: false,
            btnClass: "btn-secondary",
            btnTexto: "Repetir"
        },
        {
            titulo: "Conversación",
            icono: "fa-comments",
            color: "--accent-orange",
            nivelTexto: "Nivel 1",
            porcentaje: 0,
            bloqueado: true,
            btnClass: "btn-disabled",
            btnTexto: "Bloqueado"
        }
    ]
};

root.render(<App usuario={usuario} />);
