import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchWordSets } from '../actions/question';
import WordSetsDashboard from './word-sets-dashboard';
import Question from './question';
import Feedback from './feedback';
import Example from './example';
import Menu from './menu';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchWordSets());
    }
    
    render() {
        let content = <WordSetsDashboard />;
        
        if (this.props.question.wordSetChosen !== null) {
            content = <Question />;
            if (this.props.question.correct !== null) {
                content = <Feedback />
                if (this.props.question.viewExample) {
                    content = <Example />
                }
            }
        }

        let menu;

        if (this.props.menuVisible) {
            menu = <Menu />
        }

        return (
            <div className="dashboard">
                {menu}
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
        question: state.question,
        menuVisible: state.question.menuVisible
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
