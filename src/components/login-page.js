import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/auth';

import LoginForm from './login-form';

export function LoginPage(props) {
    const demoLogIn = () => {
        return props.dispatch(login('demoUser', 'demopassword'));
    }

    return (
        <div className="landing-page">
            <h2 className='primary-header'>Welcome to SATutor</h2>
            <LoginForm />
            <p className='log-in-text-block content-text-normal'>
                Or check out SATutor with our <Link to='/dashboard' onClick={() => demoLogIn()}><span className='log-in-links-text'>Demo Account.</span></Link>
            </p>
        </div>
    );
}

export default connect()(LoginPage);
