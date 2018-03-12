import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logInLogOut=(
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
            <div className="hamburger-icon mobile">
                <span className="hamburger-top-stripe hamburger"></span>
                <span className="hamburger-middle-stripe hamburger"></span>
                <span className="hamburger-bottom-stripe hamburger"></span>
            </div>
        );

        if (this.props.loggedIn) {
            logInLogOut = (
                <button onClick={() => this.logOut()}>Log out</button>
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
        }

        return (
            <div className="header-bar">
                <Link to="/" className="header-link">
                    <h1 className="header-item">SATutor</h1>
                </Link>
                {faqs}
                {about}
                {register}
                {logInLogOut}

                {hamburgerIcon}                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
