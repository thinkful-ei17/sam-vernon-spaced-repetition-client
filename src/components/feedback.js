import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { toggleViewExample, resetState, fetchQuestion } from '../actions/question';
import './feedback.css';

export class Feedback extends React.Component {
    loadNextQuestion() {
        this.props.dispatch(resetState());
        this.props.dispatch(fetchQuestion());   
    }

    toggleViewExample() {
        this.props.dispatch(toggleViewExample());
    }

    render() {
        const { word, definition, correctAnswer, shuffledArray, correct } = this.props.question;

        let optionFeedback = []
        for (let i = 0; i < 4; i++) {
            if (shuffledArray[i] === correctAnswer) {
                optionFeedback[i] = "question-option correct-answer-option";
            } else {
                optionFeedback[i] = "question-option wrong-answer-option";
            }
        }

        let feedback = (
            <h3 className="question-feedback-text">Incorrect. The answer was <span className="correct-answer-text">{correctAnswer}</span>.</h3>
        )
        if (correct) {
            feedback = (
                <h3 className="question-feedback-text">Correct! The answer was <span className="correct-answer-text">{correctAnswer}</span>.</h3>
            )
        }

        
        
        return (
            <div className="feedback">
                <h2 className="question-word">{word}</h2>
                <div className="word-definition-container">    
                    <h3 className="word-definition">{definition}</h3>
                </div>
                {feedback}
                <div className="question-options-container">
                    <div className={optionFeedback[0]}>A. {shuffledArray[0]}</div>
                    <div className={optionFeedback[1]}>B. {shuffledArray[1]}</div>
                    <div className={optionFeedback[2]}>C. {shuffledArray[2]}</div>
                    <div className={optionFeedback[3]}>D. {shuffledArray[3]}</div>
                </div>
                <button className="feedback-buttons" onClick={() => this.toggleViewExample()}>Example</button>
                <button className="feedback-buttons" onClick={() => this.loadNextQuestion()}>Next Word</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        question: state.question
    };
};

export default requiresLogin()(connect(mapStateToProps)(Feedback));