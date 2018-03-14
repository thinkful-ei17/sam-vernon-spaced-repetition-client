import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchQuestion, sendQuestionResponse, generateQuestionFeedback } from '../actions/question';
import './question.css';

export class Question extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestion(this.props.wordSet));
    }
    
    shuffle = array => {
        for(let i = 0; i < array.length; i++){
          let randomIndex = this._getRandomInt(array.length - i);
          this._swap(array, i, randomIndex + i);
        }
        return array;
      }
      
    _getRandomInt = number => {
        return Math.floor(Math.random() * number);
    }
      
    _swap = (array, i, j) => {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      };
    
    render() {

        if (this.props.question) {

            const { word, definition, correctAnswer, incorrectAnswers, prompt } = this.props.question;

            let shuffledArray = this.shuffle(incorrectAnswers);
            shuffledArray = shuffledArray.slice(0,4);
            shuffledArray[this._getRandomInt(4)] = correctAnswer;

            const handleResponse = answer => {
                let correct = true;
                if (answer !== correctAnswer) {
                    correct = false;
                }
                this.props.dispatch(sendQuestionResponse(correct, this.props.wordSet));
                this.props.dispatch(generateQuestionFeedback(word, definition, correctAnswer, shuffledArray, prompt, correct));
            }

            return (
                <div className="question">
                    <h2>{word}</h2>
                    <div className="question-options-button-container">
                        <button className="question-option-button" value={shuffledArray[0]} onClick = { event => handleResponse(event.target.value)}>A. {shuffledArray[0]}</button>
                        <button className="question-option-button" value={shuffledArray[1]} onClick = { event => handleResponse(event.target.value)}>B. {shuffledArray[1]}</button>
                        <button className="question-option-button" value={shuffledArray[2]} onClick = { event => handleResponse(event.target.value)}>C. {shuffledArray[2]}</button>
                        <button className="question-option-button" value={shuffledArray[3]} onClick = { event => handleResponse(event.target.value)}>D. {shuffledArray[3]}</button>
                    </div>
                </div>
            )
        }
        return (
            <div>Loading...</div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        question: state.question.question,
        wordSet: state.question.wordSetChosen
    };
};

export default requiresLogin()(connect(mapStateToProps)(Question));