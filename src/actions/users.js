import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const UPDATE_USER_WORD_SETS_REQUEST = 'UPDATE_USER_WORD_SETS_REQUEST';
export const updateUserWordSetsRequest = () => ({
  type: UPDATE_USER_WORD_SETS_REQUEST
});

export const UPDATE_USER_WORD_SETS_SUCCESS = 'UPDATE_USER_WORD_SETS_SUCCESS';
export const updateUserWordSetsSuccess = wordSets => ({
  type: UPDATE_USER_WORD_SETS_SUCCESS,
  wordSets
});

export const UPDATE_USER_WORD_SETS_ERROR = 'UPDATE_USER_WORD_SETS_ERROR';
export const updateUserWordSetsError = error => ({
  type: UPDATE_USER_WORD_SETS_ERROR,
  error
});

export const updateUserWordSets = () => (dispatch, getState) => {
	dispatch(updateUserWordSetsRequest());
	const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/user/wordSets`, 
		{
  		method: 'GET',
  		headers: {
			'Authorization': `Bearer ${authToken}`
			}
		})
		.then(res => {
			if (!res.ok) {
				return Promise.reject('Something has gone wrong');
			}
			
			return res.json()
		})
		.then(wordSets => {
            console.log(wordSets);
			dispatch(updateUserWordSetsSuccess(wordSets))
		})
		.catch(err => 
			dispatch(updateUserWordSetsError(err))
		)
}