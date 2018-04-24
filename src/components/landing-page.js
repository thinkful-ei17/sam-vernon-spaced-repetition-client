import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import './landing-page.css';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard    
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    const demoLogIn = () => {
        return props.dispatch(login('demoUser', 'demopassword'));
    }

    return (
        <div className="landing-page">
            <h2 className='primary-header'>Welcome to SATutor</h2>
            <LoginForm />
            <p className='log-in-text-block content-text-normal'>
                Don't have an account? <Link to="/register"><span className='log-in-links-text'>Register now.</span></Link>
            </p>
            <p className='log-in-text-block content-text-normal'>
                Or check out SATutor with our <Link to='/dashboard' onClick={() => demoLogIn()}><span className='log-in-links-text'>Demo Account.</span></Link>
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
