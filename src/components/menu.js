import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { resetState } from '../actions/question';
import './menu.css';

export class Menu extends React.Component {
    
    render() {

        return (
            <div className="menu">
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        wordSet: state.question.wordSetChosen
    };
};

export default requiresLogin()(connect(mapStateToProps)(Menu));