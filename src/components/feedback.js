import React from 'react';
import './feedback.css';

export class Feedback extends React.Component {
    
    render() {
        const question = {
            word: "Ambivalent",
            definition: "adj. Having mixed feelings or contradictory ideas about something or someone.",
            rightAnswer: "conflicted",
            shuffledArray: ["unrealistic", "apprehensive", "supportive", "conflicted"],
            prompt: "Because he was nervous about performing in front of a crowd, Jed was ambivalent about entering the singing competition."
        };

        const correct = true;

        let optionFeedback = []
        for (let i = 0; i < 4; i++) {
            if (question.shuffledArray[i] === question.rightAnswer) {
                optionFeedback[i] = "question-option correct-answer-option";
            } else {
                optionFeedback[i] = "question-option wrong-answer-option";
            }
        }

        let feedback = (
            <h3 className="question-feedback-text">Incorrect. The answer was <span className="correct-answer-text">{question.rightAnswer}</span>.</h3>
        )
        if (correct) {
            feedback = (
                <h3 className="question-feedback-text">Correct! The answer was <span className="correct-answer-text">{question.rightAnswer}</span>.</h3>
            )
        }
        
        return (
            <div className="feedback">
                <h2 className="question-word">{question.word}</h2>
                <div className="word-definition-container">    
                    <h3 className="word-definition">{question.definition}</h3>
                </div>
                {feedback}
                <div className="question-options-container">
                    <div className={optionFeedback[0]}>A. {question.shuffledArray[0]}</div>
                    <div className={optionFeedback[1]}>B. {question.shuffledArray[1]}</div>
                    <div className={optionFeedback[2]}>C. {question.shuffledArray[2]}</div>
                    <div className={optionFeedback[3]}>D. {question.shuffledArray[3]}</div>
                </div>
            </div>
        )
    }
}

export default Feedback;