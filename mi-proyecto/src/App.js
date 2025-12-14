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

function App({ usuario }) {
    const [toastMsg, setToastMsg] = useState("");
    const [view, setView] = useState("home");
    const [progresoCurso, setProgresoCurso] = useState(0);

    const startLesson = (title) => {
        if (title === "Vocabulario") {
            setView("vocabulario");
            return;
        }

        setProgresoCurso((prev) => (prev < 100 ? prev + 10 : 100));
        setToastMsg(`Cargando lección de: ${title}`);
        setTimeout(() => setToastMsg(""), 2500);
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

