import React, { useState, useEffect } from 'react'

const A1_11 = ({ fileName, folder }) => {
    const [audios, setAudios] = useState([])

    useEffect(() => {
        const defaultAudios = [
           'A1-11-1-Demonstratives-Book.mp3',
           'A1-11-2-Demonstratives-Jeans.mp3',
           'A1-11-3-Demonstratives-CoffeeMaker.mp3',
           'A1-11-4-Demonstratives-Table.mp3',
           'A1-11-Demonstratives.mp3'
        ]

        fetch('/Audio/SoundGrammar/A1-Audio/A1-11/')
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
                        <source src={`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-11'}/${audio}`} type='audio/mp3' />
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            ))}
        </div>
    )
}

export default A1_11