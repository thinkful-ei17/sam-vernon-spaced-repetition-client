import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './question.css';

export class WordSetsDashboard extends React.Component {
    render() {

        let usersWordSets;
        let newWordSets = (
            <div>Loading...</div>
        )

        if (this.props.wordSets !== null) {

            usersWordSets = this.props.usersWordSets;

            usersWordSets = usersWordSets.map( wordSet => {
                return (
                    <div className="wordSet-container">
                        <button className="wordSet-button" value={wordSet.name} onClick={event => console.log(event.target.value)}>{wordSet.name}</button>
                        <div>Progress: {wordSet.mastery}</div>
                    </div>
                )
            });

            newWordSets = this.props.wordSets;

            newWordSets = newWordSets.map( wordSet => {
                return (
                    <div className="wordSet-container">
                        <button className="wordSet-button" value={wordSet.name} onClick={event => console.log(event.target.value)}>{wordSet.name}</button>
                        {/* <div>{wordSet.description}</div> */}
                    </div>
                )
            });
        }

        return (
            <div className="wordSets">
                {usersWordSets}
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