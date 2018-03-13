import React from 'react';

export class Question extends React.Component {
    render() {
        const question = {
            word: "Ambivalent",
            definition: "having mixed feelings or contradictory ideas about something or someone.",
            rightAnswer: "conflicted",
            wrongAnswers: ["unrealistic", "apprehensive", "supportive", "annoyed", "stressed"],
            prompt: "Because he was nervous about performing in front of a crowd, Jed was ambivalent about entering the singing competition."
        }
        
        return (
            <div className="question">
                <h2>{question.word}</h2>
            </div>
        )
    }
}

export default Question;