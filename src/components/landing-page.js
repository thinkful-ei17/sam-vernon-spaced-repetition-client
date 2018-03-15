import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    let landingPageStyling = "landing-page";

    if (props.menuVisible) {
        landingPageStyling = "landing-page-with-menu";
    }

    return (
        <div className={landingPageStyling}>
            <h2>Welcome to SATutor</h2>
            <LoginForm />
            <p>
                Don't have an account? <Link to="/register">Register now.</Link>
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    menuVisible: state.question.menuVisible
});

export default connect(mapStateToProps)(LandingPage);
