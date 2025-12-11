import React, { useState, useEffect } from "react";

const A1_04_Verbos_Manana = ({ fileName, folder }) => {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    const defaultAudios = [
      "A1-04-1-Verbs-Morning.mp3",
      "A1-04-2-Verbs-Morning-House.mp3",
      "A1-04-3-Verbs-Lunch.mp3",
      "A1-04-4-Verbs-Weekend.mp3",
      "A1-04-Verbs.mp3",
    ];

    fetch(`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-04'}/`)
      .then((r) => r.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const links = Array.from(doc.querySelectorAll("a"))
          .map((a) => a.href.split("/").pop())
          .filter((f) => f.endsWith(".mp3") || f.endsWith(".mp3/"));
        setAudios(links.length > 0 ? links : defaultAudios);
      })
      .catch(() => setAudios(defaultAudios));
  }, [folder]);

  return (
    <div className="introduccion">
      <div className="audio-list">
        {audios.map((audio, idx) => (
          <div key={idx} className="audio-item">
            <p className="audio-title">{audio.replace(".mp3", "")}</p>
            <audio controls>
              <source
                src={`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-04'}/${audio}`}
                type="audio/mp3"
              />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default A1_04_Verbos_Manana;
