import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchWordSets } from '../actions/question';
import WordSetsDashboard from './word-sets-dashboard';
import Question from './question';
import Feedback from './feedback';
import Example from './example';
import WordSetOverview from './word-set-overview';

export class Dashboard extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchWordSets());
    }
    
    render() {
        let content = <WordSetsDashboard />;
        
        if (this.props.question.wordSetChosen !== null) {
            content = (
                <div>
                    <WordSetOverview />
                    <Question />
                </div>
            );
            if (this.props.question.correct !== null) {
                content = (
                    <div>
                        <WordSetOverview />
                        <Feedback />
                    </div>
                );
                if (this.props.question.viewExample) {
                    content = (
                        <div>
                            <WordSetOverview />
                            <Example />
                        </div>
                    );
                }
            }
        }

        return (
            <div className="dashboard">
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        question: state.question,
        menuVisible: state.question.menuVisible
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
