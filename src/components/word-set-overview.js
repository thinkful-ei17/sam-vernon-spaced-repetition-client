import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './word-set-overview.css';

export function WordSetOverview(props) {    
    let progress;

    console.log(props.mastery);
    if (props.mastery >= 0) {
        progress = `Progress: ${props.mastery}%`;
    }

    if (props.mastery === null) {
        progress = 'Progress: 0%';
    }

    return (
        <div className="word-set-overview content-text-normal">
            Word Set: {props.wordSet}
            <br />
            {progress}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mastery: state.question.mastery,
        wordSet: state.question.wordSetChosen
    };
};

export default requiresLogin()(connect(mapStateToProps)(WordSetOverview));