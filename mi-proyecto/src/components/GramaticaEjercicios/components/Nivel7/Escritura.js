import React, { useEffect, useRef, useState } from "react";
import "./styles/Escritura.css";
import Tesseract from "tesseract.js";


const WORDS = [
    "apple", "banana", "orange", "house", "school", "computer", "friend", "family",
    "water", "happy", "beautiful", "morning", "night", "winter", "summer", "music",
    "picture", "window", "garden", "city", "country"
];

const WORDS_PER_LEVEL = 5;

export default function Escritura({ onExit, onNextLevel }) {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    const [levelWords, setLevelWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [drawing, setDrawing] = useState(false);
    const [lastPos, setLastPos] = useState(null);
    const [target, setTarget] = useState("");
    const [recognized, setRecognized] = useState("");
    const [status, setStatus] = useState("Estado: esperando");
    const [state, setState] = useState("neutral");
    const [tolerance, setTolerance] = useState(5);
    const [autoCheck, setAutoCheck] = useState(true);
    const checkTimeout = useRef(null);
    const ongoing = useRef(false);

    /* ================= CANVAS SETUP ================= */

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.lineWidth = 12;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";               // ✅ suavizado
        ctx.strokeStyle = "#111";
        ctx.imageSmoothingEnabled = true;     // ✅ suavizado

        ctxRef.current = ctx;
        newWord();
    }, []);

    const startLevel = () => {
        const shuffled = [...WORDS].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, WORDS_PER_LEVEL);

        setLevelWords(selected);
        setCurrentIndex(0);
        setTarget(selected[0]);
        clearCanvas();
    };
    const posFromEvent = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
        const y = (e.clientY ?? e.touches?.[0]?.clientY) - rect.top;
        return { x, y };
    };

    const handlePointerDown = (e) => {
        setDrawing(true);
        setLastPos(posFromEvent(e));
        canvasRef.current.setPointerCapture(e.pointerId);
        if (checkTimeout.current) {
            clearTimeout(checkTimeout.current);
            checkTimeout.current = null;
        }
    };

    const handlePointerMove = (e) => {
        if (!drawing) return;
        const ctx = ctxRef.current;
        const pos = posFromEvent(e);

        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();

        setLastPos(pos);
    };

    const handlePointerUp = (e) => {
        setDrawing(false);
        canvasRef.current.releasePointerCapture(e.pointerId);

        if (autoCheck) {
            checkTimeout.current = setTimeout(() => {
                check();
                checkTimeout.current = null;
            }, 1000);
        }
    };

    /* ================= LOGIC ================= */


    const newWord = () => {
        const w = WORDS[Math.floor(Math.random() * WORDS.length)];
        setTarget(w);
        setStatus('Dibuja la palabra y pulsa "Comprobar"');
        setState("neutral");
        clearCanvas();
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
        setRecognized("");
    };

    const isCanvasBlank = () => {
        const canvas = canvasRef.current;
        const blank = document.createElement("canvas");
        blank.width = canvas.width;
        blank.height = canvas.height;
        return canvas.toDataURL() === blank.toDataURL();
    };

    const check = async () => {
        if (ongoing.current) return;
        if (!target) return;

        if (isCanvasBlank()) {
            setStatus("Dibuja algo antes de comprobar.");
            setState("neutral");
            return;
        }

        ongoing.current = true;
        setStatus("Reconociendo texto...");
        setState("neutral");

        try {
            const result = await Tesseract.recognize(
                canvasRef.current,
                "eng",
                {
                    tessedit_char_whitelist: "abcdefghijklmnopqrstuvwxyz",
                    logger: m => console.log(m)
                }
            );

            const recognizedRaw = result.data.text || "";
            const recognized = recognizedRaw
                .toLowerCase()
                .replace(/[^a-z]/g, "")
                .trim();

            setRecognized(`Reconocido: ${recognized}`);

            const distance = levenshtein(recognized, target);
            const matches = distance <= tolerance;

            if (matches) {
                setStatus(`Correcto ✔ Coincide con "${target}"`);
                setState("correct");
            } else {
                setStatus(`Incorrecto ✖ (${recognized || "nada"})`);
                setState("incorrect");
            }

        } catch (err) {
            console.error(err);
            setStatus("Error al reconocer texto");
            setState("neutral");
        } finally {
            ongoing.current = false;
        }
    };


    /* ================= UI ================= */

    return (
        <div className="escritura-container">
            <button className="exit-btn" onClick={onExit}>← Salir</button>

            <h2>✍️ Nivel 7 – Escritura</h2>
            <p>
                Palabra a escribir: <span className="target">{target}</span>
            </p>

            <canvas
                ref={canvasRef}
                width={700}
                height={220}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
            />

            <div className="controls">
                <button onClick={newWord}>Nueva palabra</button>
                <button onClick={clearCanvas}>Limpiar</button>
                <button onClick={check}>Comprobar</button>

                <label>
                    Tolerancia:
                    <input
                        type="number"
                        min="0"
                        max="5"
                        value={tolerance}
                        onChange={(e) => setTolerance(Number(e.target.value))}
                    />
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={autoCheck}
                        onChange={(e) => setAutoCheck(e.target.checked)}
                    />
                    Auto-check
                </label>
                <button className="next-btn" onClick={onNextLevel}>
                    Menú
                </button>
            </div>

            <div className={`result ${state}`}>{status}</div>
            <div className="recognized">{recognized}</div>
        </div>

    );
    function levenshtein(a = "", b = "") {
        const matrix = Array.from({ length: b.length + 1 }, (_, i) =>
            Array(a.length + 1).fill(0)
        );

        for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
        for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

        for (let j = 1; j <= b.length; j++) {
            for (let i = 1; i <= a.length; i++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j - 1][i] + 1,
                    matrix[j][i - 1] + 1,
                    matrix[j - 1][i - 1] + cost
                );
            }
        }
        return matrix[b.length][a.length];
    }

}
