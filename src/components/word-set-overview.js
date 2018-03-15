import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './word-set-overview.css';

export function WordSetOverview(props) {    
    let progress;

    if (props.mastery) {
        progress = `Progress: ${props.mastery}%`;
    }

    return (
        <div className="word-set-overview">
            Word Set: {props.wordSet}
            <br />
            {progress}
        </div>
    )
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        mastery: state.question.mastery,
        wordSet: state.question.wordSetChosen
    };
};

export default requiresLogin()(connect(mapStateToProps)(WordSetOverview));