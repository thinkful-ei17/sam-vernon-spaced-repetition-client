import { 
    FETCH_QUESTION_REQUEST,
    FETCH_QUESTION_SUCCESS,
    FETCH_QUESTION_ERROR,
    GENERATE_QUESTION_FEEDBACK 
} from '../actions/question';

const initialState = {
    loading: false,
    error: null,
    question: null,
    word: null,
    definition: null,
    rightAnswer: null,
    shuffledArray: null,
    prompt: null,
    correct: null
}

export const reducer = (state = initialState, action) => {
    if (action.type === FETCH_QUESTION_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === FETCH_QUESTION_SUCCESS) {
		return Object.assign({}, state, {
			question: action.question,
			loading: false,
			error: null
		})
	}

	else if (action.type === FETCH_QUESTION_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}
    
    else if (action.type === GENERATE_QUESTION_FEEDBACK) {
          return Object.assign({}, state, {
            word: action.word,
            definition: action.definition,
            rightAnswer: action.rightAnswer,
            shuffledArray: action.shuffledArray,
            prompt: action.prompt,
            correct: action.correct
          })
    }

    return state
}
