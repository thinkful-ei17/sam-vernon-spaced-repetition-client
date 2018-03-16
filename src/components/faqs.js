import React from 'react';
import './faqs.css';

export default function FAQs() {
    return (
        <div className="faqs-page">
            <h2>SATutor FAQs</h2>
            <h3>What is SATutor?</h3>
            <p>
                SATutor is a free app to help students improve their vocabulary in preparation for the Verbal portion of the SAT I. It is built on a spaced-repeitition algorithm to optimize a student's capacity to memorize new words without forgetting the words they have previously learned.
            </p>
            <h3>Why is it repeating words I've already seen? Have I gone through the whole list?</h3>
            <p>
                This is intentional. The progress bar will help a student know when they can be confident they have memorized the entire list. Words will be repeated periodically to help with memorization.
            </p>
            <h3>What is a spaced-repetition algorithm?</h3>
            <p>
                The spaced-repeitition algorithm is the foundation of the learning model used in SATutor. The general concept behind the algorithm is that students need to revisit words that they learn periodically, so that they solidify their understanding. It was developed to counteract the general forgetting curve. SATutor will do all the work in terms of determining when a student should revisit a word they previously learned in order to not forget it.
            </p>
            <h3>What is the forgetting curve?</h3>
            <p>
                The forgetting curve is a principle that generalizes the rate at which someone forgets information based on how many times you've learned something. If we learn a word and then never see it again, we will quickly forget its meaning. The more exposures a person has to a word, the longer it will take for them to forget it.
            </p>
        </div>
    )
}