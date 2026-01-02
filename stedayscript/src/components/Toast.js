/*
 * Componente `Toast`: muestra mensajes breves (notificaciones) en pantalla.
 * Se muestra cuando `message` tiene contenido y desaparece cuando está vacío.
 */
import "../styles/toast.css";

function Toast({ message }) {
    return (
        <div className={`toast ${message ? "show" : ""}`}>
            {message}
        </div>
    );
}

export default Toast;
