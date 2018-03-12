import React from 'react';
import './faqs.css';

export default function FAQs() {
    return (
        <div className="faqs-page">
            <h2>SATutor FAQs</h2>
            <h3>What is SATutor?</h3>
            <p>
                SATutor is a free app to help students improve their vocabulary in preparation for the Verbal portion of the SAT I. It is built on a spaced-repeitition algorithm to optimize their capacity to memorize new words.
            </p>
            <h3>What is a spaced-repetition algorithm?</h3>
            <p>
                The spaced-repeitition algorithm is the foundation of the learning model used in SATutor. The general concept behind the idea is that we need to spend more time learning information we are less familiar with, but we also can't completely ignore the information we already know, because we might forget it with the influx of new information. This algorithm will help you to properly space out when you should study a given word based on how well you know it.
            </p>
        </div>
    )
}