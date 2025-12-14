/*
 * Componente `Footer`: pie de página con enlaces y copyright.
 */
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-links">
                <a href="#" className="footer-link">Términos</a>
                <a href="#" className="footer-link">Privacidad</a>
                <a href="#" className="footer-link">Contacto</a>
            </div>
            <div className="copyright">
                © 2023 LingoQuest Inc.
            </div>
        </footer>
    );
}

export default Footer;