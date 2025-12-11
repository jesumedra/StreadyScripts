import React, { useState, useEffect } from 'react'

const L05VerboSiNopreguntas = ({ fileName, folder }) => {
    const [audios, setAudios] = useState([])

    useEffect(() => {
        const defaultAudios = [
           'A1-05-1-Verb-Yes-No-Questions-Sports.mp3',
           'A1-05-2-Verb-Yes-No-Questions-Pets.mp3',
           'A1-05-3-Verb-Yes-No-Questions-Cooking.mp3',
           'A1-05-4-Verb-Yes-No-Questions-Housing.mp3',
           'A1-05-Verb-Yes-No-Questions.mp3'
        ]

        fetch(`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-05'}/`)
            .then(r => r.text())
            .then(html => {
                const parser = new DOMParser()
                const doc = parser.parseFromString(html, 'text/html')
                const links = Array.from(doc.querySelectorAll('a'))
                    .map(a => a.href.split('/').pop())
                    .filter(f => f.endsWith('.mp3') || f.endsWith('.mp3/'))
                setAudios(links.length > 0 ? links : defaultAudios)
            })
            .catch(() => setAudios(defaultAudios))
    }, [])

    return (
        <div className='audio-list'>
            {audios.map((audio, idx) => (
                <div key={idx} className='audio-item'>
                    <p className='audio-title'>{audio.replace('.mp3', '')}</p>
                    <audio controls>
                        <source src={`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-05'}/${audio}`} type='audio/mp3' />
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            ))}
        </div>
    )
}

export default L05VerboSiNopreguntas