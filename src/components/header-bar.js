import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { updateUserWordSets } from '../actions/users';
import { toggleMenuVisible, resetState } from '../actions/question';
import { clearAuthToken } from '../local-storage';
import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(resetState());
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    changeWordSets() {
        this.props.dispatch(updateUserWordSets());
        this.props.dispatch(resetState())
    }

    render() {
        let header = (
            <h1 className="header-item" onClick={() => this.props.dispatch(resetState())}>SATutor</h1>
        );
        let logIn = (
            <Link to="/" className="header-link desktop">
                <h2 className="header-item">Log In</h2>
            </Link>
        );
        let faqs = (
            <Link to="/faqs" className="header-link desktop">
                <h2 className="header-item">FAQs</h2>
            </Link>
        );
        let about = (
            <Link to="/about" className="header-link desktop">
                <h2 className="header-item">About</h2>
            </Link>
        );
        let register = (
            <Link to="/register" className="header-link desktop">
                <h2 className="header-item">Register</h2>
            </Link>
        );

        let hamburgerIcon = (
            <div className="hamburger-icon mobile" onClick={() => this.props.dispatch(toggleMenuVisible())}>
                <span className="hamburger-top-stripe hamburger"></span>
                <span className="hamburger-middle-stripe hamburger"></span>
                <span className="hamburger-bottom-stripe hamburger"></span>
            </div>
        );

        if (this.props.loggedIn) {
            hamburgerIcon = (
                <div className="hamburger-icon" onClick={() => this.props.dispatch(toggleMenuVisible())}>
                    <span className="hamburger-top-stripe hamburger"></span>
                    <span className="hamburger-middle-stripe hamburger"></span>
                    <span className="hamburger-bottom-stripe hamburger"></span>
                </div>
            )
            header = (
                <h1 className="header-item" onClick={() => this.changeWordSets()}>SATutor</h1>
            );
            faqs = (
                <div></div>
            );
            about = (
                <div></div>
            );
            register = (
                <div></div>
            );
            logIn = (
                <div></div>
            )
        }

        if (this.props.menuVisible) {
            hamburgerIcon = (
                <div className="hamburger-icon" onClick={() => this.props.dispatch(toggleMenuVisible())}>
                    <span className="hamburger-top-stripe hamburger-top-open hamburger"></span>
                    <span className="hamburger-middle-stripe hamburger-middle-open hamburger"></span>
                    <span className="hamburger-bottom-stripe hamburger-bottom-open hamburger"></span>
                </div>
            );
        }

        return (
            <div className="header-bar">
                <Link to="/" className="header-link">
                    {header}
                </Link>
                {faqs}
                {about}
                {register}
                {logIn}

                {hamburgerIcon}                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    menuVisible: state.question.menuVisible
});

export default connect(mapStateToProps)(HeaderBar);
