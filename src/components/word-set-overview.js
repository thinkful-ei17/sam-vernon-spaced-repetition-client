import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './word-set-overview.css';

export function WordSetOverview(props) {    
    let progress;

    if (props.mastery >= 0) {
        progress = `Progress: ${props.mastery}%`;
    }

    if (props.mastery === null) {
        progress = 'Progress: 0%';
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
    return {
        wordSet: state.question.wordSetChosen,
        mastery: state.question.mastery
    };
};

export default requiresLogin()(connect(mapStateToProps)(WordSetOverview));