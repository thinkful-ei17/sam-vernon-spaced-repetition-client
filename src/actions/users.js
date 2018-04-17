import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

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
			dispatch(updateUserWordSetsSuccess(wordSets))
		})
		.catch(err => 
			dispatch(updateUserWordSetsError(err))
		)
}

export const FETCH_WORDSET_REQUEST = 'FETCH_WORDSET_REQUEST';
export const fetchWordSetRequest = () => ({
  type: FETCH_WORDSET_REQUEST
});

export const FETCH_WORDSET_SUCCESS = 'FETCH_WORDSET_SUCCESS';
export const fetchWordSetSuccess = wordSet => ({
  type: FETCH_WORDSET_SUCCESS,
  wordSet
});

export const FETCH_WORDSET_ERROR = 'FETCH_WORDSET_ERROR';
export const fetchWordSetError = error => ({
  type: FETCH_WORDSET_ERROR,
  error
});

export const fetchWordSet = wordSet => (dispatch, getState) => {
    dispatch(fetchWordSetRequest());
	const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/user/wordSet?wordSet=${wordSet}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
			'Authorization': `Bearer ${authToken}`
		}
    })
				.then(res => {
					if (!res.ok) {
						return Promise.reject('Something has gone wrong');
					}
					return res.json()
				})
        .then(user => {
            console.log(user);
            dispatch(fetchWordSetSuccess(user))
		})
		.catch(err => 
			dispatch(fetchWordSetError(err))
		)
};