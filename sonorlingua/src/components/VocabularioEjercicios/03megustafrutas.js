import React, { useState, useEffect } from 'react'

const L03megustafrutas = ({ fileName, folder }) => {
    const [audios, setAudios] = useState([])

    useEffect(() => {
        const defaultAudios = [
            'A1-03-1-Likes-Food.mp3',
            'A1-03-2-Likes-Drinks.mp3',
            'A1-03-3-Likes-Desserts.mp3',
            'A1-03-4-Likes-Snacks.mp3',
            'A1-03-Likes-Fruits.mp3'
        ]

        fetch(`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-03'}/`)
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
                        <source src={`/Audio/SoundGrammar/A1-Audio/${folder || 'A1-03'}/${audio}`} type='audio/mp3' />
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            ))}
        </div>
    )
}

export default L03megustafrutas