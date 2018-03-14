import { API_BASE_URL } from '../config'

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