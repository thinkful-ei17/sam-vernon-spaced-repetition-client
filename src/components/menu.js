import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { toggleMenuVisible, resetState } from '../actions/question';
import { clearAuthToken } from '../local-storage';
import './menu.css';

export class Menu extends React.Component {
    logOut() {
        this.props.dispatch(resetState());
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let menu = (
            <div className="menu-container">
                <Link to="/" className="menu-link" onClick={() => this.props.dispatch(toggleMenuVisible())}>
                    <h2 className="menu-item">Log In</h2>
                </Link>
                <Link to="/faqs" className="menu-link" onClick={() => this.props.dispatch(toggleMenuVisible())}>
                    <h2 className="menu-item">FAQs</h2>
                </Link>
                <Link to="/about" className="menu-link" onClick={() => this.props.dispatch(toggleMenuVisible())}>
                    <h2 className="menu-item">About</h2>
                </Link>
                <Link to="/register" className="menu-link" onClick={() => this.props.dispatch(toggleMenuVisible())}>
                    <h2 className="menu-item">Register</h2>
                </Link>
            </div>
        );

        if (this.props.loggedIn) {
            menu = (
                <div className="menu-container">
                    <div className="menu-item" onClick={() => this.props.dispatch(resetState())}>Change Word Sets</div>
                    <div className="menu-item" onClick={() => this.logOut()}>Log Out</div>
                </div>
            )
        }
        
        return (
            <div className="menu">
                {menu}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null,
        wordSet: state.question.wordSetChosen
    };
};

export default connect(mapStateToProps)(Menu);