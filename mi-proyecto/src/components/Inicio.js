import React, { useEffect } from 'react';
import sinfon2 from "./sinfon2.png";
const SteadyScript = () => {
  useEffect(() => {
    const scrollBtn = document.getElementById("scrollBtn");
    if (scrollBtn) {
      scrollBtn.addEventListener("click", () => {
        document.getElementById("content").scrollIntoView({
          behavior: "smooth"
        });
      });
    }

    // Cleanup
    return () => {
      if (scrollBtn) {
        scrollBtn.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Segoe UI', Arial, sans-serif;
        }
        body {
          margin: 0;
          background-color: #f0fdf4;
          color: #333;
          line-height: 1.6;
        }
        .hero {
          background: linear-gradient(135deg, #4ade80, #86efac);
          color: white;
          padding: 40px 20px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><path d="M0,100 Q300,200 600,100 T1200,100 L1200,400 L0,400 Z" fill="rgba(255,255,255,0.1)"/></svg>') no-repeat bottom;
          background-size: cover;
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .hero-logo-container {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
        }
        .hero-logo {
          width: 250px;
          max-width: 90%;
          height: auto;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
          clip-path: inset(20% 0 0 0);
          transform: scale(1.3);
        }
        @keyframes float {
          0%, 100% {
            transform: scale(1.3) translateY(0px);
          }
          50% {
            transform: scale(1.3) translateY(-10px);
          }
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        .hero p {
          font-size: 1.2rem;
          margin-bottom: 10px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        .hero button {
          background-color: white;
          color: #22c55e;
          border: none;
          padding: 12px 25px;
          font-size: 1rem;
          border-radius: 25px;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          font-weight: 600;
        }
        .hero button:hover {
          background-color: #dcfce7;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        main {
          max-width: 100%;
          margin: 0;
          padding: 30px 40px;
        }
        section {
          background: white;
          margin-bottom: 25px;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(34, 197, 94, 0.1);
          transition: transform 0.3s ease;
          border: 1px solid #d1fae5;
          width: 100%;
        }
        section:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(34, 197, 94, 0.15);
        }
        section h2 {
          color: #16a34a;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-icon {
          font-size: 2rem;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 8px;
        }
        .highlight {
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
          border-left: 4px solid #22c55e;
        }
        .image-container {
          text-align: center;
          margin: 20px 0;
        }
        .image-placeholder {
          background: linear-gradient(135deg, #d1fae5, #a7f3d0);
          border-radius: 8px;
          padding: 40px;
          margin: 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          font-size: 4rem;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
          width: 100%;
        }
        .feature-card {
          background: #f0fdf4;
          padding: 25px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(34, 197, 94, 0.1);
          border: 1px solid #bbf7d0;
        }
        .feature-card-icon {
          font-size: 3rem;
          margin-bottom: 10px;
        }
        .subsection {
          background: #f0fdf4;
          padding: 20px;
          border-radius: 8px;
          margin: 15px 0;
          border-left: 3px solid #22c55e;
          width: 100%;
        }
        .subsection h3 {
          color: #16a34a;
          margin-top: 0;
          font-size: 1.2rem;
        }
        .info-box {
          background: #ecfdf5;
          padding: 20px;
          border-radius: 8px;
          margin: 15px 0;
          border: 2px solid #a7f3d0;
          width: 100%;
        }
        .info-box strong {
          color: #16a34a;
        }
        footer {
          text-align: center;
          padding: 20px;
          background-color: #22c55e;
          color: white;
          width: 100%;
        }
        
        @media (max-width: 768px) {
          main {
            padding: 20px 15px;
          }
          section {
            padding: 20px;
          }
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="hero">
        <div className="hero-content">
          <div className="hero-logo-container">
            <img src={sinfon2} alt="Mascota de SteadyScript" className="hero-logo" />
          </div>
          <h1>SteadyScript</h1>
          <p>Aprender inglés de forma accesible y amigable para personas con disgrafía</p>
          <button id="scrollBtn">Conocer más</button>
        </div>
      </header>
      
      <main id="content">
        <section>
          <h2><span className="section-icon">🧠</span> ¿Qué es la disgrafía?</h2>
          <div className="image-placeholder">🖊️</div>
          <p>
            La disgrafía es un trastorno del aprendizaje que afecta la capacidad de escribir
            de manera clara y ordenada. No está relacionada con la inteligencia, sino con la
            coordinación y procesamiento motor y cognitivo.
          </p>
          
          <div className="info-box">
            <strong>📊 Datos importantes:</strong>
            <p>Se estima que entre el 5% y el 20% de la población tiene algún grado de disgrafía. Este trastorno puede aparecer en la infancia y persistir hasta la edad adulta si no se aborda adecuadamente.</p>
          </div>

          <div className="subsection">
            <h3>🔍 Características principales</h3>
            <ul>
              <li><strong>No es un problema de inteligencia:</strong> Las personas con disgrafía tienen capacidades cognitivas normales o incluso superiores</li>
              <li><strong>Afecta la expresión escrita:</strong> La dificultad se centra específicamente en el acto de escribir, no en comprender o pensar</li>
              <li><strong>Puede coexistir con otros trastornos:</strong> A menudo se presenta junto con dislexia, TDAH o dispraxia</li>
              <li><strong>Es un trastorno persistente:</strong> Requiere intervención y estrategias de apoyo continuas</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>📖 Historia y reconocimiento</h3>
            <p>La disgrafía fue reconocida formalmente como un trastorno de aprendizaje en el siglo XX. Antes de esto, muchos niños con disgrafía eran erróneamente etiquetados como "perezosos" o "descuidados". Hoy en día, gracias a la investigación neurocientífica, entendemos que es una diferencia neurológica legítima que requiere adaptaciones educativas específicas.</p>
          </div>
        </section>
        
        <section>
          <h2><span className="section-icon">🔍</span> Causas</h2>
          <p>La disgrafía tiene múltiples causas, y en muchos casos, es resultado de una combinación de factores neurológicos, genéticos y del desarrollo.</p>
          
          <div className="subsection">
            <h3>🧬 Factores neurológicos</h3>
            <ul>
              <li><strong>Diferencias en la estructura cerebral:</strong> Estudios de neuroimagen han mostrado diferencias en las áreas del cerebro responsables de la escritura y coordinación motora</li>
              <li><strong>Problemas de conectividad neuronal:</strong> La comunicación entre diferentes regiones cerebrales puede estar afectada</li>
              <li><strong>Disfunción en el procesamiento sensoriomotor:</strong> Dificultad para integrar la información visual, motora y espacial necesaria para escribir</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>✋ Problemas de motricidad fina</h3>
            <ul>
              <li><strong>Coordinación ojo-mano deficiente:</strong> Dificultad para sincronizar lo que se ve con los movimientos de la mano</li>
              <li><strong>Control muscular limitado:</strong> Problemas para controlar los pequeños músculos de la mano y dedos</li>
              <li><strong>Dificultad con el agarre del lápiz:</strong> Forma incorrecta o incómoda de sostener instrumentos de escritura</li>
              <li><strong>Fatiga muscular rápida:</strong> Los músculos se cansan más rápido de lo normal al escribir</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>⚖️ Desarrollo cognitivo</h3>
            <ul>
              <li><strong>Memoria de trabajo limitada:</strong> Dificultad para mantener información mientras se escribe</li>
              <li><strong>Problemas de planificación:</strong> Dificultad para organizar y secuenciar pensamientos antes de escribir</li>
              <li><strong>Procesamiento lento:</strong> Necesita más tiempo para procesar información y traducirla a forma escrita</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>🧪 Factores genéticos y ambientales</h3>
            <ul>
              <li><strong>Herencia familiar:</strong> La disgrafía tiende a presentarse en familias, sugiriendo un componente genético</li>
              <li><strong>Lesiones cerebrales tempranas:</strong> Trauma o daño cerebral en etapas tempranas del desarrollo</li>
              <li><strong>Falta de estimulación temprana:</strong> Ausencia de actividades que desarrollen la motricidad fina en la infancia</li>
              <li><strong>Nacimiento prematuro:</strong> Mayor riesgo en bebés nacidos antes de término</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2><span className="section-icon">⚠️</span> Síntomas principales</h2>
          <div className="image-placeholder">📝</div>
          <p>Los síntomas de la disgrafía pueden variar en intensidad y manifestarse de diferentes maneras según la edad y el tipo de disgrafía.</p>

          <div className="subsection">
            <h3>✍️ Síntomas de escritura</h3>
            <ul>
              <li>📄 <strong>Letra ilegible o inconsistente:</strong> La escritura es difícil de leer, incluso para la propia persona</li>
              <li>📏 <strong>Tamaño irregular de letras:</strong> Mezcla de letras grandes y pequeñas sin control</li>
              <li>↔️ <strong>Espaciado incorrecto:</strong> Espacios desiguales entre letras, palabras o líneas</li>
              <li>🔄 <strong>Mezcla de mayúsculas y minúsculas:</strong> Uso inconsistente dentro de la misma palabra</li>
              <li>⬆️ <strong>Escritura que sube o baja:</strong> Incapacidad para mantener la línea recta</li>
              <li>🔀 <strong>Omisión o adición de letras:</strong> Falta de letras o repetición de las mismas</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>🤔 Síntomas cognitivos y de proceso</h3>
            <ul>
              <li>⏱️ <strong>Escritura muy lenta:</strong> Toma mucho más tiempo que sus compañeros para escribir</li>
              <li>🧠 <strong>Dificultad para concentrarse al escribir:</strong> Pierde el hilo de sus pensamientos</li>
              <li>💭 <strong>Problemas para organizar ideas:</strong> Dificultad para estructurar párrafos y oraciones</li>
              <li>❌ <strong>Errores gramaticales frecuentes:</strong> Puntuación incorrecta, tiempos verbales inconsistentes</li>
              <li>🗣️ <strong>Discrepancia oral-escrita:</strong> Puede expresar ideas verbalmente pero no por escrito</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>💪 Síntomas físicos y motores</h3>
            <ul>
              <li>😓 <strong>Cansancio rápido al escribir:</strong> Fatiga muscular después de escribir poco tiempo</li>
              <li>✊ <strong>Agarre incorrecto del lápiz:</strong> Sostiene el lápiz de forma extraña o con demasiada fuerza</li>
              <li>😣 <strong>Tensión o dolor:</strong> Molestias en mano, muñeca o brazo al escribir</li>
              <li>📐 <strong>Postura corporal inadecuada:</strong> Se inclina demasiado o adopta posturas incómodas</li>
              <li>👁️ <strong>Observa constantemente su mano:</strong> Necesita mirar de cerca mientras escribe</li>
            </ul>
          </div>

          <div className="info-box">
            <strong>⚡ Importante:</strong>
            <p>No todas las personas con disgrafía presentan todos estos síntomas. Cada caso es único y requiere una evaluación individualizada. Si identificas varios de estos síntomas de forma persistente, es recomendable consultar con un especialista.</p>
          </div>
        </section>
        
        <section>
          <h2><span className="section-icon">📋</span> Tipos de disgrafía</h2>
          <p>Existen diferentes clasificaciones de la disgrafía según las áreas afectadas. Conocer el tipo específico ayuda a diseñar estrategias de intervención más efectivas.</p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card-icon">🤚</div>
              <strong>Disgrafía motriz</strong>
              <p>Dificultad para coordinar los movimientos</p>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon">✏️</div>
              <strong>Disgrafía específica</strong>
              <p>Errores en la escritura y ortografía</p>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon">🗺️</div>
              <strong>Disgrafía espacial</strong>
              <p>Mala organización en el espacio</p>
            </div>
          </div>

          <div className="subsection">
            <h3>🤚 Disgrafía motriz (Disgrafía caligráfica)</h3>
            <p><strong>Características principales:</strong></p>
            <ul>
              <li>Problema principalmente en la ejecución motora del acto de escribir</li>
              <li>La persona comprende las reglas ortográficas pero no puede escribir legiblemente</li>
              <li>Tensión excesiva al sostener el lápiz</li>
              <li>Letras mal formadas o distorsionadas</li>
              <li>Velocidad de escritura muy lenta</li>
              <li>Fatiga rápida de la mano</li>
            </ul>
            <p><strong>Estrategias de apoyo:</strong> Ejercicios de motricidad fina, trazos en arena o arcilla, uso de plantillas, aumentar el grosor del lápiz, ejercicios de relajación muscular.</p>
          </div>

          <div className="subsection">
            <h3>✏️ Disgrafía específica (Disgrafía disléxica)</h3>
            <p><strong>Características principales:</strong></p>
            <ul>
              <li>Dificultad en la codificación fonológica (sonido-letra)</li>
              <li>Escritura espontánea ilegible o con muchos errores</li>
              <li>Puede copiar texto correctamente pero falla al escribir libremente</li>
              <li>Errores ortográficos frecuentes (sustitución, omisión de letras)</li>
              <li>A menudo coexiste con dislexia</li>
              <li>La letra puede ser legible pero con errores de contenido</li>
            </ul>
            <p><strong>Estrategias de apoyo:</strong> Entrenamiento fonológico, uso de correctores ortográficos, dictado a voz, mapas mentales, tiempo extra para revisar.</p>
          </div>

          <div className="subsection">
            <h3>🗺️ Disgrafía espacial</h3>
            <p><strong>Características principales:</strong></p>
            <ul>
              <li>Dificultad para percibir y organizar el espacio en el papel</li>
              <li>Problemas con márgenes, sangrías y espacios entre palabras</li>
              <li>Dificultad para mantenerse en la línea</li>
              <li>Tamaño de letra muy inconsistente</li>
              <li>Puede tener dificultades con las matemáticas (alinear números)</li>
              <li>Confusión con letras de orientación similar (b/d, p/q)</li>
            </ul>
            <p><strong>Estrategias de apoyo:</strong> Papel con líneas de colores, papel cuadriculado para matemáticas, guías visuales, aumentar el espacio de escritura, ejercicios de percepción espacial.</p>
          </div>

          <div className="info-box">
            <strong>🔄 Disgrafía mixta:</strong>
            <p>Muchas personas experimentan una combinación de estos tipos. Por ejemplo, pueden tener tanto problemas motores como de procesamiento espacial. Un diagnóstico profesional puede identificar las áreas específicas que necesitan apoyo.</p>
          </div>
        </section>
        
        <section>
          <h2><span className="section-icon">🇬🇧</span> ¿Cómo afecta al aprendizaje del inglés?</h2>
          <div className="image-placeholder">🌍📖</div>
          <p>
            La disgrafía puede dificultar la escritura de palabras en inglés, la ortografía
            y la producción de oraciones. Esto puede generar frustración si no se usan
            herramientas adaptadas.
          </p>
          
          <div className="subsection">
            <h3>📝 Desafíos específicos con el inglés</h3>
            <ul>
              <li><strong>Ortografía irregular:</strong> El inglés tiene muchas excepciones ortográficas que pueden confundir a personas con disgrafía (ej: "through", "enough", "knight", "colonel")</li>
              <li><strong>Diferencias entre pronunciación y escritura:</strong> Las palabras no siempre se escriben como suenan, lo que dificulta la transcripción (ej: "psychology" se pronuncia sin la "p" inicial)</li>
              <li><strong>Gramática compleja:</strong> Tiempos verbales irregulares, preposiciones y estructuras sintácticas pueden ser difíciles de escribir correctamente</li>
              <li><strong>Vocabulario extenso:</strong> Memorizar y escribir palabras nuevas requiere más esfuerzo, especialmente con letras mudas</li>
              <li><strong>Homófonos:</strong> Palabras que suenan igual pero se escriben diferente (their/there/they're, to/too/two)</li>
              <li><strong>Phrasal verbs:</strong> Combinaciones de verbos con preposiciones que cambian completamente el significado</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>💪 Impacto emocional y académico</h3>
            <ul>
              <li><strong>Frustración:</strong> La dificultad constante puede disminuir la motivación para aprender y crear resistencia al inglés</li>
              <li><strong>Ansiedad:</strong> El miedo a cometer errores puede inhibir la participación en clase y en exámenes escritos</li>
              <li><strong>Baja autoestima:</strong> Compararse con compañeros que escriben con facilidad puede afectar la confianza personal</li>
              <li><strong>Evitación de tareas escritas:</strong> Tendencia a evitar actividades que requieren escritura, limitando oportunidades de práctica</li>
              <li><strong>Menor rendimiento académico:</strong> Las calificaciones pueden no reflejar el verdadero conocimiento del idioma</li>
              <li><strong>Agotamiento mental:</strong> Escribir requiere tanto esfuerzo que queda poca energía para otras tareas</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>✨ Fortalezas que se pueden aprovechar</h3>
            <ul>
              <li><strong>Comprensión auditiva:</strong> Muchas personas con disgrafía tienen excelente capacidad de escucha y pueden entender podcasts, canciones y conversaciones</li>
              <li><strong>Expresión oral:</strong> Pueden comunicarse verbalmente de manera efectiva y participar en debates y presentaciones</li>
              <li><strong>Pensamiento creativo:</strong> La disgrafía no afecta la creatividad ni el razonamiento, pueden ser excelentes contadores de historias</li>
              <li><strong>Habilidades visuales:</strong> El aprendizaje con imágenes, videos y material visual puede ser muy efectivo</li>
              <li><strong>Uso de tecnología:</strong> Muchos se adaptan rápidamente a herramientas tecnológicas de apoyo</li>
              <li><strong>Perseverancia:</strong> Desarrollan gran determinación y estrategias compensatorias</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>🎯 Estrategias específicas para aprender inglés</h3>
            <ul>
              <li><strong>Priorizar lo oral:</strong> Enfocarse primero en comprensión y expresión oral antes que en escritura perfecta</li>
              <li><strong>Usar reconocimiento de voz:</strong> Dictar textos en lugar de escribirlos a mano</li>
              <li><strong>Aplicaciones interactivas:</strong> Duolingo, Babbel, y apps similares con componentes visuales y auditivos</li>
              <li><strong>Flashcards visuales:</strong> Tarjetas con imágenes para asociar palabras sin necesidad de escribir</li>
              <li><strong>Videos con subtítulos:</strong> YouTube, Netflix en inglés con subtítulos para reforzar ortografía pasivamente</li>
              <li><strong>Grabaciones de audio:</strong> Grabar respuestas orales en lugar de escribirlas</li>
              <li><strong>Mapas mentales digitales:</strong> Usar herramientas como MindMeister para organizar vocabulario visualmente</li>
              <li><strong>Correctores inteligentes:</strong> Grammarly, LanguageTool para ayudar con la escritura</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2><span className="section-icon">🩺</span> Diagnóstico</h2>
          <div className="image-placeholder">👨‍⚕️</div>
          <p>
            El diagnóstico de la disgrafía es un proceso integral que requiere evaluación profesional. Es importante realizarlo tempranamente para implementar las intervenciones adecuadas.
          </p>

          <div className="subsection">
            <h3>👥 Profesionales involucrados</h3>
            <ul>
              <li><strong>Psicólogo educativo:</strong> Evalúa aspectos cognitivos y de aprendizaje</li>
              <li><strong>Neuropsicólogo:</strong> Examina funciones cerebrales y procesos neurológicos</li>
              <li><strong>Terapeuta ocupacional:</strong> Evalúa habilidades motoras finas y coordinación</li>
              <li><strong>Pedagogo/Maestro especialista:</strong> Observa el desempeño en contextos escolares</li>
              <li><strong>Logopeda/Fonoaudiólogo:</strong> Evalúa aspectos del lenguaje relacionados</li>
              <li><strong>Médico neurólogo (en algunos casos):</strong> Descarta causas neurológicas subyacentes</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>📋 Proceso de evaluación</h3>
            <p><strong>1. Historia clínica y entrevista inicial:</strong></p>
            <ul>
              <li>Entrevista con padres/tutores sobre desarrollo del niño</li>
              <li>Historia médica y académica</li>
              <li>Antecedentes familiares de trastornos de aprendizaje</li>
              <li>Descripción de las dificultades observadas</li>
            </ul>

            <p><strong>2. Pruebas estandarizadas:</strong></p>
            <ul>
              <li>Test de habilidades de escritura</li>
              <li>Evaluación de motricidad fina</li>
              <li>Pruebas de percepción visual-espacial</li>
              <li>Evaluación de velocidad de procesamiento</li>
              <li>Tests de memoria de trabajo</li>
              <li>Evaluación de ortografía y gramática</li>
            </ul>

            <p><strong>3. Observación directa:</strong></p>
            <ul>
              <li>Observar al estudiante escribiendo en diferentes contextos</li>
              <li>Analizar muestras de escritura (copiar, dictar, escritura libre)</li>
              <li>Evaluar la postura, agarre del lápiz y fatiga</li>
              <li>Observar estrategias compensatorias que usa</li>
            </ul>

            <p><strong>4. Evaluación diferencial:</strong></p>
            <ul>
              <li>Descartar problemas visuales o auditivos</li>
              <li>Diferenciar de otros trastornos (dislexia, TDAH, dispraxia)</li>
              <li>Evaluar si hay trastornos coexistentes</li>
              <li>Considerar factores emocionales o ambientales</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>⏰ ¿Cuándo buscar evaluación?</h3>
            <p>Es recomendable buscar evaluación profesional si se observan estos signos persistentes:</p>
            <ul>
              <li>El niño tiene 7+ años y su escritura no mejora con la práctica</li>
              <li>Hay una gran discrepancia entre habilidades orales y escritas</li>
              <li>La escritura causa frustración extrema o rechazo escolar</li>
              <li>Los problemas de escritura afectan el rendimiento en múltiples materias</li>
              <li>Se observa fatiga física excesiva al escribir</li>
              <li>Hay antecedentes familiares de trastornos de aprendizaje</li>
            </ul>
          </div>

          <div className="info-box">
            <strong>📝 Después del diagnóstico:</strong>
            <p>Un diagnóstico formal permite acceder a adaptaciones escolares, como tiempo extra en exámenes, uso de computadora, reducción de tareas escritas, y apoyo de educación especial. También abre la puerta a terapias específicas y herramientas tecnológicas apropiadas.</p>
          </div>
        </section>
        
        <section className="highlight">
          <h2><span className="section-icon">💡</span> Tratamientos y estrategias de apoyo</h2>
          <div className="image-placeholder">🎯</div>
          <p>Aunque la disgrafía es un trastorno persistente, existen múltiples estrategias y tratamientos que pueden ayudar significativamente a mejorar la escritura y reducir la frustración.</p>

          <div className="subsection">
            <h3>🏥 Intervenciones terapéuticas</h3>
            <p><strong>Terapia ocupacional:</strong></p>
            <ul>
              <li>Ejercicios para fortalecer músculos de la mano y dedos</li>
              <li>Práctica de agarre correcto del lápiz</li>
              <li>Actividades de coordinación ojo-mano</li>
              <li>Ejercicios de motricidad fina (moldear arcilla, ensartar cuentas)</li>
              <li>Trabajo en postura corporal adecuada</li>
            </ul>

            <p><strong>Terapia educativa especializada:</strong></p>
            <ul>
              <li>Enseñanza multisensorial de la escritura (visual, auditiva, kinestésica)</li>
              <li>Método de trazado de letras en diferentes texturas</li>
              <li>Práctica sistemática de patrones de escritura</li>
              <li>Estrategias de planificación y organización de textos</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>💻 Herramientas tecnológicas</h3>
            <ul>
              <li>📱 <strong>Aplicaciones educativas accesibles:</strong> Apps diseñadas para aprendizaje multisensorial</li>
              <li>⌨️ <strong>Software de procesamiento de texto:</strong> Word, Google Docs con correctores ortográficos</li>
              <li>🎤 <strong>Reconocimiento de voz:</strong> Dragon NaturallySpeaking, dictado de Google, Siri</li>
              <li>📖 <strong>Lectores de texto:</strong> Para revisar lo escrito escuchándolo</li>
              <li>✏️ <strong>Lápices digitales:</strong> Stylus para tablets que facilitan la escritura</li>
              <li>🖱️ <strong>Predictores de texto:</strong> Sugieren palabras mientras se escribe</li>
              <li>📝 <strong>Organizadores gráficos digitales:</strong> Inspiration, MindManager para planificar textos</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>👂 Ejercicios multisensoriales</h3>
            <ul>
              <li><strong>Escribir en arena o espuma:</strong> Trazar letras en diferentes texturas para memoria muscular</li>
              <li><strong>Letras en movimiento:</strong> Formar letras con el cuerpo o en el aire</li>
              <li><strong>Arcilla o plastilina:</strong> Moldear letras en 3D</li>
              <li><strong>Pinturas de dedos:</strong> Escribir con diferentes materiales</li>
              <li><strong>Tableros de tiza grandes:</strong> Escribir en superficies verticales para fortalecer músculos</li>
              <li><strong>Aplicaciones táctiles:</strong> Apps que combinan toque, sonido y visual</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>🔊 Aprendizaje basado en audio y repetición</h3>
            <ul>
              <li>Escuchar audiolibros mientras se lee el texto</li>
              <li>Grabarse leyendo y escuchar para autocorregirse</li>
              <li>Uso de podcasts educativos</li>
              <li>Repetición espaciada de vocabulario con audio</li>
              <li>Canciones y rimas para memorizar reglas ortográficas</li>
              <li>Instrucciones verbales en lugar de escritas</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>🔤 Adaptaciones en la escritura</h3>
            <ul>
              <li><strong>Tipografías claras y amigables:</strong> Comic Sans, OpenDyslexic, Arial con espaciado amplio</li>
              <li><strong>Papel con líneas especiales:</strong> Papel con líneas de colores, líneas elevadas, papel cuadriculado</li>
              <li><strong>Lápices adaptados:</strong> Lápices gruesos, con agarres especiales, lápices triangulares</li>
              <li><strong>Superficies inclinadas:</strong> Atriles o carpetas con ángulo para escribir</li>
              <li><strong>Papel sin restricciones:</strong> Permitir usar más espacio del necesario</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>⏱️ Ajustes en el ritmo de aprendizaje</h3>
            <ul>
              <li>Tiempo extra en exámenes y tareas</li>
              <li>Reducción de la cantidad de escritura requerida</li>
              <li>Evaluaciones orales como alternativa</li>
              <li>Permitir respuestas más cortas pero completas</li>
              <li>Descansos frecuentes durante tareas de escritura</li>
              <li>Dividir trabajos largos en partes más pequeñas</li>
              <li>No penalizar errores ortográficos si el contenido es correcto</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>🏫 Adaptaciones en el aula</h3>
            <ul>
              <li>Proporcionar apuntes impresos en lugar de copiar del pizarrón</li>
              <li>Permitir uso de computadora o tablet para escribir</li>
              <li>Compañero que comparta sus apuntes</li>
              <li>Grabar las clases para revisarlas después</li>
              <li>Proyectos multimedia en lugar de ensayos escritos</li>
              <li>Presentaciones orales con apoyo visual mínimo</li>
              <li>Evaluación del contenido, no de la forma de escritura</li>
            </ul>
          </div>

          <div className="info-box">
            <strong>🌟 SteadyScript: Solución integral</strong>
            <p><strong>SteadyScript</strong> integra todas estas estrategias en una sola plataforma para facilitar el aprendizaje del inglés de forma inclusiva. Nuestra app combina:</p>
            <ul>
              <li>✅ Reconocimiento de voz para dictar respuestas</li>
              <li>✅ Ejercicios interactivos multisensoriales</li>
              <li>✅ Contenido principalmente visual y auditivo</li>
              <li>✅ Tipografía optimizada para legibilidad</li>
              <li>✅ Ritmo personalizado para cada estudiante</li>
              <li>✅ Recompensas por esfuerzo, no solo por perfección</li>
              <li>✅ Apoyo continuo con retroalimentación positiva</li>
            </ul>
          </div>
        </section>
      </main>
      
      <footer>
        <p>© 2025 SteadyScript | Educación inclusiva 🌟</p>
      </footer>
    </div>
  );
};

export default SteadyScript;