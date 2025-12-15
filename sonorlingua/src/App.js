import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import LessonsGrid from "./components/LessonsGrid";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Vocabulario from "./components/Vocabulario";

import LevelSelection from "./components/GramaticaEjercicios/components/LevelSelection";
import GrammarApp from "./components/GramaticaEjercicios/GrammarApp";

/*
 * Root component: administra la vista principal de la aplicación.
 * - Mantiene el estado `view` que determina si se muestra la pantalla de inicio
 *   (LessonsGrid) o la sección de `Vocabulario`.
 * - Pasa `startLesson` a `LessonsGrid` para cambiar de vista según la lección seleccionada.
 */
function App({ usuario }) {
    const [toastMsg, setToastMsg] = useState("");
    const [view, setView] = useState("home");
    const [grammarLevel, setGrammarLevel] = useState(null);
    const startLesson = (title) => {
        // If user clicks on Vocabulario, switch to that view
        if (title === "Vocabulario") {
            setView("vocabulario");
            return;
        }

        if (title === "Gramática") {
            setView("gramatica_levels");
            return;
        }

        setToastMsg(`Cargando lección de: ${title}`);
        setTimeout(() => setToastMsg(""), 2500);
    };
    const handleStartGrammarQuiz = (level) => {
        setGrammarLevel(level);
        setView("gramatica_quiz"); // Cambia la vista al quiz real
    };

    // 💡 FUNCIÓN PARA VOLVER AL HOME
    const handleBackToHome = () => {
        setView("home");
        setGrammarLevel(null);
    }

    return (
        <>
            <Header usuario={usuario} />
            <main className="container">
                <Welcome usuario={usuario} />
                {view === "home" && (
                    <LessonsGrid
                        lecciones={usuario.lecciones}
                        onStart={startLesson}
                    />
                )}

                {view === "vocabulario" && (
                    <Vocabulario onBack={() => setView("home")} />
                )}
                {view === "gramatica_levels" && (
                    <LevelSelection
                        onStartQuiz={handleStartGrammarQuiz}
                        onBack={handleBackToHome}
                    />
                )}
                {view === "gramatica_quiz" && (
                    <GrammarApp
                        level={grammarLevel}
                        onExit={handleBackToHome}
                    />
                )}
            </main>
            <Footer />
            <Toast message={toastMsg} />
        </>
    );
}

export default App;
