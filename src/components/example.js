import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { toggleViewExample, fetchQuestion, nextQuestion } from '../actions/question';
import './example.css';

export class Example extends React.Component {
    loadNextQuestion() {
        this.props.dispatch(nextQuestion());
        this.props.dispatch(fetchQuestion());   
    }

    toggleViewExample() {
        this.props.dispatch(toggleViewExample());
    }

    render() {
        const { word, prompt } = this.props.question;
        
        return (
            <div className="feedback">
                <h2 className="question-word">{word}</h2>
                <div className="example-sentence-container">    
                    <h3 className="example-sentence">{prompt}</h3>
                </div>
                <div className="feedback-buttons-container">
                    <button className="feedback-button" onClick={() => this.toggleViewExample()}>Back</button>
                    <button className="feedback-button" onClick={() => this.loadNextQuestion()}>Next Word</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        question: state.question
    };
};

export default requiresLogin()(connect(mapStateToProps)(Example));