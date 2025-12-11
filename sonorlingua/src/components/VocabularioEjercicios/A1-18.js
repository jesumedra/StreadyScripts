import React, { useState, useEffect } from 'react'

const A1_18 = ({ fileName, folder }) => {
    const [audios, setAudios] = useState([])

    useEffect(() => {
        const defaultAudios = [
         'A1-18-1-Nationalities-Language.mp3',
         'A1-18-2-Nationalities-Food.mp3',
         'A1-18-3-Nationalities.mp3',
         'A1-18-4-Nationalities-Sport.mp3',
         'A1-18-Nationalities.mp3'
        ]

        fetch('/Audio/SoundGrammar/A1-Audio/A1-18/')
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
                        <source src={`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-18'}/${audio}`} type='audio/mp3' />
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            ))}
        </div>
    )
}

export default A1_18