import React from 'react';
import './about.css';

export default function About() {
    return (
        <div className="about-page">
            <h2 className='primary-header'>About SATutor</h2>

            <h3 className="secondary-header">Algorithm:</h3>
            <ul className="about-list content-text-normal">
                <li><span className="about-list-item-title">Name:</span> Spaced-Repetition</li>
                <li><span className="about-list-item-title">Data Structure:</span> Singly-Linked List</li>
                <li><span className="about-list-item-title">Purpose:</span> Designed to optimize learning based on the Forgetting Curve.</li>
            </ul>

            <h3 className="secondary-header">Technology Stack:</h3>
            <ul className="about-list content-text-normal">
                <li><span className="about-list-item-title">Front End:</span> React, Redux, HTML, CSS, JS</li>
                <li><span className="about-list-item-title">Back End:</span> Node.js, Express.js</li>
                <li><span className="about-list-item-title">Authentication:</span> Passport.js, JWT</li>
                <li><span className="about-list-item-title">Database:</span> MongoDB, Mongoose</li>
                <li><span className="about-list-item-title">Hosting Platforms:</span> Netlify, Heroku, mLab</li>
            </ul>
            
            <h3 className="secondary-header">Engineering Team:</h3>
            <ul className="about-list content-text-normal">
                <li><span className="about-list-item-title">Front End:</span> Sam Gould (<a className="github-link" href="https://github.com/samuelgould">GitHub</a>)</li>
                <li><span className="about-list-item-title">Back End:</span> Vernon Mensah (<a className="github-link" href="https://github.com/Alderr">GitHub</a>)</li>
            </ul>
            
        </div>
    )
}