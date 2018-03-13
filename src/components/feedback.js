import React from 'react';
import './feedback.css';

export class Feedback extends React.Component {
    
    render() {
        const question = {
            word: "Ambivalent",
            definition: "having mixed feelings or contradictory ideas about something or someone.",
            rightAnswer: "conflicted",
            shuffledArray: ["unrealistic", "apprehensive", "supportive", "conflicted"],
            prompt: "Because he was nervous about performing in front of a crowd, Jed was ambivalent about entering the singing competition."
        }
        
        return (
            <div className="feedback">
                <h2>{question.word}</h2>
                <div className="question-options-container">
                    <div className="question-option">A. {question.shuffledArray[0]}</div>
                    <div className="question-option">B. {question.shuffledArray[1]}</div>
                    <div className="question-option">C. {question.shuffledArray[2]}</div>
                    <div className="question-option">D. {question.shuffledArray[3]}</div>
                </div>
            </div>
        )
    }
}

export default Feedback;