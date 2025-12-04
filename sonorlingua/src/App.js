import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import LessonsGrid from "./components/LessonsGrid";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Vocabulario from "./components/Vocabulario";

function App({ usuario }) {
    const [toastMsg, setToastMsg] = useState("");
    const [view, setView] = useState("home");

    const startLesson = (title) => {
        // If user clicks on Vocabulario, switch to that view
        if (title === "Vocabulario") {
            setView("vocabulario");
            return;
        }

        setToastMsg(`Cargando lección de: ${title}`);
        setTimeout(() => setToastMsg(""), 2500);
    };

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
            </main>
            <Footer />
            <Toast message={toastMsg} />
        </>
    );
}

export default App;
