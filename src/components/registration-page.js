import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './registration-page.css';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }


    return (
        <div className="registration-page">
            <h2 className='primary-header'>Register for SATutor</h2>
            <RegistrationForm />
            <p className='content-text-normal'>
                Already have an account? <Link to="/login"><span className='log-in-links-text'> Login here.</span></Link>
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
