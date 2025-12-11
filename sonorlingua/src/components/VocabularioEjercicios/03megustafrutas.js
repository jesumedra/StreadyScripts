<<<<<<< HEAD
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
=======
import React from 'react';
import '../../styles/vocabulario.css';

const introductionAudio = 'A1-03-Likes-Fruits.mp3';

const conversationData = [
  {
    id: 1,
    audioFile: 'A1-03-1-Likes-Food.mp3',
    title: 'Conversación 1',
    transcript: (
      <p>
        Hombre: Entonces, ¿qué alimentos te gustan? <br />
        Mujer: Me gusta el helado, la pizza y las manzanas. <br />
        Hombre: Oh, a mí también me gustan esas comidas. <br />
        Mujer: ¿Qué alimentos te gustan? <br />
        Hombre: Me gusta el pescado, las verduras y los plátanos. <br />
        Mujer: ¿Juntos? <br />
        Hombre: ¡No, no juntos!
      </p>
    ),
  },
  {
    id: 2,
    audioFile: 'A1-03-2-Likes-Drinks.mp3',
    title: 'Conversación 2',
    transcript: (
      <p>
        Hombre: ¿Qué bebidas te gustan? <br />
        Mujer: Me gusta el té y me gusta el zumo. <br />
        Hombre: Uy, ¿té caliente o té frío? <br />
        Mujer: Ambos. ¿Y tú? <br />
        Hombre: Me gusta el café y el chocolate caliente. <br />
        Mujer: ¡Uy, a mí también me gustan ambos!
      </p>
    ),
  },
  {
    id: 3,
    audioFile: 'A1-03-3-Likes-Desserts.mp3',
    title: 'Conversación 3',
    transcript: (
      <p>
        Hombre: ¿Qué postres te gustan? <br />
        Mujer: Me gusta mucho el helado. <br />
        Hombre: ¡Oh! ¿Qué sabor te gusta? <br />
        Mujer: Hmm, me gusta la fresa. A mí también me gusta la vainilla. <br />
        Hombre: ¡Genial! Me gusta la tarta y me gusta la tarta. <br />
        Mujer: ¿Qué tipo de tarta? <br />
        Hombre: Me gusta mucho la tarta de manzana con helado. <br />
        Mujer: ¡Qué rico!
      </p>
    ),
  },
  {
    id: 4,
    audioFile: 'A1-03-4-Likes-Snacks.mp3',
    title: 'Conversación 4',
    transcript: (
      <p>
        Hombre: ¿Qué tentempiés te gustan? <br />
        Mujer: Me gusta comer fruta. <br />
        Hombre: ¿Ah, sí? ¿Y qué frutas te gustan? <br />
        Mujer: Me gustan las manzanas y las naranjas. ¿Y tú? <br />
        Hombre: Me gustan las fresas y la sandía. <br />
        Mujer: ¿Te gusta comer galletas? <br />
        Hombre: ¡Por supuesto! Me encantan las galletas con chispas de chocolate. <br />
        Mujer: ¡Yo también!
      </p>
    ),
  },
];

const A1_03_MeGustaFrutas = () => {
  return (
    <div className='introduccion'>
      <div className='introduccion-header'>
        <h2 className='introduccion-title'>Expresando Gustos con "Like"</h2>
        <h4 className='introduccion-subtitle'>En este ejercicio, aprenderemos a usar el verbo "like" para hablar de las cosas que nos gustan.</h4>
        <h4 className='introduccion-subtitle'>Practicaremos con vocabulario de comidas, bebidas, postres y snacks.</h4>
        <div className='audio-item'>
            <p className='audio-title'>{introductionAudio.replace('.mp3', '').replace(/-/g, ' ')}</p>
            <audio controls>
              <source
                src={`/Audio/SoundGrammar/A1-Audio/A1-03/${introductionAudio}`}
                type='audio/mp3'
              />
              Your browser does not support the audio tag.
            </audio>
        </div>
      </div>

      <div className='conversations-container'>
        {conversationData.map((convo) => (
          <div key={convo.id} className='conversation-block'>
            <h2>{convo.title}</h2>
            <div className='audio-item'>
              <p className='audio-title'>{convo.audioFile.replace('.mp3', '').replace(/-/g, ' ')}</p>
              <audio controls>
                <source
                  src={`/Audio/SoundGrammar/A1-Audio/A1-03/${convo.audioFile}`}
                  type='audio/mp3'
                />
                Your browser does not support the audio tag.
              </audio>
            </div>
            <div className='transcript'>
              {convo.transcript}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default A1_03_MeGustaFrutas;
>>>>>>> 68b0992 (agrego A1-02, A1-03, A1-04)
