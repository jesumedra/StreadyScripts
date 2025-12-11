import React, { useState, useEffect } from 'react'

const A1_13 = ({ fileName, folder }) => {
    const [audios, setAudios] = useState([])

    useEffect(() => {
        const defaultAudios = [
           'A1-13-1-Months-Seasons.mp3',
           'A1-13-2-Months-Seasons.mp3',
           'A1-13-3-Months-Birthday.mp3',
           'A1-13-4-Months-Weather.mp3',
           'A1-13-Months.mp3'
        ]

        fetch(`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-13'}/`)
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
    }, [folder])

    return (
        <div className='A1-13'>
            <div className='audio-list'>
                {audios.map((audio, idx) => (
                    <div key={idx} className='audio-item'>
                        <p className='audio-title'>{audio.replace('.mp3', '')}</p>
                        <audio controls>
                            <source src={`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-13'}/${audio}`} type='audio/mp3' />
                            Your browser does not support the audio tag.
                        </audio>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default A1_13