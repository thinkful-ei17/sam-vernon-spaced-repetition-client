import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { selectWordSet } from '../actions/question';
import './word-sets-dashboard.css';

export class WordSetsDashboard extends React.Component {
    selectWordSet(name) {
        this.props.dispatch(selectWordSet())
    }
    
    render() {

        let welcomeMessage;
        let newWordSetsMessage;
        let usersWordSets;
        let newWordSets = (
            <div>Loading...</div>
        )

        if (this.props.wordSets !== null) {

            usersWordSets = this.props.usersWordSets;
            newWordSets = this.props.wordSets;

            usersWordSets = usersWordSets.map( wordSet => {
                for (let i = 0; i < newWordSets.length; i++) {
                    if (wordSet.name === newWordSets[i].name) {
                        newWordSets.splice(i, 1);
                        break;
                    }
                }
                
                return (
                    <div className="word-set-container" key={wordSet.id}>
                        <button className="word-set-button" value={wordSet.name} onClick={event => this.selectWordSet(event.target.value)}>{wordSet.name}</button>
                        <div>Progress: {wordSet.mastery}</div>
                    </div>
                )
            });

            
            if (usersWordSets !== null) {
                welcomeMessage = (
                    <div>
                        <h2>Welcome Back to SATutor!</h2>
                        <h3>Returned to Master a Word Set?</h3>
                    </div>
                )
            }

            newWordSetsMessage = (
                <h3>Want to Try a New Word Set?</h3>
            )

            if (!newWordSets[0]) {
                newWordSetsMessage = (
                    <div className="hide"></div>
                )
                newWordSets = (
                    <div className="hide"></div>
                )
            } else {
                newWordSets = newWordSets.map( wordSet => {
                    return (
                        <div className="word-set-container" key={wordSet.id}>
                            <button className="word-set-button" value={wordSet.name} onClick={event => console.log(event.target.value)}>{wordSet.name}</button>
                            {/* <div>{wordSet.description}</div> */}
                        </div>
                    )
                });
            }

            
        }

        return (
            <div className="word-sets">
                {welcomeMessage}
                {usersWordSets}
                {newWordSetsMessage}
                {newWordSets}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        usersWordSets: state.auth.currentUser.wordSets,
        wordSets: state.question.wordSets
    };
};

export default requiresLogin()(connect(mapStateToProps)(WordSetsDashboard));