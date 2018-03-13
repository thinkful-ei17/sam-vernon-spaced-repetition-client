import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './question.css';

export class Question extends React.Component {
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
        const question = {
            word: "Ambivalent",
            definition: "having mixed feelings or contradictory ideas about something or someone.",
            rightAnswer: "conflicted",
            wrongAnswers: ["unrealistic", "apprehensive", "supportive", "annoyed", "stressed"],
            prompt: "Because he was nervous about performing in front of a crowd, Jed was ambivalent about entering the singing competition."
        }

        const { word, definition, rightAnswer, wrongAnswers, prompt } = question;

        let shuffledArray = this.shuffle(wrongAnswers);
        shuffledArray = shuffledArray.slice(0,4);
        shuffledArray[this._getRandomInt(4)] = rightAnswer;

        const handleResponse = answer => {
            let correct = true;
            if (answer !== rightAnswer) {
                correct = false;
            }
            // ping server Correct or Incorrect
            // this.props.dispatch(generateQuestionFeedback(word, definition, rightAnswer, shuffledArray, prompt, correct));
        }
        
        return (
            <div className="question">
                <h2>{question.word}</h2>
                <div className="question-options-button-container">
                    <button className="question-option-button" value={shuffledArray[0]} onClick = { event => console.log(event.target.value)}>A. {shuffledArray[0]}</button>
                    <button className="question-option-button" value={shuffledArray[1]} onClick = { event => console.log(event.target.value)}>B. {shuffledArray[1]}</button>
                    <button className="question-option-button" value={shuffledArray[2]} onClick = { event => console.log(event.target.value)}>C. {shuffledArray[2]}</button>
                    <button className="question-option-button" value={shuffledArray[3]} onClick = { event => console.log(event.target.value)}>D. {shuffledArray[3]}</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Question));