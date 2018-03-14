import { API_BASE_URL } from '../config'

export const TOGGLE_MENU_VISIBLE = 'TOGGLE_MENU_VISIBLE';
export const toggleMenuVisible = () => ({
  type: TOGGLE_MENU_VISIBLE
});

export const FETCH_WORDSETS_REQUEST = 'FETCH_WORDSETS_REQUEST';
export const fetchWordSetsRequest = () => ({
  type: FETCH_WORDSETS_REQUEST
});

export const FETCH_WORDSETS_SUCCESS = 'FETCH_WORDSETS_SUCCESS';
export const fetchWordSetsSuccess = wordSets => ({
  type: FETCH_WORDSETS_SUCCESS,
  wordSets
});

export const FETCH_WORDSETS_ERROR = 'FETCH_WORDSETS_ERROR';
export const fetchWordSetsError = error => ({
  type: FETCH_WORDSETS_ERROR,
  error
});

export const fetchWordSets = () => (dispatch, getState) => {
	dispatch(fetchWordSetsRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/data/wordSets`, 
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
			dispatch(fetchWordSetsSuccess(wordSets))
		})
		.catch(err => 
			dispatch(fetchWordSetsError(err))
		)
}

export const SELECT_WORD_SET = 'SELECT_WORD_SET';
export const selectWordSet = name => ({
  type: SELECT_WORD_SET
});

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
});

export const fetchQuestion = () => (dispatch, getState) => {
	dispatch(fetchQuestionRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/user/question?wordSet=Foundation`, 
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
		.then(question => {
			dispatch(fetchQuestionSuccess(question))
		})
		.catch(err => 
			dispatch(fetchQuestionError(err))
		)
}

export const SEND_QUESTION_RESPONSE_REQUEST = 'SEND_QUESTION_RESPONSE_REQUEST';
export const sendQuestionResponseRequest = () => ({
  type: SEND_QUESTION_RESPONSE_REQUEST
});

export const SEND_QUESTION_RESPONSE_SUCCESS = 'SEND_QUESTION_RESPONSE_SUCCESS';
export const sendQuestionResponseSuccess = () => ({
  type: SEND_QUESTION_RESPONSE_SUCCESS
});

export const SEND_QUESTION_RESPONSE_ERROR = 'SEND_QUESTION_RESPONSE_ERROR';
export const sendQuestionResponseError = error => ({
  type: SEND_QUESTION_RESPONSE_ERROR,
  error
});

export const sendQuestionResponse = correct => (dispatch, getState) => {
	dispatch(sendQuestionResponseRequest());
	const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/user/response?wordSet=Foundation`, 
		{
  		method: 'POST',
  		headers: {
            'Content-Type': 'application/json',
			'Accept': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: {'answer': true}
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject('Something has gone wrong');
			}
			return res.json()
		})
		.then(() => {
			dispatch(sendQuestionResponseSuccess())
		})
		.catch(err => 
			dispatch(sendQuestionResponseError(err))
		)
}

export const GENERATE_QUESTION_FEEDBACK = 'GENERATE_QUESTION_FEEDBACK';
export const generateQuestionFeedback = (word, definition, correctAnswer, shuffledArray, prompt, correct) => ({
    type: GENERATE_QUESTION_FEEDBACK,
    word,
    definition,
    correctAnswer,
    shuffledArray,
    prompt,
    correct
})

export const TOGGLE_VIEW_EXAMPLE = 'TOGGLE_VIEW_EXAMPLE';
export const toggleViewExample = () => ({
    type: TOGGLE_VIEW_EXAMPLE
})

export const RESET_STATE = 'RESET_STATE';
export const resetState = () => ({
    type: RESET_STATE
})