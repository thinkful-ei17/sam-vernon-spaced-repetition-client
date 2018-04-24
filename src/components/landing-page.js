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
        <div className='landing-page'>
            <h2 className='primary-header'>Welcome to SATutor</h2>
            <div className='landing-page-intro-block'>
                <p className='secondary-header'>
                    Memorizing vocab words for the SATs doesn't have to be a nightmare. 
                </p>
                <p className='content-text-normal landing-page-more-information'>
                    Thanks to SATutor, students only need to focus on putting in the time. Built on top of a spaced-repeitition algorithm, SATutor will help students maximize their efficiency when memorizing vocab words, so they won't forget the words they have previously learned come test time, while continually introducing new words to expand their vocabulary.
                </p>
            </div>
            <LoginForm />
            <p className='log-in-text-block content-text-normal'>
                Don't have an account? <Link to='/register'><span className='log-in-links-text'>Register now.</span></Link>
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
