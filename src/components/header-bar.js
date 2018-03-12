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
            <Link to="/" className="header-link">
                <h2 className="header-item">Log In</h2>
            </Link>
        );
        let faqs = (
            <h2 className="header-item">FAQs</h2>
        );
        let about = (
            <h2 className="header-item">About</h2>
        );
        let register = (
            <Link to="/register" className="header-link">
                <h2 className="header-item">Register</h2>
            </Link>
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
                <h1 className="header-item">SATutor</h1>
                {faqs}
                {about}
                {register}
                {logInLogOut}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
