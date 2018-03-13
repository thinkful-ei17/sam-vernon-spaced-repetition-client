import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Question from './question';
import Feedback from './feedback';
import './dashboard.css';

export class Dashboard extends React.Component {
    render() {
        let content = <Question />;
        if (this.props.question.correct !== null) {
            content = <Feedback />
        }

        return (
            <div className="dashboard">
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        question: state.question
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
