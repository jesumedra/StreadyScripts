import React from 'react';
import '../../styles/vocabulario.css';

const conversations = [
    {
        id: 1,
        title: "A1-10-1-Object-Pronouns-Help",
        audio: "/Audio/SoundGrammar/A1-Audio/A1-10/A1-10-1-Object-Pronouns-Help.mp3",
        english: [
            "Man: Did you call me?",
            "Woman: Yes, I called you. Can you help me today?",
            "Man: Sure, how can I help you?",
            "Woman: Can you take me to school?",
            "Man: Okay, I can pick you up at 10.",
            "Woman: Great! See you then."
        ],
        spanish: [
            "Hombre: ¿Me has llamado?",
            "Mujer: Sí, te llamé. ¿Puedes ayudarme hoy?",
            "Hombre: Claro, ¿en qué puedo ayudarte?",
            "Mujer: ¿Puedes llevarme al colegio?",
            "Hombre: Vale, puedo recogerte a las 10.",
            "Mujer: ¡Genial! Nos vemos entonces."
        ]
    },
    {
        id: 2,
        title: "A1-10-2-Object-Pronouns-Friend",
        audio: "/Audio/SoundGrammar/A1-Audio/A1-10/A1-10-2-Object-Pronouns-Friend.mp3",
        english: [
            "Man: Who is your best friend?",
            "Woman: My best friend is Sue.",
            "Man: Do you talk to her every day?",
            "Woman: Yes, I see her at school. I always meet her for lunch.",
            "Man: Why do you like her?",
            "Woman: She is kind and fun! She makes me laugh."
        ],
        spanish: [
            "Hombre: ¿Quién es tu mejor amigo?",
            "Mujer: Mi mejor amiga es Sue.",
            "Hombre: ¿Hablas con ella todos los días?",
            "Mujer: Sí, la veo en el colegio. Siempre quedo con ella para comer.",
            "Hombre: ¿Por qué te gusta?",
            "Mujer: ¡Es amable y divertida! Me hace reír."
        ]
    },
    {
        id: 3,
        title: "A1-10-3-Object-Pronouns-Teacher",
        audio: "/Audio/SoundGrammar/A1-Audio/A1-10/A1-10-3-Object-Pronouns-Teacher.mp3",
        english: [
            "Man: Who is your teacher?",
            "Woman: My teacher is Mr. Wilson. I like him a lot.",
            "Man: Why do you like him?",
            "Woman: Well, he is kind and always helps me with my homework.",
            "Man: Sounds good.",
            "Woman: Yes. We all love him."
        ],
        spanish: [
            "Hombre: ¿Quién es tu profesor?",
            "Mujer: Mi profesor es el señor Wilson. Me gusta mucho.",
            "Hombre: ¿Por qué te gusta?",
            "Mujer: Bueno, es amable y siempre me ayuda con los deberes.",
            "Hombre: Suena bien.",
            "Mujer: Sí. Todos le queremos."
        ]
    },
    {
        id: 4,
        title: "A1-10-4-Object-Pronouns-Keys",
        audio: "/Audio/SoundGrammar/A1-Audio/A1-10/A1-10-4-Object-Pronouns-Keys.mp3",
        english: [
            "Man: Do you have my keys?",
            "Woman: No. I put them on the table.",
            "Man: Oh, great. I see them. What about my wallet?",
            "Woman: I think you left it on the counter.",
            "Man: Really, I don't see it."
        ],
        spanish: [
            "Hombre: ¿Tienes mis llaves?",
            "Mujer: No. Las puse sobre la mesa.",
            "Hombre: Ah, genial. Los veo. ¿Y mi cartera?",
            "Mujer: Creo que lo dejaste en la encimera.",
            "Hombre: De verdad, no lo veo."
        ]
    }
];

const A1_10_PronombresObjeto = () => {
    return (
        <div className="container-vocabulario">
            <h1>Object Pronouns</h1>
            {conversations.map(conv => (
                <div key={conv.id} className="conversation-container">
                    <h2>{conv.title}</h2>
                    <div className="audio-column">
                        <audio controls>
                            <source src={conv.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    <div className="text-column">
                        <h3>English</h3>
                        {conv.english.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                    <div className="text-column">
                        <h3>Spanish</h3>
                        {conv.spanish.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default A1_10_PronombresObjeto;