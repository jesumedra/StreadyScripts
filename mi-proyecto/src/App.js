import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import LessonsGrid from "./components/LessonsGrid";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Vocabulario from "./components/Vocabulario";
import Inicio from "./components/Inicio";
import Progreso from "./components/Progreso";

import LevelSelection from "./components/GramaticaEjercicios/components/LevelSelection";
import GrammarApp from "./components/GramaticaEjercicios/GrammarApp";

function App({ usuario }) {
    const [toastMsg, setToastMsg] = useState("");
    const [view, setView] = useState("home");
    const [progresoCurso, setProgresoCurso] = useState(0);
    const [grammarLevel, setGrammarLevel] = useState(null);

    const startLesson = (title) => {
        if (title === "Vocabulario") {
            setView("vocabulario");
            return;
        }
        if (title === "Gramática") {
            setView("gramatica_levels");
            return;
        }
        if (title === "Inicio") {
            setView("inicio");
            return;
        }
        setProgresoCurso((prev) => (prev < 100 ? prev + 10 : 100));
        setToastMsg(`Cargando lección de: ${title}`);
        setTimeout(() => setToastMsg(""), 2500);
    };
    const handleBackToHome = () => {
        setView("home");
        setGrammarLevel(null);
    }
    const handleStartGrammarQuiz = (level) => {
        setGrammarLevel(level);
        setView("gramatica_quiz"); // Cambia la vista al quiz real
    };

    return (
        <div className="app-wrapper">
            <Header
                usuario={usuario}
                onNavigate={setView}
                currentView={view}
            />

            <main className="container main-content">
                {view === "home" && (
                    <>
                        <Welcome usuario={usuario} />
                        <LessonsGrid
                            lecciones={usuario.lecciones}
                            onStart={startLesson}
                        />
                    </>
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

                {view === "inicio" && <Inicio />}

                {view === "vocabulario" && (
                    <Vocabulario onBack={() => setView("home")} />
                )}

                {view === "progreso" && (
                    <Progreso progreso={progresoCurso} />
                )}
            </main>

            <Footer />
            <Toast message={toastMsg} />
        </div>
    );
}

export default App;

