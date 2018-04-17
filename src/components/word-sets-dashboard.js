import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { selectWordSet } from '../actions/question';
import { fetchWordSet } from '../actions/users';
import './word-sets-dashboard.css';

export class WordSetsDashboard extends React.Component {
    selectWordSet(wordSet) {
        this.props.dispatch(fetchWordSet(wordSet));
        this.props.dispatch(selectWordSet(wordSet));
    }
    
    render() {
        let usersWordSets;
        let newWordSets;
        let welcomeMessage = (
            <h2>Welcome to SATutor!</h2>
        );
        let newWordSetsMessage = (
            <div>Loading...</div>
        );

        if (this.props.wordSets) {
            
            newWordSets = this.props.wordSets;

            if (this.props.usersWordSets) {

                usersWordSets = this.props.usersWordSets;
                

                usersWordSets = usersWordSets.map( wordSet => {
                    for (let i = 0; i < newWordSets.length; i++) {
                        if (wordSet.name === newWordSets[i].name) {
                            newWordSets.splice(i, 1);
                            break;
                        }
                    }
        
                    let style = ({
                        width: `${wordSet.mastery}%`
                    })
                        
                    return (
                        <div className="word-set-container" key={wordSet.id}>
                            <button className="word-set-button" value={wordSet.name} onClick={event => this.selectWordSet(event.target.value)}>{wordSet.name}</button>
                            <div className="progress-meter">
                                <div className="current-progress" style={style}></div>
                            </div>
                            <div>Progress: {wordSet.mastery}%</div>
                        </div>
                    )
                });
            }

            if (!newWordSets[0]) {
                newWordSets = (
                    <div className="hide"></div>
                );
                newWordSetsMessage = (
                    <div className="hide"></div>
                )
            } else {
                newWordSetsMessage = <h3>Want to Try a New Word Set?</h3>
                newWordSets = newWordSets.map( wordSet => {
                    return (
                        <div className="word-set-container" key={wordSet.id}>
                            <button className="word-set-button" value={wordSet.name} onClick={event => this.selectWordSet(event.target.value)}>{wordSet.name}</button>
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
    return {
        usersWordSets: state.auth.currentUser.wordSets,
        wordSets: state.question.wordSets
    };
};

export default requiresLogin()(connect(mapStateToProps)(WordSetsDashboard));