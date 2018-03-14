import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './question.css';

export class WordSetsDashboard extends React.Component {
    render() {

        if (this.props.wordSets !== null) {

            let wordSets;



            return (
                <div className="wordSets">
                    {wordSets}
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
        wordSets: state.question.wordSets
    };
};

export default requiresLogin()(connect(mapStateToProps)(WordSetsDashboard));